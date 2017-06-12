<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <br>
    <h5>
      &#60;vrate :min=10 :max=100 :blank=5 activeColor='rgb(34,88,123)' :size=20 @rate='rate'&#62;&#60;/vrate&#62;
    </h5>
    <vrate :min=10 :max=100 :blank=5 activeColor='rgb(134,188,123)' :size=20 @rate='rate'></vrate>
  </div>
</template>
<script>

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  methods: {
    rate (args) {
      console.log( `this rate score is: ${args}`);
    }
  }
}
</script>

<style scoped>
@import url('../../node_modules/vue-to-rate/vratings/css/iconfont.css');

h1, h2 {
  font-weight: normal;
}

</style>
