<template>
  <el-pagination
    class="pagination"
    background
    layout="total, sizes, prev, pager, next, jumper"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :total="pageData.total"
    :page-size="pageData.PageSize"
    :page-sizes="[5,10,15]"
    :current-page="pageData.page"
  ></el-pagination>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Pagination",
  props: {
    pageData: {
      type: Object
    }
  },
  data() {
    return {};
  },
  methods: {
    handleCurrentChange(val) {
      console.info("current", val);
      this.$emit("current-change", val);
    },
    handleSizeChange(val) {
      console.info("size", val);
      this.$emit("size-change", val);
    }
  }
};
</script>