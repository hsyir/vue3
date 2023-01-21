<template src="./login.html"></template>

<script setup>
import { ref, reactive, computed } from "vue";
import { useAuthStore } from "./../store/auth";
const data = reactive({
    loading: false,
    email: "hosseinyaghmaee@gmail.com",
    password: "123456",
})
const   auth = useAuthStore(),
        dialog = computed(() => {
            return auth.$state.showLoginForm;
        });

function login() {
  data.loading = true;
  auth.login(data.email, data.password)
    .then(async res=>{
        const user = await auth.fetchUser();
    })
    .catch(res=>{
        console.log("res",res)
    })
    .then(()=>{
        data.loading = false;
    });
}
</script>