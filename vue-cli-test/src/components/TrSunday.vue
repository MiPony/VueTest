<template>
  <table class="lastTable" @mouseleave="startLeave()">
    <Td7 
        v-for="massive7 of tdMassive7"
        v-bind:massive7="massive7"
    />
    </table>
</template>

<script>
import Td7 from '@/components/TdSunday'

export default {
  props: ['tdMassive7'],
  components: {
    Td7
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