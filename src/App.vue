<template>
  <!-- Setting Modal Start (by.KJH) -->
  <transition name="fade">
    <div class="BG-black" v-show="isModalOpen" @mousedown="closeModal">
      <div class="BG-white">
        <setting-modal/>
      </div>
    </div>
  </transition>
  <!-- Setting Modal Button -->
  <span><font-awesome-icon :icon="['fas','gear']" class="settingBtn" @click="modalClick"/></span>
  <!-- Setting Modal End -->
</template>

<script>
import SettingModal from '@/components/SettingModal.vue'
export default {
  name: 'App',
  data() {
    return {
      isModalOpen: false,
    };
  },
  methods:{
    modalClick() {
      this.isModalOpen = true;
    },
    closeModal(e) {
      if(e.target.className == 'BG-black'){
        this.isModalOpen = false;
      }
    }
  },
  components: {
    SettingModal,
  }
}
</script>

<style>
* {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100vh;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}


/* Setting Modal CSS Start */
.settingBtn:hover {
  cursor: pointer;
}

.BG-black {
  display: grid;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 20px;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.BG-white {
  box-sizing: border-box;
  width: 90vw;
  height: 80%;
  border-radius: 5px;
  background: white;
}
@media(max-width:700px){
  .BG-white {
    width: 630px;
  }
  .BG-black {
    justify-content: left;
  }
}

/* 페이드 인 효과 */
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.5s;
}

.fade-enter-to {
  opacity: 1;
}

/* 페이드 아웃 효과 */
.fade-leave-from {
  opacity: 1;
}

.fade-leave-active {
  transition: all 0.5s;
}

.fade-leave-to {
  opacity: 0;
}

/* Setting Modal Css End */
</style>
