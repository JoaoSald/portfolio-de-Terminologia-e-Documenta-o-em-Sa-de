const form = document.querySelector('.quiz-form')
const div = document.querySelector('.result')

const correctAnswers = ['A','B','A','B']

form.addEventListener('submit',evento =>{
    evento.preventDefault()
    let score = 0

    const UserAnswers = [
        form.inputQuestion1.value, 
        form.inputQuestion2.value, 
        form.inputQuestion3.value, 
        form.inputQuestion4.value
    ]

    UserAnswers.forEach( (item, index) =>{
        if(item === correctAnswers[index]){
            score += 25
        }
    })
    let count = 0

    scrollTo(0,0)

    div.classList.remove('d-none')

   const time = setInterval(()=>{
        if(count === score){
            clearInterval(time)
        }
        div.querySelector('span').textContent = `${count}%`
        count++
    }, 10)
})