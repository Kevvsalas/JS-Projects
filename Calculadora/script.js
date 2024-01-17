// let currentInput = '';
// let screen = document.getElementById('preview')
// let historial = document.getElementById('historial')




// function calculate(){
//     try {
        
//         let result = eval(currentInput)
//         screen.textContent = result
//         historial.textContent = currentInput
        
//     } catch (error) {
    
//         screen.textContent = 'SyntaxError' 
//         console.log('entrealdo')   
//         clearConsole()
//     }
// }

// function clearConsole(){
//     historial.textContent = ''
//     screen.textContent = ''
//     currentInput = ''
// }
function onClickSelect(buttonnumber){


    if(buttonnumber == 10 ){
        calculadora.calculate()
    }else if(buttonnumber == 11){
        calculadora.clearConsole()
    }else if(buttonnumber == 12){
        calculadora.back()
    }
    else{
        calculadora.select(buttonnumber)
    }
}




const calculadora = {
    currentInput: '',

    //Funcion select
    select : function(buttonnumber) {


        if(buttonnumber != 17){
            this.currentInput += buttonnumber
            this.updateScreen(this.currentInput)
        }
        return this.currentInput
        
    },

    //Funcion calculate
    calculate: function(){
        try {
            console.log(this.currentInput)

            let result = eval(this.currentInput)
            this.updateScreen(result)
            this.updateHistory()
        } catch (error) {   
            console.log(undefined != undefined)
            this.updateScreen(undefined)
            this.clearConsole()
        }
    },
    updateScreen: function(content){
        let screen = document.getElementById('preview')
        screen.textContent = content !== undefined ? content : 'Syntax Error'
    },
    
    updateHistory: function (content){
        let historial = document.getElementById('historial')
        historial.textContent = content !== undefined ? content : this.currentInput
        console.log(this.currentInput)
    },


    clearConsole: function(){
        this.currentInput = ''
        this.updateScreen('')
        this.updateHistory('')
    },

    back: function(){
        console.log('entrealafun')
        let newinput = this.currentInput.slice(0,-1)
        this.currentInput = newinput
        this.updateScreen(this.currentInput)
    }

}