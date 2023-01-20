<template>
  <h1>Im home</h1>
<v-btn to="/about">about</v-btn>

<v-btn @click="showLogin">show</v-btn>
<v-btn @click="hideLogin">hide</v-btn>


</template>
<style scoped src="./home.css"></style>

<script>
import { useAuthStore } from "./../../store/auth";

export default {
  metaInfo() {
    return { title: "صفحه اصلی" };
  },
  name: "home",
  components: {},

  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    showLogin() {
      const auth = useAuthStore();
      auth.showLoginForm();
    },
    hideLogin() {
      const auth = useAuthStore();
      auth.hideLoginform();
    },
  },
};
</script>