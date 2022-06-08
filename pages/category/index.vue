<template>
  <div class="container">

    <h3 class="text-center">Category</h3>

    <div class="d-flex flex-column">
      <div>
        <NuxtLink to="/category/add" class="text-white">
          <button class="btn btn-success mb-4 float-right">Add</button>
        </NuxtLink>
      </div>

      <div>
        <ul class="list-group">
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
            v-for="item in listCategory"
            :key="item.id"
          >
            {{ item.title }}
            <div>
              <button class="btn btn-danger" href="#" role="button" @click="deleteCategory(item.id)">Delete</button>
              <NuxtLink :to=" '/category/add/' + item.id" class="btn btn-secondary" href="#" role="button">Edit</NuxtLink>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

import { mapActions, mapState } from "vuex";

export default {
  name: 'index',
  created() {
    this.getAllCategory();
  },
  computed: mapState(["listCategory"]),
  methods: {
    ...mapActions(["deleteCategory", "getAllCategory"]),
  }
}
</script>

<style></style>
