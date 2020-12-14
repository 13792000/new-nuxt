<template>
  <b-container>
    <b-row>
      <b-col md="8">
        <b-card>
          <b-row>
            <b-col md="4" v-for="item in items" :key="item.id" class="mb-4">
                <item :item="item"/>
            </b-col>
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
  data() {
    return {
      items: this.$store.getters.items
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

