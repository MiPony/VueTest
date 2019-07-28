<template>
  <div id="app">
    <h2>SET SHEDULE</h2>
    <div class="header">
      <i></i>
      <strong>ALL<br>DAY</strong>
      <ul>
        <li>00:00</li>
        <li>03:00</li>
        <li>06:00</li>
        <li>09:00</li>
        <li>12:00</li>
        <li>15:00</li>
        <li>18:00</li>
        <li>21:00</li>
      </ul>
    </div>
    <div class="main">
      <div>
        <p>MO</p>
        <span class="firstSpan"><input type="checkbox" id="cb1" @change="changeComplete()"><label for="cb1"></label></span>
        <Tr
          v-bind:tdMassive="tdMassive"
          v-bind:class="{selected: completeMonday}"
        />
        <div class="borderRight"></div>
      </div>
      <div>
        <p>TU</p>
        <span><input type="checkbox" id="cb2" @change="changeComplete2()"> <label for="cb2"></label></span>
          <Tr2
            v-bind:tdMassive2="tdMassive2"
            v-bind:class="{selected: completeTuesday}"
          />
        <div class="borderRight"></div>
      </div>
      <div>
        <p>WE</p>
        <span><input type="checkbox" id="cb3" @change="changeComplete3()"> <label for="cb3"></label></span>
          <Tr3 
            v-bind:tdMassive3="tdMassive3"
            v-bind:class="{selected: completeWednesday}"
          />
        <div class="borderRight"></div>
      </div>
      <div>
        <p>TH</p>
        <span><input type="checkbox" id="cb4" @change="changeComplete4()"> <label for="cb4"></label></span>
          <Tr4 
            v-bind:tdMassive4="tdMassive4"
            v-bind:class="{selected: completeThursday}"
          />
        <div class="borderRight"></div>
      </div>
      <div>
        <p>FR</p>
        <span><input type="checkbox" id="cb5" @change="changeComplete5()"> <label for="cb5"></label></span>
          <Tr5 
            v-bind:tdMassive5="tdMassive5"
            v-bind:class="{selected: completeFriday}"
          />
        <div class="borderRight"></div>
      </div>
      <div>
        <p>SA</p>
        <span><input type="checkbox" id="cb6" @change="changeComplete6()"> <label for="cb6"></label></span>
          <Tr6 
            v-bind:tdMassive6="tdMassive6"
            v-bind:class="{selected: completeSaturday}"
          />
        <div class="borderRight"></div>
      </div>
      <div>
        <p class="lastP">SU</p>
        <span class="lastSpan"><input type="checkbox" id="cb7" @change="changeComplete7()"> <label for="cb7"></label></span>
          <Tr7 
            v-bind:tdMassive7="tdMassive7"
            v-bind:class="{selected: completeSunday}"
          />
        <div class="borderRight"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Tr from '@/components/TrMonday'
import Tr2 from '@/components/TrTuesday'
import Tr3 from '@/components/TrWednesday'
import Tr4 from '@/components/TrThursday'
import Tr5 from '@/components/TrFriday'
import Tr6 from '@/components/TrSaturday'
import Tr7 from '@/components/TrSunday'

