// todo-item と呼ばれる新しいコンポーネントを定義
Vue.component('todo-item', {
    // todo-item コンポーネントはカスタム属性のような "プロパティ" で受け取ります。
    // このプロパティは todo と呼ばれます。
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})


new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!2'
    }
})

new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
})

const app3 = new Vue({
    el: '#app-3',
    data: {
        seen: false
    }
})

const app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            {text: 'Learn JavaScript'},
            {text: 'Learn Vue'},
            {text: 'Build something awesome'}
        ]
    }
})

const app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
});

const app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello Vue!'
    }
});

const app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            {id: 0, text: 'Vegetables'},
            {id: 1, text: 'Cheese'},
            {id: 2, text: 'Whatever else humans are supposed to eat'}
        ]
    }
});
