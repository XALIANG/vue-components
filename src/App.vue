<template>
  <div id="app">
    <div>
      <Basic-table autoHeight conAlan="luliang" :data="list" :columns="column" >
      <template #testSlot="scope">{{ scope.row.testSlot }}</template>
      <template #btn >
        sadsa
      </template>
    </Basic-table>
    </div>
    <!-- <Pagination @current-change="currentChange" @size-change="sizeChange" :pageData="pageData" /> -->
  </div>
</template>

<script>
import BasicTable from "./components/basicTable.vue";
// import Pagination from "./components/Pagination.vue";
export default {
  name: "App",
  components: {
    BasicTable,
    // Pagination
  },
  data() {
    return {
        column: [
          {
            type: "selection",
          },
          {
            type: "index",
            label:'排序',
          },
          {
            label: "姓名",
            prop: "name"
          },
          {
            label: "数字",
            prop: "age",
            tooltip: true
          },
          {
            label: "测试slot",
            slot: "testSlot",
            type: "slot",
            tooltip: true
          },
          {
            label: "操作",
            type: "operate",
            // operateButtons: [
            //   {
            //     title: "查看",
            //     type: "text",
            //     size: "small",
            //     click:'handleView'
            //   },
            //   {
            //     title: "修改",
            //     type: "text",
            //     size: "small",
            //     click:'handleEdit'
            //   },
            //   {
            //     title: "删除",
            //     type: "text",
            //     size: "small",
            //     click:'handleDelete'
            //   }
            // ]
          }
        ],
      pageData: {
        page: 1,
        pageSize: 10,
        total: 20
      },
      list: [
        {
          name: "test",
          testSlot: "8880000000000000000000000000000000000000000000000000000023",
          age:
            "666555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555"
        },
        {
          name: "test",
          testSlot: "888",
          age:
            "666555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555"
        },
        {
          name: "test",
          testSlot: "888",
          age:
            "666555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555"
        },
        {
          name: "test",
          testSlot: "888",
          age:
            "666555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555"
        },
        {
          name: "test",
          testSlot: "888",
          age:
            "666555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555"
        },
        {
          name: "test",
          testSlot: "888",
          age:
            "666555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555"
        },
        {
          name: "test",
          testSlot: "888",
          age:
            "666555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555"
        },
        {
          name: "test",
          testSlot: "888",
          age:
            "666555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555"
        },
        {
          name: "testwwwwwwww",
          age: 312312,
          testSlot: "000"
        },
        {
          name: "test",
          testSlot: "888",
          age:
          "666555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555"
        },
        {
          name: "testwwwwwwww",
          age: 312312,
          testSlot: "000"
        },
        {
          name: "test",
          testSlot: "888",
          age:
            "666555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555"
        },
        {
          name: "testwwwwwwww",
          age: 312312,
          testSlot: "000"
        },
        {
          name: "test",
          testSlot: "888",
          age:
            "666555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555"
        },
        {
          name: "testwwwwwwww",
          age: 312312,
          testSlot: "000"
        },
        {
          name: "test",
          testSlot: "888",
          age:
            "666555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555"
        },
        {
          name: "testwwwwwwww",
          age: 312312,
          testSlot: "000"
        },
        {
          name: "test",
          testSlot: "888",
          age:
            "666555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555"
        },
        {
          name: "testwwwwwwww",
          age: 312312,
          testSlot: "000"
        },
        {
          name: "test",
          testSlot: "888",
          age:
            "666555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555"
        },
        {
          name: "testwwwwwwww",
          age: 312312,
          testSlot: "000"
        },
        {
          name: "test",
          testSlot: "888",
          age:
            "666555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555"
        },
        {
          name: "testwwwwwwww",
          age: 312312,
          testSlot: "000"
        },
        {
          name: "test",
          testSlot: "888",
          age:
            "666555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555"
        },
        {
          name: "testwwwwwwww",
          age: 312312,
          testSlot: "000"
        },
        {
          name: "test",
          testSlot: "888",
          age:
            "666555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555"
        },
        {
          name: "testwwwwwwww",
          age: 312312,
          testSlot: "000"
        }
      ],
      listCopy: [],
      listCopy1: [],
      val: ""
    };
  },
  mounted() {
    this.listCopy = this.list;
    this.listCopy1 = this.list;
  },
  methods: {
    handleClick({row,clickType}){
      this[clickType](row);
    },
    handleDelete(){
      console.info('delete');
    },
    handleView(){
      console.info('view',this.$listeners);
    },
    handleEdit(){
      console.info('edit');
    },
    sizeChange(val) {
      this.size = val;
      this.listCopy = this.listCopy1;
      const data = this.listCopy.filter((itm, i) => i < val);
      console.info("this.list", this.listCopy);
      this.list = data;
    },
    currentChange(val) {
      console.info(val);
      this.listCopy = this.listCopy1;
      // const data = this.listCopy.slice(val,);
    },
    submit(){
      console.info('test111');
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
