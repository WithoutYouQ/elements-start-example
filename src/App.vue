<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <h1>{{ msg }}</h1> -->
    <!-- <el-button @click.native="startHacking">Yes!</el-button> -->

    <!-- <el-tooltip content="Top center" placement="top">
      <el-button>{{ createTimestamp | timeFormat }}</el-button>

    </el-tooltip>

    <i class="el-icon-delete"></i> -->

    <!-- <button @click="greet($event)">点我呀</button> -->
    <!-- <father></father> -->
    <!-- <todo-example></todo-example> -->
    <forms></forms>

  </div>
</template>

<script>
import father from "./views/father.vue"
import todoExample from "./views/todoExample.vue"

import forms from "./views/forms.vue"
export default {
  data () {
    return {
      msg: 'Want something new?',
      createTimestamp: 1508399838000,
    }
  },

  methods: {
    startHacking () {
      this.$notify({
        title: 'Shhh',
        message: 'Just be patient...',
        duration: 6000
      })
    },
    greet: function(event) {
      console.log("Hello")
      if (event) {
        console.log(event.target.tagName)
      }
      console.log(event)
    }
  },
  components: {
    father,
    todoExample,
    forms
  }
}
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  /* text-align: center; */
  margin:50px;
}
</style>
