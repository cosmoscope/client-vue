<template>
  <v-app id="inspire">
    <v-navigation-drawer
      permanent
      clipped
      app
    >
      <v-toolbar flat dense>
        <v-text-field
          prepend-icon="search"
          label="Filter"
          solo
        ></v-text-field>
      </v-toolbar>
      <v-list two-line subheader>
        <v-list-tile avatar @click="toggle('notifications')">
          <v-list-tile-action>
          <v-checkbox v-model="checkedValues['notifications']" @click.prevent=""></v-checkbox>
          </v-list-tile-action>
          <v-list-tile-content>
          <v-list-tile-title>Notifications</v-list-tile-title>
          <v-list-tile-sub-title>Allow notifications</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile avatar @click="toggle('sound')">
          <v-list-tile-action>
          <v-checkbox v-model="checkedValues['sound']" @click.prevent=""></v-checkbox>
          </v-list-tile-action>
          <v-list-tile-content>
          <v-list-tile-title>Sound</v-list-tile-title>
          <v-list-tile-sub-title>Hangouts message</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile avatar @click="toggle('video')">
          <v-list-tile-action>
          <v-checkbox v-model="checkedValues['video']" @click.prevent=""></v-checkbox>
          </v-list-tile-action>
          <v-list-tile-content>
          <v-list-tile-title>Video sounds</v-list-tile-title>
          <v-list-tile-sub-title>Hangouts vidoe call</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile avatar @click="toggle('invites')">
          <v-list-tile-action>
          <v-checkbox  v-model="checkedValues['invites']" @click.prevent=""></v-checkbox>
          </v-list-tile-action>
          <v-list-tile-content>
          <v-list-tile-title>Invites</v-list-tile-title>
          <v-list-tile-sub-title>Notify when receiving invites</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        </v-list>
    </v-navigation-drawer>
    <v-toolbar flat app fixed clipped-left dark color="primary">
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>refresh</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container class="tab-area" fluid fill-width>
        <v-tabs
          v-model="active"
          color="secondary"
          dark
          slider-color="accent"
          grow="true"
        >
          <v-tab
            v-for="n in 3"
            :key="n"
            ripple
          >
            Item {{ n }}
            <v-spacer></v-spacer>
            <v-btn icon left>
              <v-icon>close</v-icon>
            </v-btn>
          </v-tab>
          <v-tab-item
            v-for="n in 3"
            :key="n"
          >
            <v-card flat height="100%">
              <v-card-text>Blah blah</v-card-text>
              <vue-plotly :data="data" :layout="layout" :options="options" autoResize="true" watchShallow="true" />
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-container>
    </v-content>
    <!-- <v-footer app fixed>
      <span>&copy; 2017</span>
    </v-footer> -->
  </v-app>
</template>

<script>
  import VuePlotly from '@statnett/vue-plotly'
  
  export default {
    components: {
      VuePlotly
    },
    data: () => ({
      drawer: true,
      toggle_exclusive: 2,
      selected: [2],
      data: [{ x: [1, 3], y: [2, 4] }],
      layout: {},
      checkedValues: {
        notifications: false,
        sound: false,
        video: false,
        invites: false
      },
      options: {
        autosizable: true,
        // displayModeBar: true,
        modeBarButtons: true
      },
      items: [
        { action: '15 min', headline: 'Brunch this weekend?', title: 'Ali Connors', subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?" },
        { action: '2 hr', headline: 'Summer BBQ', title: 'me, Scrott, Jennifer', subtitle: "Wish I could come, but I'm out of town this weekend." },
        { action: '6 hr', headline: 'Oui oui', title: 'Sandra Adams', subtitle: 'Do you have Paris recommendations? Have you ever been?' },
        { action: '12 hr', headline: 'Birthday gift', title: 'Trevor Hansen', subtitle: 'Have any ideas about what we should get Heidi for her birthday?' },
        { action: '18hr', headline: 'Recipe to try', title: 'Britta Holt', subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.' }
      ]
    }),
    props: {
      source: String
    },
    methods: {
      toggle (name) {
        this.checkedValues[name] = !this.checkedValues[name]
      }
    }
  }
</script>


<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons');
  /* Global CSS */
  .tab-area {
    margin: 0;
    padding: 0;
  }
</style>
