var toDoApp = new Vue({
    //ルートテンプレートをマウントする
    el: '#toDoApp',
    data: {
        newItem: '',
        todos: [],
        errMsg: '',
        toggle: false,
    },
    methods: {
        addToDoList: function(event) {
            if (this.newItem == '') {
                //エラーメッセージに文字列を代入する
                this.errMsg = 'タスク名を追加してください';
                //テンプレートでエラーメッセージが表示されるようにする
                this.toggle = true;
            } else {
                //エラー処理フラグをfalseに書き換えてエラーメッセージを非表示にする
                this.toggle = false;
                //追加ボタンが押される度に新しいオブジェクトを作成する
                var todo = {
                    item: this.newItem
                };
                // 配列todosに↑todoオブジェクトを追加
                this.todos.push(todo);
                //追加ボタンが押されるとフォームの中身がクリアされる
                this.newItem = '';
            }
        }
    },
})