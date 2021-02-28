<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" placeholder="Type what you have to do" v-on:keyup.enter="addTodo">
        <!--enter눌러도 추가됨-->
        <!--placeholder은 입력하기 전에 써있는거-->

        <!--<button v-on:click="addTodo">추가</button> :처음에 썼던 코드, span으로 바꿈-->

        <span class="addContainer" v-on:click="addTodo">
            <i class="addBtn fas fa-plus" aria-hidden="true"></i>
            <!--어썸 아이콘의 + 아이콘 추가-->
        </span>


        <modal v-if="showModal" @close="showModal=false">
            <h3 slot="header">경고</h3>
            <span slot="footer" @click="showModal=false">
                할 일을 입력하세요.
                <i class="closeModalBtn fas fa-times" aria-hidden="true"></i>
            </span>
        </modal>
        <!--입력 안하고 할 일 리스트 추가 버튼 누르면 경고 모달 창 뜸-->
    </div>
</template>

<script>
import Modal from './common/Modal.vue'

export default {
    data(){
        return{
            newTodoItem: '',
            //쓰는대로 뷰 개발자 도구에 나타남(쓰는대로 갱신)

            showModal: false
            //기본값으로는 모달창이 안 보임. 입력 없이 추가 버튼 눌렀을 때 나타남
        }
    },
    methods:{
        addTodo(){
            //console.log(this.newTodoItem);
            //버튼 클릭하면 console창에 input 출력(v-on과 함께 사용)-작동 확인용!
            if(this.newTodoItem!==""){
                var value=this.newTodoItem&&this.newTodoItem.trim();
                //trim()으로 입력된 텍스트의 앞뒤 공백 문자열 제거

                //localStorage.setItem(value,value);
                //setItem(key,value)인데 key value값 단순하게 하기 위해 똑같이 저장
                //key값 -> 중복 입력 안된다
                //새로고침 안하면 갱신 안 돼서 App.vue에 이 내용을 추가하고 신호를 받아온다

                this.$emit('addTodo',value);
                //이벤트를 전달, 할 일 텍스트 값인 value 객체를 인자 값으로 전달한다.

                this.clearInput();
                //input박스 초기화(만든함수)
            }
            else{
                this.showModal=!this.showModal;
            }
        },
        clearInput(){
            this.newTodoItem="";
        }
    },
    components:{
        Modal:Modal
    }
}
</script>

<style scoped>
    input:focus{
        outline:none;
    }
    .inputBox{
        background:white;
        height:50px;
        line-height:50px;
        border-radius:5px;
    }
    .inputBox input{
        border-style:none;
        font-size:0.9rem;
    }
    .addContainer{
        float:right;
        background: linear-gradient(to right, #9d8fbd, #715db6);
        /*그라데이션*/ 
        display:block;
        width:3rem;
        border-radius: 0 5px 5px 0;
    }
    .addBtn{
        color:white;
        vertical-align:middle;
    }
</style>