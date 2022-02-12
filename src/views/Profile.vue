<template>
  <div id="profile">
    <img :src="profile.image" class="img-fluid" alt="profile image" />
    <h1>{{ profile.name }}</h1>
    <p>({{ profile.id }})</p>
    <h3>Email:{{ profile.email }}</h3>
    <h3>OS:{{ profile.os }}</h3>
    <h3>Version:{{ profile.version }}</h3>
    <h3 v-if="profile.isInClient">Is in client: LIFF browser</h3>
    <h3 v-else>Is in client: External browser</h3>
    <button class="btn btn-danger" v-if="profile.isInClient" @click="closeLiff">Close</button>
  </div>
</template>

<script>
import liff from '@line/liff'

export default {
  name: 'Profile',
  data() {
    return {
      profile: {
        id: '',
        image: '',
        name: '',
        email: '',
        os: '',
        version: '',
        isInClient: false,
      }
    }
  },
  async mounted() {
    await liff.init({
      liffId: process.env.VUE_APP_LIFF_ID_PROFILE
    })

    await this.getUserProfile()
  },
  methods: {
    async getUserProfile() {
      if (liff.isLoggedIn()) {
        const { userId, pictureUrl, displayName } = await liff.getProfile();

        this.profile.id = userId
        this.profile.image = pictureUrl
        this.profile.name = displayName
        this.profile.os = liff.getOS()
        this.profile.email = liff.getDecodedIDToken().email
        this.profile.version = liff.getLineVersion()
        this.profile.isInClient = liff.isInClient()

      } else {
        liff.login();
      }
    },
    closeLiff() {
      liff.closeWindow()
    }
  }
}
</script>

<style>
#profile {
  text-align: center;
}
</style>