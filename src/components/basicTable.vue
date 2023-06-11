<template>
  <div>
    <div class="container">
      <el-table
        ref="elTable"
        @selection-change="selectionChange"
        tooltip-effect="dark"
        :data="tableData"
        v-loading="loading"
        v-bind="$attrs"
      >
        <template v-for="item in tableConfigure.column">
          <!-- checkbox -->
          <el-table-column
            v-if="item.type === 'selection'"
            :width="45"
            type="selection"
            :key="item.type"
          ></el-table-column>

          <el-table-column
            v-else-if="item.type === 'index'"
            :width="item.width"
            :label="item.label"
            type="index"
            :key="item.type"
          ></el-table-column>
          <!-- slot -->
          <el-table-column
            v-else-if="item.type === 'slot'"
            :key="item.prop"
            :show-overflow-tooltip="item.tooltip"
            :label="item.label"
            :prop="item.prop"
            :width="item.width"
          >
            <template slot-scope="scope">
              <slot :name="item.slot" v-bind="scope"></slot>
            </template>
          </el-table-column>

          <!-- basic  operate -->
          <el-table-column
            v-else-if="item.type === 'operate'"
            :label="item.label"
            :width="item.width"
            fixed="right"
            :key="item.prop"
          >
            <template slot-scope="scope">
              <el-button
                v-for="btn in item.operateButtons"
                :key="btn.title"
                :type="btn.type"
                @click="handleEventer(scope,btn.click,scope.$index)"
                :size="btn.size"
              >{{ btn.title }}</el-button>
            </template>
          </el-table-column>

          <!-- basic -->
          <el-table-column
            v-else-if="item.tooltip"
            :key="item.prop"
            :label="item.label"
            :prop="item.prop"
            :width="item.width"
            :show-overflow-tooltip="item.tooltip"
          ></el-table-column>


          <el-table-column
          v-else
          :key="item.prop"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
          align="center"
        ></el-table-column>
        </template>
      </el-table>
    </div>
  </div>
</template>

<script  >
export default {
  name: "basic-table",
  props: {
    tableData: {
      type: Array,
      default: () => []
    },
    tableConfigure: {
      type: Object,
      default: () => {},
      column: {
        type: Array,
        default: () => []
      }
    }
  },
  data() {
    return {
      multipleSelection: [],
      dialogVisible: false,
      loading: false
    };
  },
  mounted(){
    console.info('$attrs',this.$attrs.conAlan);
    console.info('$listeners',this.$listeners);
    // this.$listeners.test();

  },
  methods: {
    selectionChange(value) {
      this.multipleSelection = value;
      this.$emit("selection-change", value);
    },
    handleEventer({row},clickType,index){
      this.$emit('handle-click',{row,clickType,index});
    }
  }
};
</script>

<style scoped >
.container {
  width: 900px;
  display: flex;
  flex-direction: column;
}
.pagination {
  margin-top: 20px;
}
</style>