var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello worle!'
    }
})

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
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