import debounce from 'lodash/debounce';
export default {
    data() {
        return {
            caculate: null,
            height:0,
        }
    },
    methods: {
        useTableHeight(tableRef, offset = 0,maxHeight = 200,callback) {
            const minHeight = maxHeight;
            let height = minHeight;
            this.caculate = debounce(() => {
                const table = tableRef?.$el;
                const rect = table?.getBoundingClientRect();
                if (rect) {
                    const { top } = rect;
                    let value = window.innerHeight - top - offset;
                    console.info(value);
                    if (value < minHeight) {
                        value = minHeight;
                    }
                    height = value;
                    callback(height);
                }
            }, 300);
            this.height = height;
        }
    },
    mounted() {
        this.$nextTick(() => {
            window.addEventListener('resize', this.caculate);
        })
    },
    destroyed() {
        window.removeEventListener('resize', this.caculate);
    }
}