<template>
  <table @mouseleave="startLeave()">
    <Td6 
        v-for="massive6 of tdMassive6"
        v-bind:massive6="massive6"
    />
    </table>
</template>

<script>
import Td6 from '@/components/TdSaturday'

export default {
  props: ['tdMassive6'],
  components: {
    Td6
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