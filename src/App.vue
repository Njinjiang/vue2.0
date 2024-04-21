<template>
  <div id="app">
    <router-view>

    </router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
@import './style/common.css';
#app {
  width:100%;
  height:100%;
  padding:0;
  margin:0;
}
</style>
