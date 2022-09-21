<template>
  <div class="container">
    <Msg v-if="isShow"></Msg>
    <Course v-if="isShow"></Course>
    <Pickup v-if="isShow"></Pickup>
    <Store v-if="isShow"></Store>
    <Reserve v-on:form-click="formShow"></Reserve>
  </div>
</template>

<script>
import Msg from '../components/Msg.vue'
import Course from '../components/Course.vue'
import Pickup from '../components/Pickup.vue'
import Store from '../components/Store.vue'
import Reserve from '../components/Reserve.vue'

export default {
  name: 'Content',
  components: {
    Msg,
    Course,
    Pickup,
    Store,
    Reserve
  },
  data: () => {
    return {
      isShow: true
    }
  },
  methods: {
    formShow: function() {
      this.isShow = false;
      this.$emit('content-click')
    }
  }
}
</script>

<style>
</style>
