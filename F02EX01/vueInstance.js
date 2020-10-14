const vm = new Vue({
    el: '#app',
    data: {
        num: 0,
        msg: ''
    },
    methods: {
        up() {
            this.msg='' 
           this.num = this.num + 1 
        },
        down() {
            if (this.num == 0) {
                this.msg = 'Número inválido!'
            } else {
                this.num = this.num - 1
            }
            
        }
    },
    created() {
        console.log('A instânca Vue foi criada!');
        if (localStorage.getItem('number')) {
            this.num = parseInt(localStorage.getItem('number'))
        }

    },
    mounted() {
        console.log('A instânca Vue foi montada na DOM!');
    },
    updated() {
        console.log('O número foi alterado!');
        localStorage.setItem('number', this.num)
    }

})