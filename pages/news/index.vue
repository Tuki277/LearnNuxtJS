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
        <div class="col-4">
          <div class="border rounded border-primary p-3">
            <h2>Heading</h2>
            <p>
              Will you do the same for me? It's time to face the music I'm no
              longer your muse. Heard it's beautiful, be the judge and my girls
              gonna take a vote. I can feel a phoenix inside of me. Heaven is
              jealous of our love, angels are crying from up above. Yeah, you
              take me to utopia.
            </p>
            <p>
              <a class="btn btn-danger" href="#" role="button">Delete</a>
              <a class="btn btn-secondary" href="#" role="button">Edit</a>
            </p>
          </div>
        </div>

        <div class="col-4">
          <div class="border rounded border-primary p-3">
            <h2>Heading</h2>
            <p>
              Will you do the same for me? It's time to face the music I'm no
              longer your muse. Heard it's beautiful, be the judge and my girls
              gonna take a vote. I can feel a phoenix inside of me. Heaven is
              jealous of our love, angels are crying from up above. Yeah, you
              take me to utopia.
            </p>
            <p>
              <a class="btn btn-danger" href="#" role="button">Delete</a>
              <a class="btn btn-secondary" href="#" role="button">Edit</a>
            </p>
          </div>
        </div>

        <div class="col-4">
          <div class="border rounded border-primary p-3">
            <h2>Heading</h2>
            <p>
              Will you do the same for me? It's time to face the music I'm no
              longer your muse. Heard it's beautiful, be the judge and my girls
              gonna take a vote. I can feel a phoenix inside of me. Heaven is
              jealous of our love, angels are crying from up above. Yeah, you
              take me to utopia.
            </p>
            <p>
              <a class="btn btn-danger" href="#" role="button">Delete</a>
              <a class="btn btn-secondary" href="#" role="button">Edit</a>
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
