<template>
  <b-container>
    <b-row>
      <b-col md="8">
        <b-card class="mb-4">
          <b-row class="m-0">
            <item v-for="item in items" :key="item.id" :item="item" class="w-100 text-right "/>
          </b-row>
        </b-card>
      </b-col>
      <b-col md="4"></b-col>
    </b-row>
  </b-container>
</template>

<script>
  import item from '~/components/item'
  export default {
    computed: {
      items() {
        return this.$store.getters.items
      }
    },
    async fetch(){
      const data = await fetch('http://localhost:3001/items').then(res => res.json())
      this.$store.dispatch('cachData', data)
    },
    components: {
      item
    }
  }
</script>

<style scoped>
.card-body{
  padding: 0;
}
</style>