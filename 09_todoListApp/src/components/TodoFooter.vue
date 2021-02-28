<template>
    <div class="clearAllContainer">
        <span class="clearAllBtn" @click="clearTodo">Clear All</span>
    </div>
</template>

<script>
export default {
    methods:{
        clearTodo(){
            //localStorage.clear();
            //모두 삭제되지만 새로고침을 해야 갱신된다(단점)


            this.$emit('removeAll');
            //새로고침 문제 해결
        }
    }
}
</script>

<style scoped>
    .clearAllContainer{
        width:8.5rem;
        height:50px;
        line-height:50px;
        background-color:white;
        border-radius:5px;
        margin:0 auto;
    }

    .clearAllBtn{
        color: #e20303;
        display: black;
    }
</style>