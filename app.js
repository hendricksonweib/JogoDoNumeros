const yesbtn = document.getElementById('yesbtn')
const nobtn = document.getElementById('nobtn')
const welcomeStart = document.getElementById('welcomeStart')
const yesStartBtn = document.getElementById('yesStartBtn')
const startGame = document.getElementById('startGame')
const mainGame = document.getElementById('mainGame')
const StartBtn = document.getElementById('StartBtn')
const rules = document.getElementById('rules')
const question = document.getElementById('question')
const ValorNUmber = document.getElementById('ValorNUmber')
const NumberLucky = 20
const tentativasJogo = []

yesbtn.addEventListener('click', () => {
    welcomeStart.style.display='none'
    startGame.style.display='flex'
})
yesStartBtn.addEventListener('click',()=>{
    welcomeStart.style.display='none'
    startGame.style.display='none'
    rules.style.display='flex'
})
StartBtn.addEventListener('click',()=>{
    rules.style.display='none'
    welcomeStart.style.display='none'
    startGame.style.display='none'
    question.style.display='flex'
})
question.addEventListener('click', ()=>{
    rules.style.display='none'
    welcomeStart.style.display='none'
    startGame.style.display='none'
    StartBtn.style.display='none'
})

ValorNUmber.addEventListener('keydown',()=>{
        if (event.key === 'Enter'){
            VerificarValor()
            Valor()
        }
    })


function Valor(){
    const numDigitado = ValorNUmber.value
    if(numDigitado===''|| numDigitado === 'e,%,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z'){
        alert('digite um numero')
    } 
    console.log(numDigitado)
    ValorNUmber.value =''
}

function VerificarValor (){
    const numDigitado = ValorNUmber.value
    if(numDigitado == 20){
        alert('acertou')
    }else alert ('errou faz o pix')
}