<template>
  <v-layout>
    <v-locale-provider rtl>
      <v-app-bar color="grey-darken-3"></v-app-bar>
      <v-navigation-drawer
        color="red-darken-4"
        permanent
      ></v-navigation-drawer>
      <v-main >
        <router-view></router-view>
      </v-main>
    </v-locale-provider>
  </v-layout>
</template>

<script>

export default {
  name: "MainLayout",
  data: () => {
    return {
      drawer: false,
    };
  },
  mounted(){
    console.log("Imnansdsa")
  }
};
</script>