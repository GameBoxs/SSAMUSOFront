<template>
    <div class="settingMainDiv">
        <span class="menu"> <setting-menu /> </span>
        <span> test2 </span>
    </div>
</template>

<script>
import SettingMenu from '@/components/SettingMenu.vue'
export default {
    name: 'SettingModal',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
    components: {
        SettingMenu,
    },
};
</script>

<style scoped>
.settingMainDiv {
    display: grid;
    height: 100%;
    grid-template-columns: 15% 85%;
}
span {
    /* padding: 10px; */
    /* border: solid black 1px; */
}
.menu {
    border-radius: 5px;
    background-color: rgba(73, 73, 73, 0.068);
}
</style>