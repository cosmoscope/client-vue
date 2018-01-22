<template>
  <div id="app">
    <div class="columns">
      <div id="tool-bar" class="column">
        <tool-bar></tool-bar>
      </div>
    </div>
    <div class="columns">
      <div id="side-bar" class="column">

      </div>
      <div id="tab-area" class="column">
        <tab-area></tab-area>
      </div>
    </div>
  </div>
</template>

<script>
  import LandingPage from '@/components/LandingPage'
  import TabArea from '@/components/TabArea'
  import ToolBar from '@/components/ToolBar'

  export default {
    name: 'vue-client',
    components: {
      LandingPage,
      TabArea,
      ToolBar
    }
  }
</script>

<style>
#side-bar {
  background-color: aqua;
  height: calc(100vh - 50px);
}

#tab-area {
  height: calc(100vh - 50px);
}
</style>
