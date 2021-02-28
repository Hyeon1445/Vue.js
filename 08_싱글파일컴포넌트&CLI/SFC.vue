<template>
    <div>
        <button>{{msg}} world!</button>
    </div>
</template>
<!--화면에 표시할 요소들 정의(HTML+뷰 데이터 바인딩)-->
<!--HTML태그 내용-->


<script>
export default {
    data:function() {
        return{
            msg: 'hello'
        }
    }
}
</script>
<!--뷰 컴포넌트의 내용을 정의(template,data,method)-->
<!--자바스크립트 내용-->


<style>
span {
    font-size:2em;
}
</style>
<!--템플릿에 추가한 HTML 태그의 CSS 스타일 정의-->
<!--CSS스타일 내용-->