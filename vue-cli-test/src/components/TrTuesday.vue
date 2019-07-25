<template>
  <table @mouseleave="startLeave()">
    <Td2 
        v-for="massive2 of tdMassive2"
        v-bind:massive2="massive2"
    />
    </table>
</template>

<script>
import Td2 from '@/components/TdTuesday'

export default {
  props: ['tdMassive2'],
  components: {
    Td2
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