
<template>
  <div style="display: none;"></div>
</template>
<script>
import Shepherd from 'shepherd.js'
export default {
  name: 'tour-helper',
  props: {
    steps: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      tour: null,
    }
  },
  created() {
    this.tour = new Shepherd.Tour({
      // 是否显示黑色遮罩层
      useModalOverlay: true,
      // 键盘按钮控制步骤
      keyboardNavigation: true,
      defaultStepOptions: {
        // 显示关闭按钮
        cancelIcon: {
          enabled: true
        },
        classes: 'class-1 class-2',
        scrollTo: { behavior: 'smooth', block: 'center' },
        // 高亮元素四周要填充的空白像素
        modalOverlayOpeningPadding: 4,
        // 空白像素的圆角
        modalOverlayOpeningRadius: 4,
      }
    });
  },
  methods: {
    start() {
      this.tour.addSteps(this.steps);
      this.tour.start();
    }
  }
}
</script>
</style>
