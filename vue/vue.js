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