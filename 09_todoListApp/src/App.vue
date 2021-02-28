<template>
  <div id="app">
    <TodoHeader></TodoHeader><!--이름 표시-->
    <TodoInput v-on:addTodo="addTodo"></TodoInput><!--할 일 입력&추가/ 추가 버튼 클릭 시 App컴포넌트로 이벤트 전달(v-on)추가-->
    <TodoList v-bind:propsdata="todoItems" @removeTodo="removeTodo"></TodoList><!--할 일 목록 표시&삭제 / todoItems속성을 TodoList컴포넌트에 props로 전달-->
    <!--@removeTodo="removeTodo"는 v-on:removeTodo의 약식 문법-->
    <TodoFooter v-on:removeAll="clearAll"></TodoFooter><!--할 일 모두 삭제/ 새로고침 안하면 갱신 안 되는 문제 해결 위해 v-on추가-->
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  data(){
    return{
      todoItems: []
    }
  },
  //TodoList.vue에서 옮겨옴 (할일 입력 시 바로 갱신 안 되는 문제점 해결 위해서)

  created(){
    if(localStorage.length>0){
      for(var i=0;i<localStorage.length;i++){
        this.todoItems.push(localStorage.key(i));
      }
    }
  },
   //TodoList.vue에서 옮겨옴 (할일 입력 시 바로 갱신 안 되는 문제점 해결 위해서) 

  methods:{
    addTodo(todoItem){//원래 TodoInput에 있던 내용. 새로고침 안하면 갱신 안 되는 문제 때문에 App으로 내용 옮김
      localStorage.setItem(todoItem,todoItem);
      this.todoItems.push(todoItem);
    },
    clearAll(){//원래 TodoFooter에 있던 내용. 새로고침 안하면 갱신 안 되는문제 해결 위해 옮김
      localStorage.clear();
      this.todoItems=[];
    },
    removeTodo(todoItem,index){
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index,1);
    }
  },

  components: {
    'TodoHeader': TodoHeader,
    'TodoInput': TodoInput,
    'TodoList': TodoList,
    'TodoFooter': TodoFooter
  }
}
</script>

<style>

</style>