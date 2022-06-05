<template>
  <div class="container">
    <h2>Create News</h2>
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
      <div class="input-group mb-3">
        <textarea
          type="text"
          class="form-control"
          v-model="Content"
          placeholder="Content"
          aria-describedby="basic-addon1"
        ></textarea>
      </div>
      <div class="float-right">
        <button type="submit" class="btn btn-primary">Send</button>
        <NuxtLink to="/news" class="text-white">
          <button type="submit" class="btn btn-danger">Cancel</button>
        </NuxtLink>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'add',
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
