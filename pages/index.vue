<template>
  <b-container>
    <b-row>
      <b-col md="8">
        <b-card>
          <b-row>
            <b-col md="4" v-for="item in items" :key="item.id">
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
      items:[
        {id: 1, name: 'assad'},
        {id: 2, name: 'assad'},
        {id: 3, name: 'assad'},
        {id: 4, name: 'assad'},
        {id: 5, name: 'assad'},
        {id: 6, name: 'assad'},
        {id: 7, name: 'assad'},
        {id: 8, name: 'assad'},
        {id: 9, name: 'assad'},
        {id: 10, name: 'assad'},
        {id: 11, name: 'assad'},
        {id: 12, name: 'assad'},
        {id: 13, name: 'assad'},
        {id: 14, name: 'assad'},
        {id: 15, name: 'assad'},
        {id: 16, name: 'assad'},
      ]
    }
  },
  components: {
    item
  }

}
</script>

