<template>
  <table @mouseleave="startLeave()">
    <Td4
        v-for="massive4 of tdMassive4"
        v-bind:massive4="massive4"
    />
  </table>
</template>

<script>
import Td4 from '@/components/TdThursday'

export default {
  props: ['tdMassive4'],
  components: {
    Td4
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