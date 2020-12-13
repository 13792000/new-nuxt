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
          <b-button variant="warning">login</b-button>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  async fetch({ $axios }) {
    const data = await $axios.$post('http://localhost:3001/users',{
      email: "fsdfsdfsdfds",
      password: "this.password",
      token: "adsfasd32823jnzsd2"
    })
  },

}
</script>