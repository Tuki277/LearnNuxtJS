<template>
  <div class="container">
    <h2>Edit Category</h2>
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
        <button type="submit" class="btn btn-primary">Send</button>
        <NuxtLink to="/category" class="text-white">
          <button type="submit" class="btn btn-danger">Cancel</button>
        </NuxtLink>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: 'edit',
  data () {
    return {
      id: '',
      title: ''
    }
  },
  methods: {
    ...mapActions(["getCategoryById", "updateCategory"]),
    ...mapState(["listCategory"]),
    onSubmit (e) {
      console.log("id == ", this.$route.params.id)
      e.preventDefault();
      const obj = {
        dataUpdate: {
          title : this.title
        },
        id: this.id
      }
      this.updateCategory(obj);
    },
  },
  created () {
    this.id = this.$route.params.id;
    this.getCategoryById(this.id);
  },
  watch: {
    '$store.state.time' (value) {
      if (value) {
        this.title = this.$store.state.listCategory.data.title
      }
    }
  }
}
</script>

<style></style>
