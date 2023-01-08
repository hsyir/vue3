<template>
  <v-app>
    <h3 > basic layout</h3>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: "BasicLayout",
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
  methods: {
    loginForm() {
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<style lang="scss">
.basic-layout {
  color: #636b6f;
  height: 100vh;
  font-weight: 100;
  position: relative;

  .links > a {
    color: #636b6f;
    padding: 0 25px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.1rem;
    text-decoration: none;
    text-transform: uppercase;
  }
}
</style>
