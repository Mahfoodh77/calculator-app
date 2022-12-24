const display = document.querySelector('.calc-display')
const buttons= document.querySelectorAll('.btns-container button')
const delBtn = document.querySelector('.del')
const resetBtn = document.querySelector('.reset')
const equalBtn = document.querySelector('.equal')

buttons.forEach(btn=>{
    btn.addEventListener('click',(e)=>{    
        switch(e.target.innerText){
            case "DEL":
                display.innerText = display.innerText.slice(0,-1)
                break;
                case "RESET":
                    display.innerText = ''
                    break;
                    case "=":
                        try{
                            display.innerText = eval(display.innerText)
                        }catch{display.innerText ="Error!"}
                        
                        break;
                        case "X":
                            display.innerText += '*'
                            break;
                default:display.innerText += e.target.innerText
        }
        
    })
})


const themeBtns = document.querySelectorAll('.themes')
const toggleCircle = document.querySelector('.circle')
const body = document.body

themeBtns[0].addEventListener('click',()=>{
    body.setAttribute('data-theme',"dark")
    toggleCircle.classList.add('circle_move0')
    toggleCircle.classList.remove('circle_move1')
    toggleCircle.classList.remove('circle_move2')
})
themeBtns[1].addEventListener('click',()=>{
    body.setAttribute('data-theme',"light")
    toggleCircle.classList.add('circle_move1')
    toggleCircle.classList.remove('circle_move0')
    toggleCircle.classList.remove('circle_move2')
})
themeBtns[2].addEventListener('click',()=>{
    body.setAttribute('data-theme',"darker")
    toggleCircle.classList.add('circle_move2')
    toggleCircle.classList.remove('circle_move0')
    toggleCircle.classList.remove('circle_move1')
})


