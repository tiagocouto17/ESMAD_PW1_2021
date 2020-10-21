const vm = new Vue({
    el: '#app',
    data: {
        teams: [
            { name: 'benfica', year: 1910, location:'lisboa' },
            { name: 'fcp', year: 1912, location:'porto' },
            { name: 'sporting', year: 1914, location:'lisboa' },
        ],
        location:''
    },
    methods: {
        addTeam(teamName, teamYear, teamLocation) {
            const newTeam = { 
                name: teamName, 
                year: teamYear, 
                location: teamLocation }
            this.teams.push(newTeam)
        },
        filterLocation(newLocation) {
            this.location = newLocation
        }
    },
    computed: {
        filteredTeams() {
            return this.teams.filter(
                team => team.location === this.location || this.location ==''
            )
        }
    }
})