<template>
  <div id="about">
    <h1>Computer Science</h1>
    <h3>Songkhla Rajabhat University</h3>
    <img
      src="https://scontent.xx.fbcdn.net/v/t1.15752-9/257991578_489382322622663_2230314636403585414_n.png?_nc_cat=107&ccb=1-5&_nc_sid=aee45a&_nc_ohc=uTJ3xjal1NkAX8g3KZP&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLSKLIdOHGDsiI5MF4D8ib1VPnlqoedmF6EpXa89Pe5LQ&oe=622EE6C1"
      class="img-fluid"
      alt="logog"
    />
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum tempore iste nam. Illo culpa veritatis obcaecati iusto id unde nostrum, similique molestias. Optio praesentium sunt quisquam ea enim iste aspernatur!</p>
    <button class="btn btn-danger" v-if="isInClient" @click="closeLiff">Close</button>
  </div>
</template>

<script>
import liff from '@line/liff'

export default {
  name: 'About',
  data() {
    return {
      isInClient: false
    }
  },
  async mounted() {
    this.isInClient = liff.isInClient()

    await liff.init({
      liffId: process.env.VUE_APP_LIFF_ID_ABOUT
    })
  },
  methods: {
    closeLiff() {
      liff.closeWindow()
    }
  }
}
</script>

<style>
#about {
  text-align: center;
}
</style>