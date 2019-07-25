<template>
  <table @mouseleave="startLeave()">
    <Td5 
        v-for="massive5 of tdMassive5"
        v-bind:massive5="massive5"
    />
    </table>
</template>

<script>
import Td5 from '@/components/TdFriday'

export default {
  props: ['tdMassive5'],
  components: {
    Td5
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