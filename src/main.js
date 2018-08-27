// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'

import { Button, ButtonGroup } from 'vue-ydui/dist/lib.rem/button';
/* 使用px：import {Button, ButtonGroup} from 'vue-ydui/dist/lib.px/button'; */

Vue.component(Button.name, Button);
Vue.component(ButtonGroup.name, ButtonGroup);

import { Layout } from 'vue-ydui/dist/lib.rem/layout';
/* 使用px：import {Layout} from 'vue-ydui/dist/lib.px/layout'; */

Vue.component(Layout.name, Layout);

import { NavBar, NavBarBackIcon, NavBarNextIcon } from 'vue-ydui/dist/lib.rem/navbar';
/* 使用px：import {NavBar, NavBarBackIcon, NavBarNextIcon} from 'vue-ydui/dist/lib.px/navbar'; */

Vue.component(NavBar.name, NavBar);
Vue.component(NavBarBackIcon.name, NavBarBackIcon);
Vue.component(NavBarNextIcon.name, NavBarNextIcon);
import 'vue-ydui/dist/ydui.base.css';
import "@/commom/stylus/index.styl"

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
