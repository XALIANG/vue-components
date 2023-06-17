<template>
    <div>
        <custom-column :columns="column"></custom-column>
        <!-- <el-table ref="elTable" :data="tableData" v-bind="$attrs">
        <custom-column :columns="column">
            <template
                    v-for="name in obtainSlotName"
                    #[name]="scope"
                >
                    <slot :name="name" v-bind="scope"></slot>
                </template>
           
        </custom-column>
        </el-table> -->
    </div>
</template>
<script>
import customColumn from './column.vue';
export default {
    name:'ZKTBasicTbale',
    components:{customColumn},
    props:{
        tableData: {
            type: Array,
            default: () => [],
        },
        column: {
            type: Array,
            required: true,
        },
    },
    data(){
        return {
            name:''
        }
    },
    computed:{
        obtainSlotName:function(){
            const names = new Set();
            this.column.forEach(col => {
                if(col.slot){
                    names.add(col.slot);
                }
            });
            return Array.from(names);
        }
    },
    created(){
        console.info(customColumn)
    },
    methods:{
       
    }
    
}
</script>