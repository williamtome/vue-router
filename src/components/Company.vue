<template>
  <h1>Empresa</h1>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium amet architecto aspernatur aut cumque delectus distinctio, doloremque eum id, ipsa ipsum laudantium minus, nemo nesciunt quia reiciendis sapiente ut?
  </p>

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
    },
  },
  watch: {
    '$route'(newValue, oldValue) {
      console.log(newValue, oldValue)
      this.fetchData()
    }
  },
  methods: {
    fetchData() {
      console.log('ajax fetch data')
    },
  },
  /*beforeRouteEnter(to, from, next) {
    console.log('===> beforeRouteEnter')
    console.log('to', to.fullPath)
    console.log('from', from.fullPath)
    next()
  },
  beforeRouteUpdate(to, from, next) {
    console.log('===> beforeRouteUpdate')
    console.log('to', to)
    console.log('from', from)
    next()
  },
  beforeRouteLeave(to, from, next) {
    console.log('===> beforeRouteLeave')
    console.log('to', to.name)
    console.log('from', from.name)
    next()
  },*/
}
</script>

<style scoped>
.sidebar {
  background-color: #CCC;
}
</style>
