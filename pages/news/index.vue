<template>
  <div class="container">
    <h3 class="text-center">News</h3>

    <div class="d-flex flex-column">
      <div>
        <NuxtLink to="/news/add" class="text-white">
          <button class="btn btn-success mb-4 float-right">Add</button>
        </NuxtLink>
      </div>

      <div class="row">
        <div class="col-4 mb-4"
          v-for="item in listNews"
          :key="item.id"
        >
          <div class="border rounded border-primary p-3">
            <h2>{{ item.title }}</h2>
            <p>Category: {{ item.category_name }}</p>
            <p>
              {{ item.body }}
            </p>
            <p>created : {{ item.created_at }}</p>
            <p>
              <button class="btn btn-danger" @click="deleteNews(item.id)" role="button">Delete</button>
              <NuxtLink :to=" '/news/add/' + item.id" class="btn btn-secondary" href="#" role="button">Edit</NuxtLink>
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'index',
  created() {
    this.getAllNews()
  },
  computed: mapState(['listNews']),
  methods: {
    ...mapActions(['deleteNews', 'getAllNews']),
  },
}
</script>

<style></style>
