<template>
  <div id="firstcomponent">
    <h1>I am a title.</h1>
    <button @click="handleauth">获取验证码</button>
    <a> written by {{ author }} </a>
  </div>
</template>

<script type="text/javascript">

export default {
  data () {
    return {
      author: 'hello Vue and brilliantzhao, this is page01'
    }
  },
  methods: {
    handleauth: function () {
      this.$axios.get('/api/auth/apidemo', {
        // params: {
        //   start: 1525042480000,
        //   end: 1525842480000,
        //   uuid: '3607bf73aef99df424178d80817a41ee'
        // },
        // proxy: {
        //   host: '127.0.0.1',
        //   port: 5000,
        //   auth: {
        //     username: 'zyadmin',
        //     password: '12345678'
        //   }
        // }
        // baseURL: 'http:127.0.0.1:5000'
      })
        .then(function (response) {
          console.log(response.data)
          console.log(response.status)
          console.log(response.statusText)
          console.log(response.headers)
          console.log(response.config)
        })
    }
  }
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
