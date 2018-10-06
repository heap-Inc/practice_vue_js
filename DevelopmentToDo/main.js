var toDoApp = new Vue({
    //ルートテンプレートをマウントする
    el: '#toDoApp',
    data: {
        mewItem: '',
        todos: [],
    },
    methods: {
        addToDoList: function(event) {
            var todo = {
                item: this.newItem
            };
            this.todos.push(todo);
            //追加ボタンが押されるとフォームの中身がクリアされる
            this.newItem = '';
        }
    },
})