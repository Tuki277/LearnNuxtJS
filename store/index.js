import { Store } from 'vuex';
import { api } from '~/utils';

const createStore = () => {
  return new Store({
    state: {
      listNews: [],
      listCategory: [],
      token: ""
    },
    mutations: {},
    actions: {
      async login ({commit}, data) {
        try {
            const link = api("login")
            const res = await this.$axios.post(link, data)
            if (res.data.error === "fail") {
              localStorage.setItem("token", res.data.access_token);
              this.$router.push('/')
            } else {
              alert("Login fail");
            }
        } catch (error) {
            console.log(error);
        }
    },
    },
    getters: {}
  })
}

export default createStore
