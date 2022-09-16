<template>
  <div class="container">
    <Msg></Msg>
    <Course></Course>
  </div>
</template>

<script>
import Msg from '../components/Msg.vue'
import Course from '../components/Course.vue'

export default {
  name: 'Content',
  components: {
    Msg,
    Course
  }
}
</script>

<style>
</style>
