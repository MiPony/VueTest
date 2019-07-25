<template>
<tr>
<div v-bind:class="{selected: massive.completed}">
    <td @mousedown="startClick()"  @mouseenter="startmove()" @mouseup="stopClick()">
    </td>
</div>
</tr>
</template>

<script>

export default {
    props: {
        massive: Object,
        required: true
    },
    methods: {
        startClick() {
            this.isDrawing.active = true;
            this.massive.completed = !this.massive.completed;
        },
        startmove() {
            if (this.isDrawing.active) {
                this.massive.completed = !this.massive.completed; 
            }
        },
        stopClick() {
            this.isDrawing.active = false;
        }
    }
}
</script>