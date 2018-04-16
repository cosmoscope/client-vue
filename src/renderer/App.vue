<template>
  <v-app id="inspire">
    <v-navigation-drawer
      permanent
      clipped
      fixed
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container  class="tab-area" fluid fill-width>
        <v-flex>
          <!-- <div> -->
            <v-tabs
              v-model="active"
              color="cyan"
              dark
              slider-color="yellow"
            >
              <v-tab
                v-for="n in 3"
                :key="n"
                ripple
              >
                Item {{ n }}
              </v-tab>
              <v-tab-item
                v-for="n in 3"
                :key="n"
              >
                <v-card flat>
                  <v-card-text>{{ text }}</v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs>
          <!-- </div> -->
        </v-flex>
      </v-container>
    </v-content>
    <!-- <v-footer app fixed>
      <span>&copy; 2017</span>
    </v-footer> -->
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: true
    }),
    props: {
      source: String
    }
  }
</script>


<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons');
  /* Global CSS */
  .tab-area {
    margin: 0px;
    padding: 0;
  }
</style>
