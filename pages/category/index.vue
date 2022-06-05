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
          >
            Cras justo odio
            <div>
              <a class="btn btn-danger" href="#" role="button">Delete</a>
              <a class="btn btn-secondary" href="#" role="button">Edit</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
}
</script>

<style></style>
