<template>
  <b-container>
    <div class="d-flex justify-content-center " id="mainBox">
      <b-row>
        <b-col md="12" class="mb-2">
          <label>email</label>
          <b-form-input v-model="email"></b-form-input>
        </b-col>
        <b-col md="12" class="mb-2">
          <label>password</label>
          <b-form-input v-model="password"></b-form-input>
        </b-col>
        <b-col md="12" class="mb-2">
          <b-button variant="warning" @click="fetch()" id="btn">Login</b-button>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    async fetch() {
      const res = await axios.post('http://localhost:3001/login',{
        email: this.email,
        password: this.password,
      })
      console.log(res.data);
    }
  },

}
</script>

<style scoped>
#btn{
  font-weight: bold;
  background-color: #1D1B1B;
  color: #EC4D37;
  border: none;
}
#btn:hover {
  color: #1D1B1B;
  background-color: #EC4D37;
}
</style>