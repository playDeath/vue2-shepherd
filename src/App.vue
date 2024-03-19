<template>
  <div>
    <button @click="openUserGuide">新手指引</button>
    <br>
    <button id="btn1">第一步</button>
    <br>
    <button id="btn2">第二步</button>
    <br>
    <button id="btn3">第三步</button>
    <br>
    <button id="btn4">第四步</button>
    <tour-helper ref="tour" :steps="steps"></tour-helper>
  </div>
</template>

<script>
import tourHelper from './components/tour-helper.vue'
export default {
  name: 'App',
  components: {
    tourHelper
  },
  data() {
    return {
      steps: [{
        title: 'Creating a Shepherd Tour',
        text: 'Creating a Shepherd tour is easy. too! Just create a "Tour" instance, and add as many steps as you want.',
        attachTo: {
          element: '#btn1',
          on: 'bottom'
        },
        buttons: [
          {
            action() {
              return this.back();
            },
            classes: 'shepherd-button-secondary',
            text: 'Back'
          },
          {
            action() {
              return this.next();
            },
            text: 'Next'
          }
        ],
        id: 'btn1'
      }]
    }
  },
  methods: {
    openUserGuide() {
      this.$refs.tour.start()
    }
  }
}
</script>

<style></style>
