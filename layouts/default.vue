<template>
  <div>
    <Nav />
    <Nuxt />
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'

export default {
  middleware() {},
  created() {
    this.checkLogin();
  },
  components: {
    Nav,
  },
  methods: {
    checkLogin() {
      if (process.client) {
        if (!localStorage.getItem('token')) {
          this.$router.push('/login')
        }
      }
    },
  },
}
</script>

<style></style>
