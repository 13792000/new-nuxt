<template>
  <div>
    <b-card class="mb-4 cards">
      <b-form-input placeholder="جستجو" class="mb-2" dir="rtl" />
      <b-card>
        <b-form-group class="p-0 m-0">
          <b-form-checkbox-group
          :options="options"
          v-model="selected"
          stacked
          switches
          class="text-right"
          >
          </b-form-checkbox-group>
        </b-form-group>
      </b-card>
    </b-card>
    <b-card dir="rtl" class="cards mb-2">
      <b-form-input class="mb-2" placeholder="از" type="number"/>
      <b-form-input placeholder="تا" type="number"/>
    </b-card>
    <div class="d-flex justify-content-center" id="btnDiv">
      <b-button id="btn" class="w-100">فیلتر</b-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: [],
      options: [
        {text: 'میهن', value: 1},
        {text: 'کاله', value: 2},
        {text: 'پگاه', value: 3},
        {text: 'دنت', value: 4}
      ]
    }
  },
}
</script>

<style scoped>
.cards{
  box-shadow: 2px 2px 6px 2px #b8b5b58a, -2px -2px 6px 2px #b8b5b58a;
  background-color: #EC4D37;
  border: none;
}
input:focus .cards{
  background-color: #1D1B1B;
}
.btnDiv{
  position: sticky;
  top: 5rem;
}
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