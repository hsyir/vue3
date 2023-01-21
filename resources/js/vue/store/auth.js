import axios from 'axios'
import { defineStore } from 'pinia'
import Cookies from 'js-cookie'

export const useAuthStore = defineStore('auth', {
    state: () => {
        return {
            user: {},
            showLoginForm: false,
            access_token: null,
        }
    },
    getters: {
        authenticatedUser(state) {
            return state.user;
        }
    },
    actions: {
        showLoginForm() {
            this.$state.showLoginForm = true;
        },
        hideLoginform() {
            this.$state.showLoginForm = false;
        },
        login(email, password) {
            return new Promise((resolve, reject) => {
                axios.post("/api/auth/login", { email, password })
                    .then(res => {

                        if (!res.data.hasOwnProperty("access_token")) {
                            reject("NoAccessToken");
                        }

                        Cookies.set('token', res.data.access_token, { expires: true ? 365 : null });

                        resolve(true);

                    })
                    .catch(err => {
                        reject(false)
                    });
            });

        },
        fetchUser() {
            return new Promise((resolve, reject) => {
                axios.post("/api/auth/me")
                    .then(res => {
                        this.$state.user = res.data;
                        resolve(res.data);
                    })
                    .catch(err => {
                        reject(false)
                    })
            });
        }
    },
})