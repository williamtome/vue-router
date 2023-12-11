<template>
  <h1>Equipe</h1>

  <p v-if="member === 'william'">
    Bio William
  </p>
  <p v-else-if="member === 'jonsnow'">
    Bio Jon Snow
  </p>
  <p v-else>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Beatae blanditiis commodi consequuntur dolorum eligendi enim,
    exercitationem expedita ipsa itaque laboriosam laborum,
    minus neque nisi odit quae quas sunt velit vero!
  </p>

  <button @click="$router.back()">Voltar</button>
</template>

<script>
export default {
  name: 'TeamPage',
  computed: {
    member() {
      return this.$route.params.member
    }
  },
}
</script>
