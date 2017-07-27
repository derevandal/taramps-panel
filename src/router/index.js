import Vue from 'vue'
import Router from 'vue-router'
import pHome from '@/pages/pHome'
import pProducts from '@/pages/pProducts'
import pGifts from '@/pages/pGifts'
import pCompanies from '@/pages/pCompanies'
import pUsers from '@/pages/pUsers'
import pReports from '@/pages/pReports'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/'
      , component: pHome
    },
    {
      path: '/inicio'
      , component: pHome
    },
    {
      path: '/produtos'
      , component: pProducts
    },
    {
      path: '/brindes'
      , component: pGifts
    },
    {
      path: '/empresas'
      , component: pCompanies
    },
    {
      path: '/usuarios'
      , component: pUsers
    },
    {
      path: '/relatorios'
      , component: pReports
    }
  ]
})
