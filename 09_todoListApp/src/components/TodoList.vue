<template>
    <section>
        <transition-group name="list" tag="ul">
        <!--원래 <ul>이였는데 애니메이션 효과 위해 태그 바꿈-->

            <!--<li v-for="(todoItem, index) in todoItems" :key="todoItem" class="shadow">-->
            <!--index는 임의로 정의한 변수가 아닌 v-for디렉티브에서 기본 제공하는 변수-->

            <li v-for="(todoItem,index) in propsdata" :key="todoItem" class="shadow">
            <!--새로고침안하면 갱신 안 돼서 App.vue에서 props해서 todoItem사용-->
                <i class="checkBtn fas fa-check" aria-hidden="true"></i>
                <!--체크 아이콘 넣기-->
                {{todoItem}}
                <span class="removeBtn" type="button" @click="removeTodo(todoItem,index)">
                    <i class="far fa-trash-alt" aria-hidden="true"></i>
                    <!--쓰레기통 아이콘 넣기-->
                </span>
            </li>
        </transition-group>
    </section>  
</template>

<script>
export default {
    props: ['propsdata'],
    //App.vue에서 todoItems전달받음

    /*data(){
        return{
            todoItems: []
        }
    },
    created(){
        if(localStorage.length>0){
            for (var i=0;i<localStorage.length;i++){
                this.todoItems.push(localStorage.key(i));
            }
        }
    },*/
    //App.vue로 이동!
    
    methods:{
        removeTodo(todoItem,index){
            //console.log(todoItem,index);
            //쓰레기통 아이콘 클릭 작동 확인

            //localStorage.removeItem(todoItem);
            //localStorage에서 삭제
            
            //this.todoItems.splice(index,1);
            //splice(index,1) : 자바스크립트 내장 함수, 특정 인덱스에서 부여한 숫자만큼의 인덱스를 삭제한다. (배열에서 삭제)

            //새로고침 안해도 클릭할때마다 바로 삭제됨. 뷰의 반응성

            this.$emit('removeTodo',todoItem,index);
        }  
    }
}
</script>

<style scoped>
    ul{
        list-style-type:none;
        padding-left:0px;
        margin-top:0;
        text-align:left;
    }

    li{
        display:flex;
        min-height:50px;
        height:50px;
        line-height:50px;
        margin: 0.5rem 0;
        padding: 0 0.9rem;
        background: white;
        border-radius:5px;
    }

    .checkBtn{
        line-height:45px;
        color: #62acde;
        margin-right:5px;
    }

    .removeBtn{
        margin-left:auto;
        color: #de4343;
    }

    

  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }

    /*애니메이션*/

</style>