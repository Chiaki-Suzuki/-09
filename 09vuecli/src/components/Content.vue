<template>
  <div class="container">
    <Msg></Msg>
    <Course></Course>
    <Pickup></Pickup>
    <Store></Store>
    <Reserve></Reserve>
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
  }
}
</script>

<style>
</style>