export default {
  name: 'app',
  data() { 
    return {
      completeMonday: false,
      completeTuesday: false,
      completeWednesday: false,
      completeThursday: false,
      completeFriday: false,
      completeSaturday: false,
      completeSunday: false,
      tdMassive: [
        {id: 1, completed: false},
        {id: 2, completed: false},
        {id: 3, completed: false},
        {id: 4, completed: false},
        {id: 5, completed: false},
        {id: 6, completed: false},
        {id: 7, completed: false},
        {id: 8, completed: false},
        {id: 9, completed: false},
        {id: 10, completed: false},
        {id: 11, completed: false},
        {id: 12, completed: false},
        {id: 13, completed: false},
        {id: 14, completed: false},
        {id: 15, completed: false},
        {id: 16, completed: false},
        {id: 17, completed: false},
        {id: 18, completed: false},
        {id: 19, completed: false},
        {id: 20, completed: false},
        {id: 21, completed: false},
        {id: 22, completed: false},
        {id: 23, completed: false},
        {id: 24, completed: false}
      ],
      tdMassive2: [
        {id: 1, completed1: false},
        {id: 2, completed1: false},
        {id: 3, completed1: false},
        {id: 4, completed1: false},
        {id: 5, completed1: false},
        {id: 6, completed1: false},
        {id: 7, completed1: false},
        {id: 8, completed1: false},
        {id: 9, completed1: false},
        {id: 10, completed1: false},
        {id: 11, completed1: false},
        {id: 12, completed1: false},
        {id: 13, completed1: false},
        {id: 14, completed1: false},
        {id: 15, completed1: false},
        {id: 16, completed1: false},
        {id: 17, completed1: false},
        {id: 18, completed1: false},
        {id: 19, completed1: false},
        {id: 20, completed1: false},
        {id: 21, completed1: false},
        {id: 22, completed1: false},
        {id: 23, completed1: false},
        {id: 24, completed1: false}
      ],
      tdMassive3: [
        {id: 1, completed2: false},
        {id: 2, completed2: false},
        {id: 3, completed2: false},
        {id: 4, completed2: false},
        {id: 5, completed2: false},
        {id: 6, completed2: false},
        {id: 7, completed2: false},
        {id: 8, completed2: false},
        {id: 9, completed2: false},
        {id: 10, completed2: false},
        {id: 11, completed2: false},
        {id: 12, completed2: false},
        {id: 13, completed2: false},
        {id: 14, completed2: false},
        {id: 15, completed2: false},
        {id: 16, completed2: false},
        {id: 17, completed2: false},
        {id: 18, completed2: false},
        {id: 19, completed2: false},
        {id: 20, completed2: false},
        {id: 21, completed2: false},
        {id: 22, completed2: false},
        {id: 23, completed2: false},
        {id: 24, completed2: false}
      ],
      tdMassive4: [
        {id: 1, completed3: false},
        {id: 2, completed3: false},
        {id: 3, completed3: false},
        {id: 4, completed3: false},
        {id: 5, completed3: false},
        {id: 6, completed3: false},
        {id: 7, completed3: false},
        {id: 8, completed3: false},
        {id: 9, completed3: false},
        {id: 10, completed3: false},
        {id: 11, completed3: false},
        {id: 12, completed3: false},
        {id: 13, completed3: false},
        {id: 14, completed3: false},
        {id: 15, completed3: false},
        {id: 16, completed3: false},
        {id: 17, completed3: false},
        {id: 18, completed3: false},
        {id: 19, completed3: false},
        {id: 20, completed3: false},
        {id: 21, completed3: false},
        {id: 22, completed3: false},
        {id: 23, completed3: false},
        {id: 24, completed3: false}
      ],
      tdMassive5: [
        {id: 1, completed4: false},
        {id: 2, completed4: false},
        {id: 3, completed4: false},
        {id: 4, completed4: false},
        {id: 5, completed4: false},
        {id: 6, completed4: false},
        {id: 7, completed4: false},
        {id: 8, completed4: false},
        {id: 9, completed4: false},
        {id: 10, completed4: false},
        {id: 11, completed4: false},
        {id: 12, completed4: false},
        {id: 13, completed4: false},
        {id: 14, completed4: false},
        {id: 15, completed4: false},
        {id: 16, completed4: false},
        {id: 17, completed4: false},
        {id: 18, completed4: false},
        {id: 19, completed4: false},
        {id: 20, completed4: false},
        {id: 21, completed4: false},
        {id: 22, completed4: false},
        {id: 23, completed4: false},
        {id: 24, completed4: false}
      ],
      tdMassive6: [
        {id: 1, completed5: false},
        {id: 2, completed5: false},
        {id: 3, completed5: false},
        {id: 4, completed5: false},
        {id: 5, completed5: false},
        {id: 6, completed5: false},
        {id: 7, completed5: false},
        {id: 8, completed5: false},
        {id: 9, completed5: false},
        {id: 10, completed5: false},
        {id: 11, completed5: false},
        {id: 12, completed5: false},
        {id: 13, completed5: false},
        {id: 14, completed5: false},
        {id: 15, completed5: false},
        {id: 16, completed5: false},
        {id: 17, completed5: false},
        {id: 18, completed5: false},
        {id: 19, completed5: false},
        {id: 20, completed5: false},
        {id: 21, completed5: false},
        {id: 22, completed5: false},
        {id: 23, completed5: false},
        {id: 24, completed5: false}
      ],
      tdMassive7: [
        {id: 1, completed6: false},
        {id: 2, completed6: false},
        {id: 3, completed6: false},
        {id: 4, completed6: false},
        {id: 5, completed6: false},
        {id: 6, completed6: false},
        {id: 7, completed6: false},
        {id: 8, completed6: false},
        {id: 9, completed6: false},
        {id: 10, completed6: false},
        {id: 11, completed6: false},
        {id: 12, completed6: false},
        {id: 13, completed6: false},
        {id: 14, completed6: false},
        {id: 15, completed6: false},
        {id: 16, completed6: false},
        {id: 17, completed6: false},
        {id: 18, completed6: false},
        {id: 19, completed6: false},
        {id: 20, completed6: false},
        {id: 21, completed6: false},
        {id: 22, completed6: false},
        {id: 23, completed6: false},
        {id: 24, completed6: false}
      ]
    }
  },
  methods: {
    changeComplete() {
      this.tdMassive.forEach(function(completed){
        completed.completed = false;
      });
      this.completeMonday = !this.completeMonday;
    },
    changeComplete2() {
      this.tdMassive2.forEach(function(completed1){
        completed1.completed1 = false;
      });
      this.completeTuesday = !this.completeTuesday;
    },
    changeComplete3() {
      this.tdMassive3.forEach(function(completed2){
        completed2.completed2 = false;
      });
      this.completeWednesday = !this.completeWednesday;
    },
    changeComplete4() {
      this.tdMassive4.forEach(function(completed3){
        completed3.completed3 = false;
      });
      this.completeThursday = !this.completeThursday;
    },
    changeComplete5() {
      this.tdMassive5.forEach(function(completed4){
        completed4.completed4 = false;
      });
      this.completeFriday = !this.completeFriday;
    },
    changeComplete6() {
      this.tdMassive6.forEach(function(completed5){
        completed5.completed5 = false;
      });
      this.completeSaturday = !this.completeSaturday;
    },
    changeComplete7() {
      this.tdMassive7.forEach(function(completed6){
        completed6.completed6 = false;
      });
      this.completeSunday = !this.completeSunday;
    }
  },
  components: {
    Tr,
    Tr2,
    Tr3,
    Tr4,
    Tr5,
    Tr6,
    Tr7
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 100%;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.header{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
h2{
  margin: 100px 0 20px 0;
}
i{
  width: 60px;
}
strong{
  line-height: 24px;
  width: 60px;
}
ul{
  list-style: none;
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
  padding-top: 16px;
}
li{
  font-size: 14px;
  width: 75px;
  font-weight: 600;
  border-left: 3px solid #2c3e50;
  text-align: left;
}
li:last-child{
  width: 78px;
}
.main div{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
p{
  margin: 0;
  width: 54px;
  height: 52px;
  line-height: 55px;
  color: #bbbbbb;
  font-weight: 500;
  border-top: 3px solid #bbbbbb;
  border-left: 3px solid #bbbbbb;
  border-right: 3px solid #bbbbbb;
}
.lastP{
  border-bottom: 3px solid #bbbbbb;
}

span{
  width: 60px;
  height: 52px;
  line-height: 55px;
  background: #2c3e50;
  border-top: 3px solid #bbbbbb;
}
.lastSpan{
  border-bottom: 3px solid #bbbbbb;
  height: 52px;
}
input{
  margin: 0;
}
input[type="checkbox"]:checked, 
input[type="checkbox"]:not(:checked)
{
    position: absolute;
    left: -9999px;
}
input[type="checkbox"]:checked + label, 
input[type="checkbox"]:not(:checked) + label{
    display: inline-block;
    position: relative;
    cursor: pointer;
}
input[type="checkbox"]:checked + label:before, 
input[type="checkbox"]:not(:checked) + label:before {
    content: "";
    position: absolute;
    left: -10px;
    top: -18px;
    width: 20px;
    height: 20px;
    border: 1px solid #dddddd;
    background-color: #ffffff;
}
input[type="checkbox"]:checked + label:before, 
input[type="checkbox"]:not(:checked) + label:before {
    border-radius: 10px;
}
input[type="checkbox"]:checked + label:after, 
input[type="checkbox"]:not(:checked) + label:after {
    content: "";
    position: absolute;
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
    transition: all 0.2s ease;
}
input[type="checkbox"]:checked + label:after, 
input[type="checkbox"]:not(:checked) + label:after {
    left: -5px;
    top: -15px;
    width: 15px;
    height: 5px;
    border-radius: 1px;
    border-left: 4px solid #2c3e50;
    border-bottom: 4px solid #2c3e50;
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
}
input[type="checkbox"]:not(:checked) + label:after {
    opacity: 0;
}

input[type="checkbox"]:checked + label:after {
    opacity: 1;
}

table{
  padding: 0;
  margin: 0;
  border-spacing: 0;
}
.borderRight{
  border-right: 3px solid #bbbbbb;
}
tr{
  width: 26px;
}
td{
  border-left: 3px solid #bbbbbb;
  border-top: 3px solid #bbbbbb;
  width: 23px;
  height: 50px;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.lastTable td{
  border-bottom: 3px solid #bbbbbb;
}
.selected{
  background: #cccccc;
}
</style>