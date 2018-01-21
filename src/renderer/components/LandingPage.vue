<template>
  <div>
    <div class="section">
      <div class="columns">
        <div id="sidebar" class="column is-3 is-fullheight">
          <div class="container">
            <p>this is a test</p>
          </div>
        </div>
        <div id="tab-area" class="column is-fullheight">
          <div class="container">
            <p>this is a test</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import SystemInformation from './LandingPage/SystemInformation'

  export default {
    name: 'landing-page',
    components: { SystemInformation },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>

<style>
#sidebar {
  background-color: aqua;
}

#tab-area {
  background-color: blanchedalmond;
}
</style>
