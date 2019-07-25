<template>
  <table @mouseleave="startLeave()">
    <Td3 
        v-for="massive3 of tdMassive3"
        v-bind:massive3="massive3"
    />
    </table>
</template>

<script>
import Td3 from '@/components/TdWednesday'

export default {
  props: ['tdMassive3'],
  components: {
    Td3
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