<template>
  <div class="container">
    <h2>Create News</h2>
    <form @submit="onSubmit">
      <div class="row">
        <div class="col">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              v-model="title"
              placeholder="Title"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>

        <div class="col">
          <div class="input-group mb-3">
            <select
              class="form-control"
              id="exampleFormControlSelect1"
              v-model="category"
            >
              <option
                v-for="item in listCategory"
                :key="item.id"
                :value="item.id"
              >
                {{ item.title }}
              </option>
              <option disabled value="">Category</option>
            </select>
          </div>
        </div>
      </div>

      <div class="input-group mb-3">
        <textarea
          type="text"
          class="form-control"
          v-model="content"
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
import { mapActions, mapState } from 'vuex'

export default {
  name: 'add',
  data() {
    return {
      title: '',
      content: '',
      category: '',
    }
  },
  computed: mapState(['listCategory']),
  methods: {
    ...mapActions(['getAllCategory']),
    onSubmit(e) {
      e.preventDefault()
      console.log(this.Title)
    },
  },
  created() {
    this.getAllCategory();
  },
}
</script>

<style></style>
