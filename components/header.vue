<template>
  <div class="d-flex justify-content-between mb-4 py-2 px-3">
    <nuxt-link to="/">Home</nuxt-link>
    <h3>HEADER</h3>
    <nuxt-link to="/login">login</nuxt-link>
  </div>
</template>

<style scoped>
  div{
    position: sticky;
    top: 0;
    z-index: 999;
    background-color: #1D1B1B;
    box-shadow: 0 2px 6px #adadadb6
  }
  h3{
    font-weight: 600;
    letter-spacing: 3px;
    color: #EC4D37;
  }
  a{
    text-decoration: none;
    color: #fff;
    font-weight: 600;
  }
  a:hover{
    color: #EC4D37;
  }
</style>