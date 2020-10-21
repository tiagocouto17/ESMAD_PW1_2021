const vm = new Vue({
    el: '#app',
    data: {
        msg: 'A ESMAD é uma escola do IPP',
        textColor: 'black',
        fontSize: 12,
        backColor: 'white',
        show: 'visible'
    },
    methods: {
        changeColorText(color) {
            this.textColor = color
        },
        changeFontSize(size) {
            this.fontSize = size
        },
        changeBackColor(color) {
            this.backColor = color
        },
        changeVisibility() {
            if (this.show=='visible') {
                this.show='hidden'
            } else {
                this.show='visible'
            }
        }
    }
})