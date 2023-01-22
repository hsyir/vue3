<template src="./login.html"></template>

<script setup>
import { reactive, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useAuthStore } from "./../store/auth";

const auth = useAuthStore();
const dialog = computed(() => {
  return auth.$state.showLoginForm;
});

const router = useRouter();

const data = reactive({
  loading: false,
  email: "hosseinyaghmaee@gmail.com",
  password: "123456",
});

const intendedUrl = auth.intendedUrl;
auth.setIntendedUrl("");

function login() {
  data.loading = true;
  auth
    .login(data.email, data.password)
    .then(async (res) => {
      const user = await auth.fetchUser();
      if (intendedUrl !== "") {
        router.push({ path: intendedUrl });
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