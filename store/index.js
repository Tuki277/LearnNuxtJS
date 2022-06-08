import { Store } from 'vuex';
import { api, configAxios } from '~/utils';

const createStore = () => {
  return new Store({
    state: {
      listNews: [],
      listCategory: [],
      time: 0,
      token: "",
    },
    mutations: {
      setStateMutations: (state, bind) => {
        state[bind.state] = bind.result.data;
      },
      deleteMutations: (state, bind) => {
        state[bind.state] = state.listCategory.filter(x => x.id !== bind.id)
      },
    },
    actions: {
      async login({ commit }, data) {
        try {
          const link = api("login")
          const res = await this.$axios.post(link, data)
          if (res.data.error === "fail") {
            localStorage.setItem("token", res.data.access_token);
            this.state.token = res.data.access_token;
            this.$router.push('/')
          } else {
            alert("Login fail");
          }
        } catch (error) {
          console.log(error);
        }
      },
      async getAllCategory({ commit }) {
        try {
          const link = api("category");
          await this.$axios.get(link, configAxios()).then(res => {
            commit('setStateMutations', {
              result: res.data,
              state: "listCategory"
            });
          }).catch(e => console.log(e));
        } catch (error) {
          console.log(error);
        }
      },
      async getCategoryById ({commit}, id) {
        console.log(id)
        try {
          const link = api(`category/${id}`);
          await this.$axios.get(link, configAxios()).then(res => {
            this.state.time = Math.random();
            this.state.listCategory = res.data
          }).catch(e => console.log(e))
        } catch (error) {
          console.log(error);
        }
      },
      async addCategory({ commit }, data) {
        try {
          const link = api("category");
          await this.$axios.post(link, data, configAxios()).then(res => {
            alert(res.data.message);
            if (!res.data.error) {
              this.$router.push('/category');
            }
          }).catch(e => console.log(e));
        } catch (error) {
          console.log(error);
        }
      },
      async deleteCategory({ commit }, id) {
        try {
          const link = api(`category/${id}`);
          await this.$axios.delete(link, configAxios()).then(res => {
            alert(res.data.message);
            commit('deleteMutations', {
              id,
              state: "listCategory"
            });
          }).catch(e => console.log(e));
        } catch (error) {
          console.log(error);
        }
      },
       async updateCategory({ commit }, data) {
        try {
          const link = api(`category/${data.id}`);
          await this.$axios.put(link, data.dataUpdate, configAxios()).then(res => {
            alert(res.data.message);
            if (res.data.error) {
              this.$router.back();
            }
          }).catch(e => console.log(e));
        } catch (error) {
          console.log(error);
        }
      },

      // =============================news
      async getAllNews({ commit }) {
        try {
          const link = api("news");
          await this.$axios.get(link, configAxios()).then(res => {
            commit('setStateMutations', {
              result: res.data,
              state: "listNews"
            });
          }).catch(e => console.log(e));
        } catch (error) {
          console.log(error);
        }
      },
      async getNewsById ({commit}, id) {
        console.log(id)
        try {
          const link = api(`news/${id}`);
          await this.$axios.get(link, configAxios()).then(res => {
            this.state.time = Math.random();
            this.state.listCategory = res.data
          }).catch(e => console.log(e))
        } catch (error) {
          console.log(error);
        }
      },
      async addNews({ commit }, data) {
        try {
          const link = api("news");
          await this.$axios.post(link, data, configAxios()).then(res => {
            alert(res.data.message);
            if (!res.data.error) {
              this.$router.push('/news');
            }
          }).catch(e => console.log(e));
        } catch (error) {
          console.log(error);
        }
      },
      async deleteNews({ commit }, id) {
        try {
          const link = api(`news/${id}`);
          await this.$axios.delete(link, configAxios()).then(res => {
            alert(res.data.message);
            commit('deleteMutations', {
              id,
              state: "listNews"
            });
          }).catch(e => console.log(e));
        } catch (error) {
          console.log(error);
        }
      },
       async updateNews({ commit }, data) {
        try {
          const link = api(`news/${data.id}`);
          await this.$axios.put(link, data.dataUpdate, configAxios()).then(res => {
            alert(res.data.message);
            if (res.data.error) {
              this.$router.back();
            }
          }).catch(e => console.log(e));
        } catch (error) {
          console.log(error);
        }
      },
    },
    getters: {}
  })
}

export default createStore
