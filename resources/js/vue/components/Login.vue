<template src="./login.html"></template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import { ref, reactive, computed } from "vue";
import { useAuthStore } from "./../store/auth";
const router = useRouter();
const data = reactive({
  loading: false,
  email: "hosseinyaghmaee@gmail.com",
  password: "123456",
});
const auth = useAuthStore(),
  dialog = computed(() => {
    return auth.$state.showLoginForm;
  });

function login() {
  data.loading = true;
  auth
    .login(data.email, data.password)
    .then(async (res) => {
      const user = await auth.fetchUser();
      if (auth.intendedUrl !== "") {
        router.push({ path: auth.intendedUrl });
        auth.setIntendedUrl("");
      }
      auth.hideLoginform();
    })
    .catch((res) => {
      console.log("res", res);
    })
    .then(() => {
      data.loading = false;
    });
}
</script>