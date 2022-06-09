<template>
  <div class="container">
    <h2>Edit News</h2>
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
          rows="10"
          type="text"
          class="form-control"
          v-model="content"
          placeholder="Content"
          aria-describedby="basic-addon1"
        ></textarea>
      </div>
      <div class="float-right">
        <button type="submit" class="btn btn-primary">Update</button>
        <NuxtLink to="/news" class="text-white">
          <button class="btn btn-danger">Cancel</button>
        </NuxtLink>
      </div>
    </form>
  </div>
</template>

<script>

import { mapActions, mapState } from 'vuex'

export default {
  name: 'edit',
  data () {
    return {
      id: '',
      title: '',
      content: '',
      category: '',
    }
  },
  async created () {
    this.id = this.$route.params.id;
    await this.getAllCategory();
    await this.getNewsById(this.id)
  },
  computed: mapState(['listCategory']),
  methods: {
    ...mapActions(["getNewsById", "updateNews", "getAllCategory"]),
    onSubmit (e) {
      e.preventDefault();
      const obj = {
        dataUpdate: {
          title: this.title,
          body: this.content,
          category_id: this.category
        },
        id: this.id
      }
      this.updateNews(obj);
    }
  },
  watch: {
    '$store.state.time' (value) {
      if (value) {
        console.log(value)
        this.title = this.$store.state.listNews.data[0].title;
        this.content = this.$store.state.listNews.data[0].body;
        this.category = this.$store.state.listNews.data[0].category_id;
        console.log(this.content)
        console.log(this.category)
      }
    }
  }
}
</script>

<style></style>
