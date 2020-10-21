const vm = new Vue({
    el: '#app',
    data:{
        schools: ['ESMAD', 'ISEP', 'ESE', 'ISCAP', 'ESTG', 'ESS', 'ESHT'],
        filterChar: ''
    },
    methods: {
        addSchool(newSchool) {
            if (!this.schools.includes(newSchool)) {
                this.schools.push(newSchool)    
            } else {
                alert('Escola já adicionada!')
            }            
        },
        filterSchool(char) {
            this.filterChar = char
        }
    },
    computed: {
        filteredSchools() {
            return this.schools.filter(
                school => school.startsWith(this.filterChar)
            )
        }
    }
})