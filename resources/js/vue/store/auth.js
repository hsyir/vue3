import axios from 'axios'
import { defineStore } from 'pinia'
import Cookies from 'js-cookie'

export const useAuthStore = defineStore('auth', {
    state: () => {
        return {
            user: null,
            showLoginForm: false,
            access_token: Cookies.get('token'),
            intended_url: "",
        }
    },
    getters: {
        authenticatedUser: state => state.user,
        isLogedIn: state => state.user !== null,
        intendedUrl: state => state.intended_url 
    },
    actions: {
        setIntendedUrl(url) {
            this.$state.intended_url = url
        },
        showLoginForm() {
            console.log("showLo")
            this.$state.showLoginForm = true
        },
        hideLoginform() {
            this.$state.showLoginForm = false
        },
        login(email, password) {
            return new Promise((resolve, reject) => {
                axios.post("/api/auth/login", { email, password })
                    .then(res => {

                        if (!res.data.hasOwnProperty("access_token")) {
                            reject("NoAccessToken");
                        }

                        Cookies.set('token', res.data.access_token, { expires: true ? 365 : null })

                        resolve(true)

                    })
                    .catch(err => {
                        reject(false)
                    });
            });

        },
        logout() {
            return new Promise((resolve, reject) => {
                axios.post("/api/auth/logout").then(res => {
                    this.$state.user = null
                    resolve(true)
                })
            })
        },
        fetchUser() {
            return new Promise((resolve, reject) => {
                axios.post("/api/auth/me")
                    .then(res => {
                        this.$state.user = res.data
                        resolve(res.data)
                    })
                    .catch(err => {
                        reject(false)
                    })
            });
        }
    },
})