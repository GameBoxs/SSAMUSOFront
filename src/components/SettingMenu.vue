<template>
    <div class="settingMenuDiv">
        <div>
            <p class="menuHead" style="margin-top:30px;">유저 설정</p>
        </div>
        <div class="menuItem">
            <p>개인 정보</p>
        </div>
        <div class="menuItem">
            <p>커리어 정보</p>
        </div>
        <div class="menuItem">
            <p>작성한 글&댓글</p>
        </div>
        <div class="menuItem">
            <p>팀 목록</p>
        </div>
        <hr/>
        <div>
            <p class="menuHead" style="margin-top:30px;">일반 설정</p>
        </div>
        <div class="menuItem">
            <p>알림</p>
        </div>
        <div class="menuItem">
            <p>Contact Us</p>
        </div>
        <div class="menuItem">
            <p>Version Info</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SsamusoSettingMenu',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style scoped>
@font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

.menuItem>p:hover{
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    cursor: pointer;
}

p {
    overflow: hidden;
    white-space:nowrap;
    font-family: 'GmarketSansMedium', sans-serif;
    transform: skew(-0.1deg);
    margin: 15px;
    font-size: 20px;
}

.menuHead {
    font-size: 30px;
    font-weight: bold;
}
.menuItem {
    width: 100%
}

@media(max-width:1250px){
p {
    font-size: 15px;
}

.menuHead {
    font-size: 25px;
    font-weight: bold;
}

}
@media(max-width:1000px){
p {
    font-size: 10px;
}

.menuHead {
    font-size: 20px;
    font-weight: bold;
}

}
@media(max-width:840px){
p {
    font-size: 10px;
}

.menuHead {
    font-size: 15px;
    font-weight: bold;
}

}

hr {
    width: 80%;
    margin: auto;
}
</style>