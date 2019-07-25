<template>
<tr>
<div v-bind:class="{selected: massive7.completed6}">
    <td @mousedown="startClick()"  @mouseenter="startmove()" @mouseup="stopClick()">
    </td>
</div>
</tr>
</template>

<script>

export default {
    props: {
        massive7: Object,
        required: true
    },
    methods: {
        startClick() {
            this.isDrawing.active = true;
            this.massive7.completed6 = !this.massive7.completed6;
        },
        startmove() {
            if (this.isDrawing.active) {
                this.massive7.completed6 = !this.massive7.completed6; 
            }
        },
        stopClick() {
            this.isDrawing.active = false;
        }
    }
}
</script>