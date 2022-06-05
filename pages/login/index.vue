<template>
  <div class="container d-flex flex-column text-center" style="margin-top: 15em">
    <h1>Login</h1>
    <form class="form-signin" @submit="onsubmit">
      <label for="inputEmail" class="sr-only">Email address</label>
      <input
        type="email"
        id="inputEmail"
        class="form-control"
        placeholder="Email address"
        required=""
        v-model="email"
        autofocus=""
      />
      <label for="inputPassword" class="sr-only">Password</label>
      <input
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="Password"
        v-model="password"
        required=""
      />
      <div class="checkbox mb-3 mt-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">
        Sign in
      </button>
      <p class="mt-5 mb-3 text-muted">Not have account? <NuxtLink to="/register"> register </NuxtLink></p>
    </form>
  </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  'layout' : 'blankLayout',
  data: () => {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['login']),
    onsubmit (e) {
      e.preventDefault();
      const data = {
        email: this.email,
        password: this.password,
      }
      this.login(data);
    }
  }
}
</script>

<style>

</style>
