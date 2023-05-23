<template>
  <div id="app">
    <Basic-table :tableData="list" :tableConfigure="config">
      <template #testSlot="scope">{{ scope.row.testSlot }}</template>
    </Basic-table>
    <Pagination @current-change="currentChange" @size-change="sizeChange" :pageData="pageData" />
  </div>
</template>

<script>
import BasicTable from "./components/basicTable.vue";
import Pagination from "./components/Pagination.vue";
export default {
  name: "App",
  components: {
    BasicTable,
    Pagination
  },
  data() {
    return {
      config: {
        column: [
          {
            type: "selection",
            width: "20"
          },
          // {
          //   type: "index",
          //   width: "50"
          // },
          {
            label: "姓名",
            width: "100",
            prop: "name"
          },
          {
            label: "数字",
            width: "100",
            prop: "age",
            tooltip: true
          },
          {
            label: "测试 slot",
            width: "100",
            slot: "testSlot",
            type: "slot"
          },
          {
            label: "操作",
            width: "290",
            type: "operate",
            operateButtons: [
              {
                title: "查看",
                type: "text",
                size: "small",
                callBack: (scope, type, index) => {
                  console.info("查看", scope.row, type, index);
                }
              },
              {
                title: "修改",
                type: "text",
                size: "small",
                callBack: row => {
                  console.info("修改", row);
                }
              },
              {
                title: "删除",
                type: "text",
                size: "small",
                callBack: row => {
                  console.info("删除", row);
                }
              }
            ]
          }
        ]
      },
      pageData: {
        page: 1,
        pageSize: 10,
        total: 20
      },
      list: [
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
