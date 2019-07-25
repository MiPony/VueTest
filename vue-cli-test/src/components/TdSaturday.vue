<template>
<tr>
<div v-bind:class="{selected: massive6.completed5}">
    <td @mousedown="startClick()"  @mouseenter="startmove()" @mouseup="stopClick()">
    </td>
</div>
</tr>
</template>

<script>

export default {
    props: {
        massive6: Object,
        required: true
    },
    methods: {
        startClick() {
            this.isDrawing.active = true;
            this.massive6.completed5 = !this.massive6.completed5;
        },
        startmove() {
            if (this.isDrawing.active) {
                this.massive6.completed5 = !this.massive6.completed5; 
            }
        },
        stopClick() {
            this.isDrawing.active = false;
        }
    }
}
</script>