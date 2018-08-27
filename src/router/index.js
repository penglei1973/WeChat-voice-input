import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const voice = (reverse)=>{
  import('@/components/voice').then((module)=>{
    reverse(module)
  })
}

let router=  new Router({
  routes: [
    {
      path: '/',
      name: 'voice',
      component: voice
    }

  ]
})

export default router
