<template>
  <v-layout>
    <v-locale-provider rtl>
      <v-app-bar color="blue-darken-3"></v-app-bar>
      <v-navigation-drawer
        color="green-darken-4"
        permanent
      ></v-navigation-drawer>
      <v-main >
      <slot />
        <router-view></router-view>
      </v-main>
    </v-locale-provider>
  </v-layout>
</template>

<script>
export default {
  name: "BasicLayout",
  data: () => ({
  }),
  methods: {
  },
};
</script>
