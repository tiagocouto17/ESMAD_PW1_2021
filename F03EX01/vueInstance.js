const vm = new Vue({
    el: '#app',
    data: {
        person: {firstName: 'Rui', lastName: 'Silva', age: 23}
    },
    methods: {
        dataPerson() {
            console.log(`METHOD--> NOME: ${this.person.firstName} e IDADE: ${this.person.age}`); 
        }
    },
    computed: {
        dataPersonComputed() {
            console.log(`COMPUTED PROPERTY--> NOME: ${this.person.firstName} e IDADE: ${this.person.age}`); 
        },
        fullNameComputed() {
            return `${this.person.firstName} ${this.person.lastName}`
        }
    },
    watch: {
        'person.age'(newAge, oldAge) {
            console.log(`Idade alterada de ${oldAge} para ${newAge}`);
        }
    },
    created() {
        console.log('EVENTO: CRIAÇÃO!');
    },
    mounted() {
        console.log('EVENTO: MONTAGEM');
    },
    updated() {
        console.log('EVENTO: ATUALIZAÇÃO');
    }

})