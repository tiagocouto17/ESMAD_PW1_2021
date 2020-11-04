const vm = new Vue({
    el: '#app',
    data: {
        frm: {
            name: '',
            link: '',
            edit: {
                id:'',
                name: '',
                link: ''
            },
            filter: {
                name:''
            }            
        },
        link:'',
        flagSortCastle: 1,
        castles: []
    },
    methods: {
        getNextId() {
            // Forma abrevaiada
            // return this.castles.length ? this.castles[this.castles.length - 1] + 1 : 1
            
            // Forma tradicional
            if (this.castles.length == 0) {
                return 1
            } else {
                return this.castles[this.castles.length - 1].id + 1
            }

        },
        addCastle() {
            // Adicionar castelo (sem validação de duplicados)
            this.castles.push(
                {
                    id: this.getNextId(),
                    name: this.frm.name,
                    link: this.frm.link
                }
            )
        },
        editCastle(id) {
            // Exibir a janela 
            document.querySelector('#dlgUpdateCastle').showModal()

            // Obter o objeto a editar
            const editCastle = this.castles.find(
                castle => castle.id === id
            )

            // Alimentar os campos de formulário de edição
            this.frm.edit.id = editCastle.id
            this.frm.edit.name = editCastle.name
            this.frm.edit.link = editCastle.link
        },
        updateCastle() {
            // Fechar a janela 
            document.querySelector('#dlgUpdateCastle').close()

            // Atualizar os dados do castelo
            this.castles.map(
                castle => {
                    if (castle.id === this.frm.edit.id) {
                        castle.name = this.frm.edit.name
                        castle.link = this.frm.edit.link
                    }
                }
            )

        },
        viewCastle(id) {
            // Exibir a janela 
            document.querySelector('#dlgViewCastle').showModal()

            // Obter o objecto a visualizar
            const viewCastle = this.castles.find(
                castle => castle.id === id
            )

            // Atualizar propriedade da instância (emparelhada com atributo src do elemento img) com o link do castelo
            this.link = viewCastle.link;

        },
        removeCastle(id) {
            // Remover objeto com confirmação
            if (confirm('Deseja remover o castelo?')) {
                this.castles = this.castles.filter(
                    castle => castle.id !== id
                )    
            }            
        },
        sortCastles() {
            // ordenar castlos pelo nome (alterando entre ordenação crescente e decrescente)
            this.flagSortCastle = this.flagSortCastle * -1
            this.castles.sort(this.compareCastles)
        },
        compareCastles(a, b) {
            if(a.name > b.name) return 1 * this.flagSortCastle
            if(a.name < b.name) return -1 * this.flagSortCastle
            if(a.name === b.name) return 0
        }
    },
    computed: {
        // Filtrar castelos pelo filtro do nome (à medida que vai escrevendo vai atualizando a tabela)
        filteredCastles() {
            return this.castles.filter(
                castle => castle.name.includes(this.frm.filter.name)
            )
        }
    },

    created() {
        // Alimentar array dos castelos com 10 castelos
        this.castles = [{
            id: 1,
            name: "Castelo de Bragança",
            link: "https://i1.wp.com/www.vortexmag.net/wp-content/uploads/2015/04/11021478_789330187780883_1992398901395585075_o.jpg?resize=640%2C415",
            year: 1000
        },
        {
            id: 2,
            name: "Almourol",
            link: "https://i1.wp.com/www.vortexmag.net/wp-content/uploads/2015/04/11046854_793447744035794_6644364760515171458_o.jpg?resize=640%2C415",
            year: 1000
        },
        {
            id: 3,
            name: "Castelo de Marvão",
            link: "https://i2.wp.com/www.vortexmag.net/wp-content/uploads/2015/04/10649042_702725743107995_1458143537900302356_o.jpg?resize=640%2C415",
            year: 1000
        },
        {
            id: 4,
            name: "Castelo de Montalegre",
            link: "https://i1.wp.com/www.vortexmag.net/wp-content/uploads/2015/04/11021309_786097224770846_4490230410016196052_o-1-e1485957738973.jpg?resize=640%2C415",
            year: 1000
        },
        {
            id: 5,
            name: "Castelo de Sortelha",
            link: "https://i2.wp.com/www.vortexmag.net/wp-content/uploads/2015/04/1510562_743660549014514_1798999603922685904_n.jpg?resize=640%2C415",
            year: 1000
        },
        {
            id: 6,
            name: "Castelo de Arraiolos",
            link: "https://i0.wp.com/www.vortexmag.net/wp-content/uploads/2015/04/10981073_787377341309501_2130083883941642881_o.jpg?resize=640%2C415",
            year: 1000
        },
        {
            id: 7,
            name: "Castelo de Santa Maria da Feira",
            link: "https://i2.wp.com/www.vortexmag.net/wp-content/uploads/2015/04/10993133_785137361533499_2834769696870331489_o-1.jpg?resize=640%2C415",
            year: 1000
        },
        {
            id: 8,
            name: "Castelo de Lindoso",
            link: "https://i2.wp.com/www.vortexmag.net/wp-content/uploads/2015/04/10854966_780229555357613_3783697791888632461_o.jpg?resize=640%2C415",
            year: 1000
        },
        {
            id: 9,
            name: "Castelo dos Mouros",
            link: "https://i2.wp.com/www.vortexmag.net/wp-content/uploads/2015/04/casteloguim-1-e1446910277358.jpg?resize=640%2C415",
            year: 1951
        },
        {
            id: 10,
            name: "Castelo de Guimarães",
            link: "https://i2.wp.com/www.vortexmag.net/wp-content/uploads/2015/04/casteloguim-1-e1446910277358.jpg?resize=640%2C415",
            year: 1000
        }
        ]
    }
})