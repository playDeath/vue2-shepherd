
<template>
  <div></div>
</template>
<script>
import Shepherd from 'shepherd.js'
import Vue from 'vue'
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

      this.tour.on('show', ({ step }) => {
        this.$nextTick(() => {
          console.log('Step shown:', step);
          const div = document.createElement('div')
          const steps = this.steps
          const currentId = step.id
          const tour = this.tour
          const indicatorFn = Vue.extend({
            template: `<div id="pockerrsdhsfdsdfh">
              <div v-for="item in steps" :key="item.id" :class="currentId === item.id ? 'blue': ''" @click="jumpTo(item.id)">
              {{item.id}}
            </div></div>`,
            data() {
              return {
                steps,
                currentId,
                tour
              }
            },
            created() {
              console.log(this.steps)
            },
            methods:{
              jumpTo(id){
                console.log(this.tour, id)
                this.tour.show(id)
              }
            }
          })
          const indicator = new indicatorFn().$mount()
          console.log(indicator)
          step.el.appendChild(indicator.$el)
        })

        // 在这里可以执行你想要的操作
      });
      this.tour.start();
    }
  }
}
</script>
<style>
.blue {
  color: skyblue
}
</style>
