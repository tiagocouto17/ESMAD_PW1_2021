const vm = new Vue({
    el: '#app',
    data: {
        teams: [
            { name: 'benfica', year: 1910 },
            { name: 'porto', year: 1912 },
            { name: 'sporting', year: 1914 },
        ]
    },
    methods: {
        addTeam(teamName, teamYear) {
            const newTeam = { name: teamName, year: teamYear }
            this.teams.push(newTeam)
        }
    }
})