const vm = new Vue({
    el: '#app',
    data:{
        city:'哈尔滨',
        list: [],
    },
    methods:{
        selecte(){
            // console.log(this.city);
            axios.get('http://wthrcdn.etouch.cn/weather_mini?city='+this.city).then(
                (responer) => {
                    this.list = responer.data.data.forecast;                   
                }
            ).catch(err => {
                console.log(err); 
            })
        },
        change(citys){
            this.city = citys
            this.selecte()
        }
    }
})
vm.selecte();