<template>
<tr>
<div v-bind:class="{selected: massive5.completed4}">
    <td @mousedown="startClick()"  @mouseenter="startmove()" @mouseup="stopClick()">
    </td>
</div>
</tr>
</template>

<script>

export default {
    props: {
        massive5: Object,
        required: true
    },
    methods: {
        startClick() {
            this.isDrawing.active = true;
            this.massive5.completed4 = !this.massive5.completed4;
        },
        startmove() {
            if (this.isDrawing.active) {
                this.massive5.completed4 = !this.massive5.completed4; 
            }
        },
        stopClick() {
            this.isDrawing.active = false;
        }
    }
}
</script>