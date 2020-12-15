<template>
  <b-col md="4" class="cart w-100 p-0" >
    <div class="d-flex flex-column h-100" >
      <div class="d-flex-column px-2">
        <a href="/">
          <div>
            <img class="w-100 pt-2 mb-1 " height="250" src="~/assets/img/mihan.jpg" alt="img">
          </div>
          <div class="mb-2">{{item.title}}</div>
        </a>
      </div>
      <div class="w-100 px-2 mt-auto">
        <div class="mt-auto">
          <b-row class="align-items-center d-flex mb-2">
            <b-col>
              <div v-if="item.off" class="d-flex justify-content-start">
                <div  class="mt-auto btn-danger px-2 rounded-pill">{{item.off.toLocaleString("ar-SA")}}%</div>
                <div class="ml-2">{{item.price.toLocaleString("ar-SA")}}</div>
              </div>
              <div class="text-left">
                <span>{{ offPrice(item.price,item.off).toLocaleString("ar-SA") }}</span>
                <span>تومان</span>
              </div>
            </b-col>
            <b-col>
              <svg width="1.8em" height="1.8em" viewBox="0 0 16 16" class="bi bi-basket" fill="currentColor" xmlns="http://www.w3.org/2000/svg" id="icon">
                <path fill-rule="evenodd" d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z"/>
              </svg>
            </b-col>
          </b-row>
        </div>
      </div>
    </div>
  </b-col>
</template>

<script>
export default {
  props: ['item'],
  methods: {
    offPrice(price,off){
      return (price - ((off / 100) * price))
    }
  },
}
</script>

<style scoped>
*,*:hover {
  box-sizing: border-box;
}
.cart {
  border-bottom: 1px solid #e99d9d2f;
  border-left: 1px solid #e99d9d2f;
  font-size: .95rem;
  font-weight: 400;
  line-height: 1.75;
  transition: .2s;
  overflow: hidden;

}
.cart:hover {
  box-shadow: 2px 2px 6px #adadadb6,-2px -2px 6px #adadadc2;
}
a {
  color: #1D1B1B;
  text-decoration: none;
  transition: .2s;
  overflow: hidden;
}
a:hover {
  color: #EC4D37;
}
a:hover img {
  transition: .5s;
  transform: scale(1.05);
}
svg{
  color: #1D1B1B;
  transition: .2s;
}
svg:hover {
  color: #EC4D37;
  cursor: pointer;
}
</style>
