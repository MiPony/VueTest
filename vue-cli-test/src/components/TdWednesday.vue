<template>
<tr>
<div v-bind:class="{selected: massive3.completed2}">
    <td @mousedown="startClick()"  @mouseenter="startmove()" @mouseup="stopClick()">
    </td>
</div>
</tr>
</template>

<script>

export default {
    props: {
        massive3: Object,
        required: true
    },
    methods: {
        startClick() {
            this.isDrawing.active = true;
            this.massive3.completed2 = !this.massive3.completed2;
        },
        startmove() {
            if (this.isDrawing.active) {
                this.massive3.completed2 = !this.massive3.completed2; 
            }
        },
        stopClick() {
            this.isDrawing.active = false;
        }
    }
}
</script>