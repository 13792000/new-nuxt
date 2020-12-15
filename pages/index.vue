<template>
  <b-container>
    <b-row>
      <b-col md="8">
        <b-card class="mb-4" id="card">
          <b-row class="m-0">
            <item v-for="item in items" :key="item.id" :item="item" class="w-100 text-right "/>
          </b-row>
        </b-card>
      </b-col>
      <b-col md="4">
        <filter-item id="filterBox"/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import item from '~/components/item'
  import filterItem from '~/components/filter'
  export default {
    components: {
      item,
      filterItem
    },
    computed: {
      items() {
        return this.$store.getters.items
      }
    },
    async fetch(){
      const data = await fetch('http://localhost:3001/items').then(res => res.json())
      this.$store.dispatch('cachData', data)
    },
  }
</script>

<style scoped>
#card{
  box-shadow: 2px 2px 6px 2px #b8b5b58a, -2px -2px 6px 2px #b8b5b58a;
}
.card-body{
  padding: 0;
}
</style>