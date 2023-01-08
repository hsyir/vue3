<template>
  <v-app>
    <component :is="layout"></component>
  </v-app>
</template>
<script>


import defaultLayout from './layouts/default.vue';
import basic from './layouts/basic.vue';


export default {
  components:{
    default: defaultLayout,
    basic,
  },
  data: function(){
    return {
      layout: "default",
    }
  },
  methods: {
    /**
     * Set the application layout.
     *
     * @param {String} layout
     */
    setLayout (layout) {
      this.layout = layout
    }
  },
  mounted() {
  },
}
</script>
