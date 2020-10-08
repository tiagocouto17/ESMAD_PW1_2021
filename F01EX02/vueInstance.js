const vm = new Vue({
    el:'#intro',
    data: {
        firstName: 'Ricardo',
        lastName: 'Queirós',
        age: 45
    },
    methods: {
        fullName() {
            return `O meu nome é ${this.firstName} ${this.lastName}`
        }
    }
})