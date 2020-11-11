// Definir o componente counter-button
Vue.component('show-page', {
    props:['text','link'],
    template: `
        <a 
            v-bind:href='link'
            class='btn btn-danger'
            target='_blank'
        >
            {{text}}
        </a>
    `
 }
)


