<template>
  <h1>Post</h1>

  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Assumenda at blanditiis commodi corporis dolor dolore dolores
    earum laborum nisi odit pariatur quaerat quas quidem quod,
    repellendus saepe tempore vitae! Aliquid.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Assumenda at blanditiis commodi corporis dolor dolore dolores
    earum laborum nisi odit pariatur quaerat quas quidem quod,
    repellendus saepe tempore vitae! Aliquid.</p>

  <button @click.stop.prevent="goBack()">Voltar</button>
</template>

<script>
export default {
  name: "PostPage",
  methods: {
    goBack() {
      this.$router.back()
    }
  },
}
</script>

<style scoped>

</style>
