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
  watch: {
    $route: function (route) {
      this.setLayout(route.meta.layout || "default")
    }
  },
  methods: {
    setLayout (layout) {
      this.layout = layout
    }
  },
  mounted() {
    // this.setLayout(this.$route.meta.layout || "default")
  },
}
</script>
