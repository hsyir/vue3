import axios from 'axios'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => {
        return {
            user: null,
            showLoginForm: false,
            count: 33,
        }
    },
    actions: {
        showLoginForm() {
            alert("show")
            this.$state.showLoginForm = true;
        },
        hideLoginform() {
            this.$state.showLoginForm = false;
        },
        login(username, password) {
            alert('sd')
            //axios.post("/login",{username,password});
        },
        increment(){
            this.$state.count++;
        }
    },
})