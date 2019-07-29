<template>

<!-- События с мышкой и выбором интервалов. -->

<tr>

<!-- Назначаю CSS-селектор, который закрашивает ячейки, указываю условие при котором селектор будет вызван-->
<div v-bind:class="{selected: massive.completed}">

    <!-- События мышки. 1 - Кнопка опущена вниз; 2 - Hover-эффект; 3 - Кнопка вернулась в обычное состояние -->
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

            //Все ячейки становятся истинны в момент зажатой вниз кнопки мыши
            this.isDrawing.active = true;

            //Смена цвета
            this.massive.completed = !this.massive.completed;
        },
        startmove() {

            /*За счет того, что во время зажатой кнопки мыши, ячейки становятся истинны, Hover-эффект начинает работать и при перемещение мыши закрашивает ячейки*/
            if (this.isDrawing.active) {
                this.massive.completed = !this.massive.completed; 
            }
        },
        stopClick() {

            //По факту запрет mouseenter продолжать смену цвета при перемещении
            this.isDrawing.active = false;
        }
    }
}
</script>