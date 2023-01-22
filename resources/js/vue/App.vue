<template>
  <v-app>
    <component :is="layout">

      <login v-if="showLoginForm"></login>
      -- {{ auth.intendedUrl }} --
    </component>
  </v-app>
</template>
<script>
import defaultLayout from "./layouts/default.vue";
import basic from "./layouts/basic.vue";
import Login from "./components/Login.vue";
import { useAuthStore } from "./store/auth";

export default {
  components: {
    default: defaultLayout,
    basic,
    Login,
  },
  data: function () {
    return {
      layout: "default",
      auth: useAuthStore(),
    };
  },
  computed: {
    showLoginForm() {
      const auth = useAuthStore();
      return auth.$state.showLoginForm;
    },
  },
  watch: {
    $route: function (route) {
      this.setLayout(route.meta.layout || "default");
    },
  },
  methods: {
    setLayout(layout) {
      this.layout = layout;
    },
  },
  mounted() {
    // await this.auth.fetchUser();
  },
};
</script>
