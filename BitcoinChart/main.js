var btcChart = new Vue({
    el: '#btcChart',
    data: {
        bpi: null,
        hasErr: false,
        loading: true,

    },
    //インスタンスがマウントされた後に呼ばれる
    mounted: function() {
        //axiosを使ってhttpリクエストを行う
        axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(function(response){
            //↓Jsonの階層をおって行くとレートにたどり着く
            // console.log(response.data.bpi.USD.rate_float);

            // dataプロパティのbpiにdataオブジェクトを代入する
            this.bpi = response.data.bpi;
        }.bind(this))
        //エラーをキャッチできるようにする
        .catch(function(error){
            console.log(error);
            this.hasErr = true;
        }.bind(this))
        //通信が終わった全ての処理のあとに呼ばれる
        .finally(function(){
            this.loading = false;
        }.bind(this))
    },
    //小数点を二桁にするフィルターを実装する
    filters: {
        currencyDecimal(value) {
            return value.toFixed(2);
        }
    }

})