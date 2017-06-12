<template>
<div>
  <div class="main"  @mouseleave = 'leave($event)'>
    <i v-for="(item, index) in steps"
    :style="{fontSize: size + 'px'}"
    class="icon iconfont icon-smile"
    @click.prevent.stop='rate(index, $event)'
    @mouseenter = 'enter(index, $event)'
    > </i>
  </div>
</div>
</template>

<script>
export default {
  props: {
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    size: {
      type: Number,
      default: 16
    },
    blank: {
      type: Number,
      default: 10
    },
    activeColor: {
      type: String,
      default: 'orange'
    },
    icons :{
      type: Array,
      default () {
        return ['icon-smile', 'icon-smilefill', 'icon-sad', 'icon-sadfill']
      }
    }
  },
  data () {
    return {
      score: 0,
      isActive: false
    }
  },
  computed: {
    steps() {
      return Math.round((this.max - this.min )/ this.blank)
    },
    low() {
      return this.steps * 0.5
    },
    high() {
      return this.steps * 0.6
    },
    level() {
      return Math.round (this.score / this.steps)
    },
    isLow () {
      return this.score != 0 && this.score <= (this.max - this.min) * 0.5
    },
  },
  methods: {
    rate (index, e) {
      this.score = this.blank * (index + 1)
      let _children = e.target.parentNode.children
      this._removeClass(_children)
      for (let i =0; i <= index; i++ ){
        index + 1 > this.low ? _children[i].classList.add(this.icons[1]) :_children[i].classList.add(this.icons[3])
        _children[i].style.color = this.activeColor
      }
      this.isActive = true
      this.$emit('rate', this.score, e)
    },
    enter (index, e){
      let _children = e.target.parentNode.children
      if (index !== 0 ) {
          for (let i = 0; i <= index; i++ ){
            index + 1 > this.low ? _children[i].classList.add(this.icons[1]) :_children[i].classList.add(this.icons[3])
          }
      } else {
        index + 1 > this.low ? e.target.classList.add(this.icons[1]) :e.target.classList.add(this.icons[3])
      }
    },
    leave (e){
      let _children = Array.prototype.slice.call(e.target.children)
      _children.forEach((item, index) => {
        if (!item.style.color) {
          item.classList.remove(this.icons[1])
          item.classList.remove(this.icons[3])

        }
      })
    },
    _removeClass (nodes) {
      Array.prototype.slice.call(nodes).forEach((item, index) => {
          item.classList.remove(this.icons[1])
          item.classList.remove(this.icons[3])
          item.style.color = ''
        })
    },
  }
}
</script>

<style  scoped>
@import url('./css/iconfont.css');
.main   .icon{
    color: #ccc;
}
</style>
