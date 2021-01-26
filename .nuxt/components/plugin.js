import Vue from 'vue'

const globalComponents = {
  VImg: () => import('../../components/global/VImg.vue' /* webpackChunkName: "components/v-img" */).then(c => c.default || c)
}

for (const name in globalComponents) {
  Vue.component(name, globalComponents[name])
}
