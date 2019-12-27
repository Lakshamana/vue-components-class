import Vue from 'vue'

// Vue.component('vc-component', {
//   data: function() {
//     return {
//       title: 'Curso de VueJS',
//       ctr: 0
//     }
//   },
//   methods: {
//     incrementar() {
//       this.ctr++
//     }
//   },
//   template: `
//     <div>
//       <h1>{{ title }}</h1>
//       <button @click="incrementar">Clicado {{ ctr }} vezes</button>
//     </div>
//   `
// })

const vcComponent = {
  data: function() {
    return {
      title: 'Curso de VueJS',
      ctr: 0
    }
  },
  methods: {
    incrementar() {
      this.ctr++
    }
  },
  template: `
    <div>
      <h1>{{ title }}</h1>
      <button @click="incrementar">Clicado {{ ctr }} vezes</button>
    </div>
  `
}

new Vue({
  el: '#app',
  components: {
    'vc-component': vcComponent
  }
})