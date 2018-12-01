var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello worle!'
    }
})

Vue.component('todo-item', {
    props: ['item'],
    template: '<li>{{ item.text }}</li>'
})

var app2 = new Vue({
    el: '#app2',
    data: {
        groceryList: [
            { id: 0, text: '蔬菜' },
            { id: 1, text: '奶酪' },
            { id: 2, text: '其他' }
        ]
    }
})


var obj = {
    foo: 'bar'
}

//Object.freeze(obj)

new Vue({
    el: '#app1',
    data: obj
})

var message = {
    msg: 'hahahaha'
}

new Vue({
    el: '#test',
    data: message
})

var data= {
    a:1
}
var vm = new Vue({
    el: '#example',
    data: data
})

vm.$data === data
vm.$el === document.getElementById('example')
vm.$watch('a',function(newValue, oldValue){
    //回调在vm.a 改变后调用
})

var con = new Vue({
    data:{
        a: 1
    },
    fun: ()=>{
        console.log("a is : "+ this.a)
    }
})