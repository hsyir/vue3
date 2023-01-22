<template src="./home.html">
  
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
      auth: useAuthStore(),
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
    logout(){
      this.auth.logout();
    }
  },
};
</script>