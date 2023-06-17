<script>
import ElTableColumn from 'element-ui';
import ElTable from 'element-ui';

export default {
    name: 'custom-column',
    props: {
        columns: {
            type: Array,
            required: true,
        },
    },
    methods: {},
    render(h, context) {
        console.info(context);
        console.info('ElTable',ElTable);
        const formatCellValue = (row, prop) => {
            return row[prop ?? ''] || '-';
        }
        // function  handleMouseEnter(){} // 浮框
        const genColDefaultSlot = (col) => {
            // const {showOverflowToolTip} = props;
            let { slot, isNeedTooltip, type } = col;
            console.info(slot)
            if (type) {
                return null;
            }
            if (isNeedTooltip == null) {
                isNeedTooltip = !slot;
            }

            // 文字溢出展示 tooltip 规则：
            // 1、考虑表格组件的 showOverflowToolTip；
            // 2、考虑列配置的 isNeedTooltip。无 slot 的话，isNeedTooltip 默认为 true，否则默认为 false。
            // const isShowTooltip = showOverflowToolTip && isNeedTooltip;
            return (slotProps) => h(
                'div',
                {
                    // class: isShowTooltip ? 'text-overflow' : '',
                    // onMouseenterCapture: (e: Event) => handleMouseEnter(e, isShowTooltip),
                },
                [slot ? (slot)(slotProps) : h('span', null, formatCellValue(slotProps.row, col.prop))]
            );
        }
        const generateElement = (columns) => {
            return columns.filter(col => !col.hidden).map(col => {
                    const { header, children, ...restProps } = col;
                    const vnodeChildren = {};
                    if (children?.length) {
                        vnodeChildren.default = () => generateElement(children);
                    }
                    else {
                        vnodeChildren.default = genColDefaultSlot(col);
                        header ? vnodeChildren.header = header : null;
                    }
                    return h(ElTableColumn, {
                        ...restProps,
                    }, vnodeChildren);
                });
        }
        console.info(generateElement(this.columns))
        return h();
    }

}
</script>