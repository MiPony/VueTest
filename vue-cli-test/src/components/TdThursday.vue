<template>
<tr>
<div v-bind:class="{selected: massive4.completed3}">
    <td @mousedown="startClick()"  @mouseenter="startmove()" @mouseup="stopClick()">
    </td>
</div>
</tr>
</template>

<script>

export default {
    props: {
        massive4: Object,
        required: true
    },
    methods: {
        startClick() {
            this.isDrawing.active = true;
            this.massive4.completed3 = !this.massive4.completed3;
        },
        startmove() {
            if (this.isDrawing.active) {
                this.massive4.completed3 = !this.massive4.completed3; 
            }
        },
        stopClick() {
            this.isDrawing.active = false;
        }
    }
}
</script>