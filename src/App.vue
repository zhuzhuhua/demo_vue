<template>
  <div id="app">
    <NavMenu></NavMenu>
    <NavMenu2></NavMenu2>
    <h1>{{msg}}</h1>
    {{ $store.state.count }}
    <router-link to="/page01">page01</router-link>
    <router-link to="/page02">page02</router-link>
    <button v-on:click="handleRouter">跳转到主页</button>
    <el-radio v-model="radio" label="1">选项1</el-radio>
    <el-radio v-model="radio" label="2">选项2</el-radio>
    <br/>
    <router-view></router-view>
  </div>
</template>

<script>
import NavMenu from './components/NavMenu.vue'
import NavMenu2 from './components/NavMenu2.vue'
export default {
  data () {
    return {
      msg: 'hello Vue',
      radio: 1
    }
  },
  methods: {
    handleRouter () {
      this.$router.push({name: 'HelloWorld', params: { userId: 123 }})
      // this.$store.commit('add', 10)
      this.$store.dispatch('incrementAsync')
      // console.log(this.$store.getters.done)
    }
  },
  watch: {
    '$route' (to, from) {
      console.log(to)
      console.log(from)
    }
  },
  components: { NavMenu, NavMenu2 }

}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
