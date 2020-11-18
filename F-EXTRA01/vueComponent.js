// Definir o componente counter-button
Vue.component('view-grade', {
    props: {
        grade: {
            type: Object,
            required: true
        }
    },
    template: `
        <dialog open>            
            <p>ID DA NOTA: {{grade.id}}</p>
            <p>ESTUDANTE: {{$parent.getStudentNameById(grade.student)}}</p>
            <p>DISCIPLINA: {{$parent.getDisciplineNameById(grade.discipline)}}</p>
            <p>NOTA: {{grade.grade}}</p>
            <p>
                <form method='dialog'>
                <input type='submit' value ='OK'>
                </form>
            </p>
        </dialog>
    `
 }
)


