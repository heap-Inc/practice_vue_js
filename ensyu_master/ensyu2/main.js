var app = new Vue({
    el: '#app',
    data: {
        languages: ['java', 'php', 'python', 'ruby'],
        msg: 'クリック前です',
        modelMsg: '双方向データバインディングを実装'
    },
    methods: {
        click: function() {
            this.msg = 'ボタンをクリックしたので書き換わりました'
        }
    }

})