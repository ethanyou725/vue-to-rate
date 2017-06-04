### install
    npm install vue-to-rate

### import
main.js

    import vrate from 'vue-to-rate'
    Vue.use(vrate)


### use
    <template>
        <div>
            <vrate :min=10 :max=200 :blank=4 activeColor='rgb(34,88,123)' :size=20 @rate='rate'></vrate>
        </div>
    </template>

    <style>
    @import url('../../node_modules/vue-to-rate/vratings/css/iconfont.css'); // import compoent css or your css
    </style>
### props
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

### example
![example](http://i4.buimg.com/1949/645aabea902bac37.gif)