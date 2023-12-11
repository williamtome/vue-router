<template>
  <h1>Home</h1>

  <h2>Postagens</h2>
  <ul>
    <li v-for="post in posts" :key="post.id">
      <router-link :to="{ name: 'post', params: { id: post.id } }">
        {{ post.title }}
      </router-link>
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
    // this.$router.push('/sobre')
    // this.$router.push({path: '/sobre'})
    // this.$router.push({name: 'about'})
    // this.$router.push({ name: 'about', query: { name: 'William' } })
    // this.$router.push({ name: 'about', hash: '#laravue' })
    // this.$router.push({ name: 'post', params: { id: 1 } })
    this.fetchPosts()
  },
  methods: {
    ...mapActions('posts', ['fetchPosts'])
  }
}
</script>

<style scoped>

</style>
