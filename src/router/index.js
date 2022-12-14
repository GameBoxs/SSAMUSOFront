import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import MyInfo from '@/components/menuItem/MyInfo'
import CareerView from '@/components/menuItem/CareerView'
import MyPost from '@/components/menuItem/MyPost'
import TeamList from '@/components/menuItem/TeamList'
import AlarmView from '@/components/menuItem/AlarmView'
import ContactUs from '@/components/menuItem/ContactUs'
import VersionInfo from '@/components/menuItem/VersionInfo'

const routes = [
  {
    path: '/',
    name: 'home',
    components: {
      default:HomeView,
      info:MyInfo,
      career:CareerView,
      mypost:MyPost,
      teamlist:TeamList,
      alarm:AlarmView,
      contactus:ContactUs,
      versioninfo:VersionInfo,
    },
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
