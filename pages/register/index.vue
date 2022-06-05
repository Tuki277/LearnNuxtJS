<template>
  <div class="container d-flex flex-column text-center" style="margin-top: 15em">
    <h1>Register</h1>
    <form class="form-signin">
      <label for="inputEmail" class="sr-only">Email address</label>
      <input
        type="email"
        id="inputEmail"
        class="form-control"
        placeholder="Email address"
        required=""
        autofocus=""
      />
      <label for="inputPassword" class="sr-only">Password</label>
      <input
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="Password"
        required=""
      />
      <div class="checkbox mb-3 mt-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">
        Register
      </button>
    </form>
  </div>
</template>

<script>
export default {
  'layout' : 'blankLayout'
}
</script>

<style></style>
