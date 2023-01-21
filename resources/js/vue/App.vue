<template>
  <v-app>
    <component :is="layout">
      <login v-if="showLoginForm"></login>
    </component>
  </v-app>
</template>
<script>

import defaultLayout from './layouts/default.vue';
import basic from './layouts/basic.vue';
import Login from './components/Login.vue'
import {useAuthStore} from "./store/auth"

export default {
  components:{
    default: defaultLayout,
    basic,
    Login,
  },
  data: function(){
    return {
      layout: "default",
    }
  },
  computed:{
    showLoginForm(){
      const auth = useAuthStore();
      return auth.$state.showLoginForm;
    },
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
