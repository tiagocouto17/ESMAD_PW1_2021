const vm = new Vue({
    el: '#app',
    data: {
        frm: {
            continent: 'europe',
            country: 'camaroes',
            cities: 'a,b',
            description: 'asdasd',
            startDate: '',
            endDate: '',
            type: 'holidays',
            photo: 'http://www.x.pt',
            filter: {
                continent: '',
                startDate: '',
                endDate: '',
            }
        },
        travels: [],
        flagCountry:-1
    },
    created() {
        if(localStorage.getItem('travels')) {
            this.travels = JSON.parse(localStorage.getItem('travels'))
        }
    },
    destroyed() {
        localStorage.setItem('travels', JSON.stringify(this.travels))
    },
    methods: {
        getNextId() {
            if (this.travels.length == 0) {
                return 1
            } else {
                return this.travels[this.travels.length - 1].id + 1
            }
        },
        formatDate(d) {
            console.log(d);
            d = new Date(d)
            console.log(d);
            return `${d.getDay()}-${d.getMonth()}-${d.getFullYear()}`
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
                photo: this.frm.photo
            }
            this.travels.push(newTravel)
        },
        removeTravel(id) {
            this.travels = this.travels.filter(
                travel => travel.id != id
            )
        },
        editTravel(id) {
            const travelId = this.travels.findIndex(
                travel => travel.id == id
            )
            this.travels[travelId].country = prompt('Novo país?')

        },
        sortTravelByCountry() {
            this.flagCountry = this.flagCountry * -1
            this.travels = this.travels.sort(this.compareCountries)
        },
        compareCountries(a,b) {
            if (a.country > b.country) return 1 * this.flagCountry
            if (a.country < b.country) return -1 * this.flagCountry
            if (a.country == b.country) return 0
        },
        sortTravelByStartDate() {
            this.travels = this.travels.sort(this.compareDates)
        },
        compareDates(a,b) {
            if (a.startDate > b.startDate) return 1
            if (a.startDate < b.startDate) return -1
            if (a.startDate == b.startDate) return 0
        }

    },
    computed: {
        filteredTravels() {
            return this.travels.filter(
                travel => {
                    let filterContinentResult = true
                    let filterDatesResult = true

                    // Filter continent
                    if (this.frm.filter.continent !== "") {
                        filterContinentResult = travel.continent === this.frm.filter.continent
                    }

                    // Filter dates                    
                    if (this.frm.filter.startDate !== "" && this.frm.filter.endDate !== "") {
                        filterDatesResult =
                            travel.startDate >= new Date(this.frm.filter.startDate) &&
                            travel.startDate <= new Date(this.frm.filter.endDate)
                    }

                    // return the conjunction of the two filters
                    return filterContinentResult && filterDatesResult
                }

            )
        }
    }
})


window.onunload = function () {
    vm.$destroy()    
}