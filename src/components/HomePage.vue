<template>
  <h1>Home</h1>

  <h2>Postagens</h2>
  <ul>
    <li v-for="post in posts" :key="post.id">
      <router-link :to="'/post/' + post.id">{{ post.title }}</router-link>
    </li>
  </ul>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
  name: "HomePage",
  data() {
    return {

    }
  },
  computed: {
    ...mapState('posts', ['posts'])
  },
  created() {
    this.fetchPosts()
  },
  methods: {
    ...mapActions('posts', ['fetchPosts'])
  }
}
</script>

<style scoped>

</style>
