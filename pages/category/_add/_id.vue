<template>
  <div class="container">
    <h2>Edit Category</h2>
    <form @submit="onSubmit">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          v-model="Title"
          placeholder="Title"
          aria-describedby="basic-addon1"
        />
      </div>
      <div class="float-right">
        <button type="submit" class="btn btn-primary">Send</button>
        <NuxtLink to="/category" class="text-white">
          <button type="submit" class="btn btn-danger">Cancel</button>
        </NuxtLink>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'edit',
  data () {
    return {
      Title: '',
      Content: ''
    }
  },
  methods: {
    onSubmit (e) {
      e.preventDefault();
      console.log(this.Title)
    }
  }
}
</script>

<style></style>
