<template>
    <div class="myinfoDiv">
        <div class="pictureDiv">
            <p class="title">사진</p>
            <hr/>
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"/>
        </div>
        <button class="uploadBtn"> 사진 업로드 </button>
        <div class="infoDiv">
            <p class="title">개인 정보</p>
            <hr/>
            <p class="nameTitle"> 이름 </p>
            <input class="nameText" style="text" readonly>
            <div class="infoGrid">
                <p>지역</p>
                <p>기수</p>
                <p>반</p>
                <p>트랙</p>
                <input class="locationText" style="text" readonly>
                <input class="ordinalNumberText" style="text" readonly>
                <input class="classText" style="text" readonly>
                <input class="trackText" style="text" readonly>
            </div>
        </div>
        <div class="emailDiv">
            <p class="title">이메일</p>
            <div class="emailFlex">
                <input class="emailText" style="text" readonly>
                <button class="changeEmailBtn">이메일 변경</button>
            </div>
        </div>
        <div class="passwordDiv">
            <p class="title">비밀번호</p>
            <hr/>
            <p class="InfoText">비밀번호 변경을 원하시면 아래 버튼을 눌러 변경을 시도 하세요.</p>
            <button class="changePasswordBtn"> 비밀번호 변경 </button>
        </div>
        <div class="logoutDiv">
            <p class="title">로그아웃</p>
            <hr/>
            <p class="InfoText">현재 세션에서 로그아웃을 원하신다면 아래 버튼을 눌러 시도하세요.</p>
            <button class="logoutBtn"> 로그아웃 </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyInfo',

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
p {
    cursor: default;
}
input {
    cursor: default;
}

input:focus{
    outline: none;
}

.myinfoDiv {
    padding: 20px;
    overflow: auto;
    -ms-overflow-style: none;
}
::-webkit-scrollbar {
    display: none;
}

.title {
    text-align: left;
    font-family: 'GmarketSansMedium';
    width: 100%;
    margin-bottom: 5px;
}
img {
    margin-top: 30px;
    margin-bottom: 30px;
    border-radius: 70%;
    object-fit: cover;
    overflow: hidden;
    width: 240px;
    height: 240px;
}

.uploadBtn {
    font-family: 'GmarketSansMedium';
    border-radius: 5px;
    border: none;
    height: 30px;
    -webkit-box-shadow: 1px 5px 10px 0px rgba(0,0,0,0.3); 
    box-shadow: 1px 5px 10px 0px rgba(0,0,0,0.3);
    margin-bottom: 30px;
}

.uploadBtn:hover {
    cursor: pointer;
    -webkit-box-shadow: 1px 5px 10px 0px rgba(0,0,0,0.5); 
    box-shadow: 1px 5px 10px 0px rgba(0,0,0,0.5);
}

.nameTitle {
    margin-top: 30px;
    font-family: 'GmarketSansMedium';
    text-align: left;
}
.nameText {
    display: flex;
    margin-top: 5px;
    height: 20px;
    width: 15%;
    border: none;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 5px;
}

.infoGrid {
    font-family: 'GmarketSansMedium';
    margin-top: 10px;
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    grid-template-rows: 40% 40%;
    text-align: left;
}

.infoGrid input {
    margin-top: 5px;
    width: 60%;
    height: 20px;
    border: none;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 5px;
}

.emailDiv{
    margin-top: 10px;
}

.emailText{
    float: left;
    width: 60%;
    height: 20px;
    border: none;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 5px;
}

.emailFlex{
    display: flex;
    margin-bottom: 30px;
}

.emailFlex button {
    margin-left: 20px;
    font-family: 'GmarketSansMedium';
    border-radius: 5px;
    border: none;
    height: 30px;
    -webkit-box-shadow: 1px 5px 10px 0px rgba(0,0,0,0.3); 
    box-shadow: 1px 5px 10px 0px rgba(0,0,0,0.3);
    transform: translatey(-5px);
}

.changeEmailBtn:hover {
    cursor: pointer;
    -webkit-box-shadow: 1px 5px 10px 0px rgba(0,0,0,0.5); 
    box-shadow: 1px 5px 10px 0px rgba(0,0,0,0.5);
}

.InfoText {
    margin-top: 20px;
    text-align: left;
    font-family: 'GmarketSansMedium',serif;
    margin-bottom: 20px;
}

.changePasswordBtn {
    align-items: center;
    margin-bottom: 35px;
    display: flex;
    font-family: 'GmarketSansMedium';
    border-radius: 5px;
    border: none;
    height: 30px;
    -webkit-box-shadow: 1px 5px 10px 0px rgba(0,0,0,0.3); 
    box-shadow: 1px 5px 10px 0px rgba(0,0,0,0.3);
}

.changePasswordBtn:hover {
    cursor: pointer;
    -webkit-box-shadow: 1px 5px 10px 0px rgba(0,0,0,0.5); 
    box-shadow: 1px 5px 10px 0px rgba(0,0,0,0.5);
}

.logoutBtn {
    align-items: center;
    display: flex;
    font-family: 'GmarketSansMedium';
    border-radius: 5px;
    border: none;
    height: 30px;
    -webkit-box-shadow: 1px 5px 10px 0px rgba(0,0,0,0.3); 
    box-shadow: 1px 5px 10px 0px rgba(0,0,0,0.3);
}

.logoutBtn:hover {
    cursor: pointer;
    -webkit-box-shadow: 1px 5px 10px 0px rgba(0,0,0,0.5); 
    box-shadow: 1px 5px 10px 0px rgba(0,0,0,0.5);
}
</style>