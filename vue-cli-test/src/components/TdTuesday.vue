<template>
<tr>
<div v-bind:class="{selected: massive2.completed1}">
    <td @mousedown="startClick()"  @mouseenter="startmove()" @mouseup="stopClick()">
    </td>
</div>
</tr>
</template>

<script>

export default {
    props: {
        massive2: Object,
        required: true
    },
    methods: {
        startClick() {
            this.isDrawing.active = true;
            this.massive2.completed1 = !this.massive2.completed1;
        },
        startmove() {
            if (this.isDrawing.active) {
                this.massive2.completed1 = !this.massive2.completed1; 
            }
        },
        stopClick() {
            this.isDrawing.active = false;
        }
    }
}
</script>