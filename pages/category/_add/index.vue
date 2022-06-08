<template>
  <div class="container">
    <h2>Create Category</h2>
    <form @submit="onSubmit">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          v-model="title"
          placeholder="Title"
          aria-describedby="basic-addon1"
        />
      </div>
      <div class="float-right">
        <button type="submit" class="btn btn-primary">Create</button>
        <NuxtLink to="/category" class="text-white">
          <button type="submit" class="btn btn-danger">Cancel</button>
        </NuxtLink>
      </div>
    </form>
  </div>
</template>

<script>

import { mapActions } from 'vuex';

export default {
  name: 'add',
  data () {
    return {
      title: '',
    }
  },
  methods: {
    ...mapActions(['addCategory']),
    onSubmit (e) {
      e.preventDefault();
      this.addCategory({
        title: this.title
      })
    }
  }
}
</script>

<style></style>
