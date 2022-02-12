<template>
  <div id="message">
    <button class="btn btn-primary" id="btnDirection" @click="sendDirection">Direction</button>
    <p>ส่งพิกัดตำแหน่งที่ตั้งหลักสูตรวิทยาการคอมพิวเตอร์ มหาวิทยาลัยราชภัฏสงขลา</p>
    <button class="btn btn-success" id="btnPicture" @click="sendPicture">Picture</button>
    <p>ส่งภาพหลักสูตรวิทยาการคอมพิวเตอร์ มหาวิทยาลัยราชภัฏสงขลา</p>
    <button class="btn btn-danger" v-if="isInClient" @click="closeLiff">Close</button>
  </div>
</template>

<script>
import liff from '@line/liff'

export default {
  name: 'Message',
  data() {
    return {
      isInClient: false,
      userID: ''
    }
  },
  async mounted() {
    await liff.init({ liffId: process.env.VUE_APP_LIFF_ID_MESSAGE })

    this.isInClient = liff.isInClient()



    if (!this.isInClient) {
      document.getElementById("btnDirection").setAttribute("disabled", "")
      document.getElementById("btnPicture").setAttribute("disabled", "")
    } else {
      await this.getUserProfile()
    }
  },
  methods: {
    async sendDirection() {
      await liff.sendMessages([{
        type: 'location',
        title: 'SKRU',
        address: 'ถนน สำโรง ตำบล เขารูปช้าง อำเภอเมืองสงขลา สงขลา 90000',
        latitude: 7.172211991730995,
        longitude: 100.61377561534297,
      }])
    },

    async sendPicture() {
      await liff.sendMessages([
        {
          type: 'text',
          text: 'หลักสูตรวิทยาการคอมพิวเตอร์ มหาวิทยาลัยราชภัฏสงขลา',
        },
        {
          type: 'image',
          originalContentUrl:
            'https://scontent.xx.fbcdn.net/v/t1.15752-9/257991578_489382322622663_2230314636403585414_n.png?_nc_cat=107&ccb=1-5&_nc_sid=aee45a&_nc_ohc=uTJ3xjal1NkAX8g3KZP&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLSKLIdOHGDsiI5MF4D8ib1VPnlqoedmF6EpXa89Pe5LQ&oe=622EE6C1',
          previewImageUrl:
            'https://scontent.xx.fbcdn.net/v/t1.15752-9/257991578_489382322622663_2230314636403585414_n.png?_nc_cat=107&ccb=1-5&_nc_sid=aee45a&_nc_ohc=uTJ3xjal1NkAX8g3KZP&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLSKLIdOHGDsiI5MF4D8ib1VPnlqoedmF6EpXa89Pe5LQ&oe=622EE6C1',
        },
      ])
    },

    async getUserProfile() {
      const { userId } = await liff.getProfile()
      this.userID = userId
    },

    closeLiff() {
      liff.closeWindow()
    }
  }
}
</script>

<style>
#message {
  margin-top: 20%;
}
</style>