const vm = new Vue({
    el: '#app',
    data: {
        frm: {
            continent: 'europe',
            country: 'camaroes',
            cities: 'a,b',
            description: 'asdasd',
            startDate: '28-10-2020',
            endDate: '29-10-2020',
            type: 'holidays',
            photo: 'http://www.x.pt',
            filter: {
                continent:'europe',
                startdDate:'',
                endDate:'',
                type:''
            }            
        },                
        travels: []
    },
    created() {

    },
    methods: {
        getNextId() {
            if (this.travels.length === 0) {
                return 1
            } else {
                return this.travels[this.travels.length - 1].id + 1
            }
        },

        addTravel() {
            const newTravel = {
                id: this.getNextId(),
                continent: this.frm.continent,
                country: this.frm.country,
                cities: this.frm.cities.split(','),
                description: this.frm.description,
                startDate: new Date(this.frm.startDate),
                endDate: new Date(this.frm.endDate),
                type: this.frm.type,
                photo: this.frm.photo,
            }
            this.travels.push(newTravel)
        },
        removeTravel(id) {
            if (confirm('Deseja mesmo remover a viagem?')) {
                this.travels = this.travels.filter(
                    travel => travel.id !== id
                )
            }
        }
    },
    computed: {
        filteredTravels() {
            return this.travels.filter(
                travel => travel.continent === this.frm.filter.continent || this.frm.filter.continent === ''
            )
        }
    }
})