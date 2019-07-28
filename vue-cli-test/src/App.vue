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
      <div @click="changeChecked()" @mousedown="selectMo()" @mouseup="selectMo()" @mouseleave="selectMo()" @mouseenter="selectMo()">
        <p v-bind:class="{changeColor: selectMonday}">MO</p>
        <span class="firstSpan"><input type="checkbox" id="cb1" v-model="change" @change="changeComplete()"><label for="cb1"></label></span>
        <Tr
          v-bind:tdMassive="tdMassive"
          v-bind:class="{selected: tdMassive.completed}" 
        />
        <div class="borderRight"></div>
      </div>
      <div @click="changeChecked2()" @mousedown="selectTu()" @mouseup="selectTu()" @mouseleave="selectTu()" @mouseenter="selectTu()">
        <p v-bind:class="{changeColor: selectTuesday}">TU</p>
        <span><input type="checkbox" id="cb2" v-model="change2" @change="changeComplete2()"> <label for="cb2"></label></span>
          <Tr2
            v-bind:tdMassive2="tdMassive2"
            v-bind:class="{selected: tdMassive2.completed1}"
          />
        <div class="borderRight"></div>
      </div>
      <div @click="changeChecked3()" @mousedown="selectWe()" @mouseup="selectWe()" @mouseleave="selectWe()" @mouseenter="selectWe()">
        <p v-bind:class="{changeColor: selectWednesday}">WE</p>
        <span><input type="checkbox" id="cb3" v-model="change3" @change="changeComplete3()"> <label for="cb3"></label></span>
          <Tr3 
            v-bind:tdMassive3="tdMassive3"
            v-bind:class="{selected: tdMassive3.completed2}"
          />
        <div class="borderRight"></div>
      </div>
      <div @click="changeChecked4()" @mousedown="selectTh()" @mouseup="selectTh()" @mouseleave="selectTh()" @mouseenter="selectTh()">
        <p v-bind:class="{changeColor: selectThursday}">TH</p>
        <span><input type="checkbox" id="cb4" v-model="change4" @change="changeComplete4()"> <label for="cb4"></label></span>
          <Tr4 
            v-bind:tdMassive4="tdMassive4"
            v-bind:class="{selected: tdMassive4.completed3}"
          />
        <div class="borderRight"></div>
      </div>
      <div @click="changeChecked5()" @mousedown="selectFr()" @mouseup="selectFr()" @mouseleave="selectFr()" @mouseenter="selectFr()">
        <p v-bind:class="{changeColor: selectFriday}">FR</p>
        <span><input type="checkbox" id="cb5" v-model="change5" @change="changeComplete5()"> <label for="cb5"></label></span>
          <Tr5 
            v-bind:tdMassive5="tdMassive5"
            v-bind:class="{selected: tdMassive5.completed4}"
          />
        <div class="borderRight"></div>
      </div>
      <div @click="changeChecked6()" @mousedown="selectSa()" @mouseup="selectSa()" @mouseleave="selectSa()" @mouseenter="selectSa()">
        <p v-bind:class="{changeColor: selectSaturday}">SA</p>
        <span><input type="checkbox" id="cb6" v-model="change6" @change="changeComplete6()"> <label for="cb6"></label></span>
          <Tr6 
            v-bind:tdMassive6="tdMassive6"
            v-bind:class="{selected: tdMassive6.completed5}"
          />
        <div class="borderRight"></div>
      </div>
      <div @click="changeChecked7()" @mousedown="selectSu()" @mouseup="selectSu()" @mouseleave="selectSu()" @mouseenter="selectSu()">
        <p class="lastP" v-bind:class="{changeColor: selectSunday}">SU</p>
        <span class="lastSpan"><input type="checkbox" id="cb7" v-model="change7" @change="changeComplete7()"> <label for="cb7"></label></span>
          <Tr7 
            v-bind:tdMassive7="tdMassive7"
            v-bind:class="{selected: tdMassive7.completed6}"
          />
        <div class="borderRight"></div>
      </div>
      <input class="clearButton" type="submit" value="Clear" @click="clearAll()">
      <input class="saveButton" type="submit" value="Save Changes">
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
      change: false,
      change2: false,
      change3: false,
      change4: false,
      change5: false,
      change6: false,
      change7: false,

      selectMonday: false,
      selectTuesday: false,
      selectWednesday: false,
      selectThursday: false,
      selectFriday: false,
      selectSaturday: false,
      selectSunday: false,

      completeMonday: true,
      completeTuesday: true,
      completeWednesday: true,
      completeThursday: true,
      completeFriday: true,
      completeSaturday: true,
      completeSunday: true,

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
    changeComplete(change, it=0) {
    if(this.completeMonday) {
      this.tdMassive.forEach(function(completed){
        completed.completed = true;
        it = it+1;
          if(it == 24){
            change = true;
          }
      });
      } else {
      this.tdMassive.forEach(function(completed){
        completed.completed = false;
      });
      }
      this.completeMonday = !this.completeMonday;
      this.change = change;
      if (!this.completeMonday){
        this.selectMonday = true;
      } else {
        this.selectMonday = false;
      }
    },
    changeComplete2(change, it=0) {
    if(this.completeTuesday) {
      this.tdMassive2.forEach(function(completed1){
        completed1.completed1 = true;
        it = it+1;
          if(it == 24){
            change = true;
          }
      });
      } else {
      this.tdMassive2.forEach(function(completed1){
        completed1.completed1 = false;
      });
      }
      this.completeTuesday = !this.completeTuesday;
      this.change2 = change;
      if (!this.completeTuesday){
        this.selectTuesday = true;
      } else {
        this.selectTuesday = false;
      }
    },
    changeComplete3(change, it=0) {
    if(this.completeWednesday) {
      this.tdMassive3.forEach(function(completed2){
        completed2.completed2 = true;
        it = it+1;
          if(it == 24){
            change = true;
          }
      });
      } else {
      this.tdMassive3.forEach(function(completed2){
        completed2.completed2 = false;
      });
      }
      this.completeWednesday = !this.completeWednesday;
      this.change3 = change;
      if (!this.completeWednesday){
        this.selectWednesday = true;
      } else {
        this.selectWednesday = false;
      }
    },
    changeComplete4(change, it=0) {
    if(this.completeThursday) {
      this.tdMassive4.forEach(function(completed3){
        completed3.completed3 = true;
        it = it+1;
          if(it == 24){
            change = true;
          }
      });
      } else {
      this.tdMassive4.forEach(function(completed3){
        completed3.completed3 = false;
      });
      }
      this.completeThursday = !this.completeThursday;
      this.change4 = change;
      if (!this.completeThursday){
        this.selectThursday = true;
      } else {
        this.selectThursday = false;
      }
    },
    changeComplete5(change, it=0) {
    if(this.completeFriday) {
      this.tdMassive5.forEach(function(completed4){
        completed4.completed4 = true;
        it = it+1;
          if(it == 24){
            change = true;
          }
      });
      } else {
      this.tdMassive5.forEach(function(completed4){
        completed4.completed4 = false;
      });
      }
      this.completeFriday = !this.completeFriday;
      this.change5 = change;
      if (!this.completeFriday){
        this.selectFriday = true;
      } else {
        this.selectFriday = false;
      }
    },
    changeComplete6(change, it=0) {
    if(this.completeSaturday) {
      this.tdMassive6.forEach(function(completed5){
        completed5.completed5 = true;
        it = it+1;
          if(it == 24){
            change = true;
          }
      });
      } else {
      this.tdMassive6.forEach(function(completed5){
        completed5.completed5 = false;
      });
      }
      this.completeSaturday = !this.completeSaturday;
      this.change6 = change;
      if (!this.completeSaturday){
        this.selectSaturday = true;
      } else {
        this.selectSaturday = false;
      }
    },
    changeComplete7(change, it=0) {
    if(this.completeSunday) {
      this.tdMassive7.forEach(function(completed6){
        completed6.completed6 = true;
        it = it+1;
          if(it == 24){
            change = true;
          }
      });
      } else {
      this.tdMassive7.forEach(function(completed6){
        completed6.completed6 = false;
      });
      }
      this.completeSunday = !this.completeSunday;
      this.change7 = change;
      if (!this.completeSunday){
        this.selectSunday = true;
      } else {
        this.selectSunday = false;
      }
    },
    selectMo (selectMonday){
      this.tdMassive.forEach(function(completed){
        if (completed.completed) {
          selectMonday = true;
        }
      });
      this.selectMonday = selectMonday;
    },
    selectTu (selectTuesday){
      this.tdMassive2.forEach(function(completed1){
        if (completed1.completed1) {
          selectTuesday = true;
        }
      });
      this.selectTuesday = selectTuesday;
    },
    selectWe (selectWednesday){
      this.tdMassive3.forEach(function(completed2){
        if (completed2.completed2) {
          selectWednesday = true;
        }
      });
      this.selectWednesday = selectWednesday;
    },
    selectTh (selectThursday){
      this.tdMassive4.forEach(function(completed3){
        if (completed3.completed3) {
          selectThursday = true;
        }
      });
      this.selectThursday = selectThursday;
    },
    selectFr (selectFriday){
      this.tdMassive5.forEach(function(completed4){
        if (completed4.completed4) {
          selectFriday = true;
        }
      });
      this.selectFriday = selectFriday;
    },
    selectSa (selectSaturday){
      this.tdMassive6.forEach(function(completed5){
        if (completed5.completed5) {
          selectSaturday = true;
        }
      });
      this.selectSaturday = selectSaturday;
    },
    selectSu (selectSunday){
      this.tdMassive7.forEach(function(completed6){
        if (completed6.completed6) {
          selectSunday = true;
        }
      });
      this.selectSunday = selectSunday;
    },
    clearAll (){
      this.tdMassive.forEach(function(completed){
        completed.completed = false;
      });
      this.tdMassive2.forEach(function(completed1){
        completed1.completed1 = false;
      });
      this.tdMassive3.forEach(function(completed2){
        completed2.completed2 = false;
      });
      this.tdMassive4.forEach(function(completed3){
        completed3.completed3 = false;
      });
      this.tdMassive5.forEach(function(completed4){
        completed4.completed4 = false;
      });
      this.tdMassive6.forEach(function(completed5){
        completed5.completed5 = false;
      });
      this.tdMassive7.forEach(function(completed6){
        completed6.completed6 = false;
      });
      this.selectMonday = false;
      this.selectTuesday = false;
      this.selectWednesday = false;
      this.selectThursday = false;
      this.selectFriday = false;
      this.selectSaturday = false;
      this.selectSunday = false;
      this.completeMonday = true;
      this.completeTuesday = true;
      this.completeWednesday = true;
      this.completeThursday = true;
      this.completeFriday = true;
      this.completeSaturday = true;
      this.completeSunday = true;
      this.change = false;
      this.change2 = false;
      this.change3 = false;
      this.change4 = false;
      this.change5 = false;
      this.change6 = false;
      this.change7 = false;
    },
    changeChecked(change, it=0) {
    this.tdMassive.forEach(function(completed){
        if (!completed.completed) {
          change = false;
        }
      });
      this.tdMassive.forEach(function(completed){
        if (completed.completed) {
          it = it+1;
          if(it == 24){
            change = true;
          }
        }
      });
      this.change = change;
    },
    changeChecked2(change, it=0) {
    this.tdMassive2.forEach(function(completed1){
        if (!completed1.completed1) {
          change = false;
        }
      });
      this.tdMassive2.forEach(function(completed1){
        if (completed1.completed1) {
          it = it+1;
          if(it == 24){
            change = true;
          }
        }
      });
      this.change2 = change;
    },
    changeChecked3(change, it=0) {
    this.tdMassive3.forEach(function(completed2){
        if (!completed2.completed2) {
          change = false;
        }
      });
      this.tdMassive3.forEach(function(completed2){
        if (completed2.completed2) {
          it = it+1;
          if(it == 24){
            change = true;
          }
        }
      });
      this.change3 = change;
    },
    changeChecked4(change, it=0) {
    this.tdMassive4.forEach(function(completed3){
        if (!completed3.completed3) {
          change = false;
        }
      });
      this.tdMassive4.forEach(function(completed3){
        if (completed3.completed3) {
          it = it+1;
          if(it == 24){
            change = true;
          }
        }
      });
      this.change4 = change;
    },
    changeChecked5(change, it=0) {
    this.tdMassive5.forEach(function(completed4){
        if (!completed4.completed4) {
          change = false;
        }
      });
      this.tdMassive5.forEach(function(completed4){
        if (completed4.completed4) {
          it = it+1;
          if(it == 24){
            change = true;
          }
        }
      });
      this.change5 = change;
    },
    changeChecked6(change, it=0) {
    this.tdMassive6.forEach(function(completed5){
        if (!completed5.completed5) {
          change = false;
        }
      });
      this.tdMassive6.forEach(function(completed5){
        if (completed5.completed5) {
          it = it+1;
          if(it == 24){
            change = true;
          }
        }
      });
      this.change6 = change;
    },
    changeChecked7(change, it=0) {
    this.tdMassive7.forEach(function(completed6){
        if (!completed6.completed6) {
          change = false;
        }
      });
      this.tdMassive7.forEach(function(completed6){
        if (completed6.completed6) {
          it = it+1;
          if(it == 24){
            change = true;
          }
        }
      });
      this.change7 = change;
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
  margin: 60px 0 20px 0;
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
  font-weight: 600;
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
.changeColor{
  background: #cccccc;
  color: #2c3e50;
}
.clearButton{
  color: #ffffff;
  background: #2c3e50;
  border-radius: 5px;
  border: transparent;
  width: 150px;
  height: 40px;
  font-size: 18px;
  margin-top: 20px;
  margin-right: 20px;
}
.saveButton{
  color: #ffffff;
  background: #2c3e50;
  border-radius: 5px;
  border: transparent;
  width: 250px;
  height: 40px;
  font-size: 18px;
  margin-top: 20px;
}
</style>