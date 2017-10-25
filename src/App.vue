<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <h1>{{ msg }}</h1>
    <el-button @click.native="startHacking">Yes!</el-button>

    <el-tooltip content="Top center" placement="top">
      <el-button>{{ createTimestamp | timeFormat }}</el-button>

    </el-tooltip>

    <i class="el-icon-delete"></i>
    <father></father>
  </div>
</template>

<script>
import father from "./views/father.vue"
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
    }
  },
  components: {
    father
  }
}
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
</style>
