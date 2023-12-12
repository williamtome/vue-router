<template>
  <h1>Empresa</h1>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium amet architecto aspernatur aut cumque delectus distinctio, doloremque eum id, ipsa ipsum laudantium minus, nemo nesciunt quia reiciendis sapiente ut?
  </p>

  {{sidebar}}
  <div :class="{ 'sidebar': sidebar }">
    <router-link :to="{ name: 'company-history' }">
      História
    </router-link>
    |
    <router-link :to="{ name: 'company-awards' }">
      Prêmios
    </router-link>
  </div>

  <router-view></router-view>
</template>

<script>
export default {
  name: "CompanyPage",
  computed: {
    sidebar() {
      return this.$route.meta.sidebar
    }
  },
}
</script>

<style scoped>
.sidebar {
  background-color: #CCC;
}
</style>
