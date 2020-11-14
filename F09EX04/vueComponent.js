// Definir o componente counter-button
Vue.component('game-soccer-card', {
    props: {
        game : {
            type: Object,
            required: true
        }
    },
    template: `
    <div class="card" style="width: 18rem;">
        <img :src="game.stadiumLink" class="card-img-top" :alt="game.stadiumName">
        <div class="card-body">
            <p class="card-title">
                {{game.teamName1}} {{this.getTeamGoals(game.teamName1)}}
                 - 
                 {{this.getTeamGoals(game.teamName2)}} {{game.teamName2}}
            </p>
            <p class="card-text"><b>Estádio:</b> {{game.stadiumName}}</p>
            <p class="card-text" v-for='goal in game.goals'>
                {{goal.goalMinute}}' {{goal.playerName}} {{goal.playerTeam}}
            </p>
        </div>
    </div>
    `,
    methods: {
        getTeamGoals(teamName) {
            return this.game.goals.filter(goal => goal.playerTeam == teamName).length
        }
    }
 }
)


