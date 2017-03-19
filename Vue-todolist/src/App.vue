<template>
  <div id="app">
    <h1 v-text="title">{{ title }}</h1>
    <input v-model="newItem" v-on:keyup.enter="addNew" type="text" placeholder="what to do">
    <ul>
      <li v-for="todo in todos" v-bind:class="{finished: todo.isFinished}"><span class="things" v-on:click="toggleList(todo)">{{ todo.label }}</span><span class="delete" v-on:click="removeOne(todo)">&times;</span></li>
    </ul>
    <button type="button" v-on:click="clearList">clear</button>
  </div>
</template>

<script>
  import Store from "./store";
  Array.prototype.removeByValue = function(val) {
    for(let i=0; i<this.length; i++) {
      if(this[i] == val) {
        this.splice(i, 1);
        break;
      }
    }
  };
  export default {
    data (){
      return {
        title: "this is a todo list",
        todos:  Store.fetch() == null ? []: Store.fetch(),
        newItem: ''
      }
    },
    watch: {
      todos: {
        handler: function (val) {
          Store.save(val);
        },
        deep: true
      }
    },
    methods: {
      toggleList: function(item){
        item.isFinished = !item.isFinished;
      },
      addNew: function(){
        if (this.newItem !== ''){
          this.todos.push({
            label: this.newItem,
            isFinished: false
          })
        }
        this.newItem = '';
      },
      clearList: function(){
        this.todos = [];
      },
      removeOne: function (item) {
        this.todos.removeByValue(item);
      }
    }
  }
</script>

<style lang="scss" type="text/css" scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #4d4d4d;
    margin-top: 60px;
  }
  #app h1{
    color: #00b1ff;
  }
  #app ul{
    list-style: none;
    padding: 30px;
    width: 800px;
    margin: 0 auto;
    transition: all 0.5s ease;
  }
  #app ul li{
    cursor: pointer;
    color: #4d4d4d;
    transition: all 0.5s ease;
    font-size: 14px;
    height: 20px;
    line-height: 20px;
    margin: 10px 0;
    padding: 0 0 0 10px;
    text-align: left;
    border-left: 3px solid #00b1ff;
  }
  #app ul li .things{
    display: inline-block;
    width: 755px;
    transition: all 0.5s ease;
  }
  #app ul li .things:hover{
    text-shadow: 0 0 3px #dedecc;
  }
  #app input{
    width: 780px;
    height: 20px;
    padding: 5px 0 5px 20px;
    border: 1px solid #d3d3c1;
    transition: all 0.5s ease;
  }
  #app input:focus{
    box-shadow: 0 0 3px #00b1ff;
  }
  #app .finished .things{
    text-decoration: line-through;
  }
  #app .finished{
    border-left: 3px solid #02ff2f;
  }
  #app .delete{
    display: inline-block;
    width: 30px;
    text-align: center;
    color: #a7a7a7;
    transition: all 0.3s ease;
  }
  #app .delete:hover{
    color: #ff2146;
  }
  #app button{
    width: 200px;
    height: 30px;
    font-size: 14px;
    line-height: 30px;
    cursor: pointer;
    background: #00b1ff;
    border: none;
    color: #ffffff;
    border-radius: 5px;
    transition: all 0.3s ease;
    outline: none;
  }
  #app button:hover{
    background: #0c9cdd;
  }
</style>
