<template>
  <div>
    {{ height }}
    <div class="container" :style="`height:${height === 0 ? 100 + '%' : height}px`">
      <el-table ref="elTable" @selection-change="selectionChange" tooltip-effect="dark" :data="data" :height="height"
        v-loading="loading" v-bind="$attrs">
        <template v-for="item in columns">
          <!-- checkbox -->
          <el-table-column v-if="item.type === 'selection'" :width="45" type="selection"
            :key="item.type"></el-table-column>

          <el-table-column v-else-if="item.type === 'index'" :width="item.width" :label="item.label" type="index"
            align="center" :key="item.prop"></el-table-column>

          <!-- slot -->
          <el-table-column align="center" v-else-if="item.slot" :key="item.prop" :show-overflow-tooltip="item.tooltip"
            :fixed="item.fixed" :label="item.label" :prop="item.prop" :width="item.width">
            <template slot-scope="scope">
              <span>
                <slot :name="item.slot" v-bind="scope"></slot>
              </span>
            </template>
          </el-table-column>

          <!-- basic  operate -->
          <el-table-column align="center" v-else-if="item.type === 'operate'" :label="item.label" :width="item.width"
            fixed="right" :key="item.prop">
            <template slot-scope="scope">
              <el-button v-for="btn in item.operateButtons" :key="btn.title" :type="btn.type"
                @click="handleEventer(scope, btn.click, scope.$index)" :size="btn.size">{{ btn.title }}</el-button>
            </template>
          </el-table-column>
          <!-- tooltip -->
          <el-table-column v-else-if="item.tooltip" :key="item.prop" :label="item.label" :prop="item.prop"
            :width="item.width" :show-overflow-tooltip="item.tooltip"></el-table-column>

          <el-table-column v-else :key="item.prop" :prop="item.prop" :label="item.label" :width="item.width"
            align="center"></el-table-column>
        </template>
      </el-table>
    </div>
  </div>
</template>

<script  >
import useHeightTable from '@/mixins/index';
export default {
  name: "basic-table",
  mixins: [useHeightTable],
  props: {
    data: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      require: true,
    },
    autoHeight: {
      type: Boolean,
      default: false
    },
    maxHeight: {
      type: Number,
      default: () => 300
    }
  },
  data() {
    return {
      multipleSelection: [],
      dialogVisible: false,
      loading: false,
      height: 200,
    };
  },
  mounted() {
    this.initTableHeight();
  },
  methods: {
    selectionChange(value) {
      this.multipleSelection = value;
      this.$emit("selection-change", value);
    },
    initTableHeight() {
      const elTable = this.$refs?.elTable;
      if (this.autoHeight) {
        this.useTableHeight(elTable, 55, this.maxHeight, (height) => {
          this.height = height;
        });
      }

    },
    handleEventer({ row }, clickType, index) {
      this.$emit('handle-click', { row, clickType, index });
    }
  }
};
</script>

<style scoped >
.container {
  display: flex;
  flex-direction: column;
}

.pagination {
  margin-top: 20px;
}
</style>
