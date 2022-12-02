<template>
    <div class="settingMainDiv">
        <span class="menu"> <setting-menu @view-name="changeViewName"/> </span>
        <router-view :name="name"/>
    </div>
</template>

<script>
import SettingMenu from '@/components/SettingMenu.vue'
export default {
    name: 'SettingModal',

    data() {
        return {
            name: 'info',
        };
    },

    mounted() {
        
    },

    methods: {
        changeViewName(changename) {
            this.name = changename;
        }
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