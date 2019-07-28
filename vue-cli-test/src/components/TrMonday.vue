<template>
  <table @mouseleave="startLeave()">
    <Td 
        v-for="massive of tdMassive"
        v-bind:massive="massive"
    />
  </table>
</template>

<script>
import Td from '@/components/TdMonday'

export default {
  props: ['tdMassive'],
  components: {
    Td
  },
  methods: {
    startLeave() {
            this.isDrawing.active = false;
        }
  }
}
</script>

<style scoped>
table{
  display: flex;
  flex-direction: row;
}
</style>