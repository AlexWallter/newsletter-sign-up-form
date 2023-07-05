const input = document.querySelector('#input')
const btn = document.querySelector('#sub-btn')
const invalid = document.querySelector('#invalid-p')


function validEmail() {
    const value = input.value
    if (value.match(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)) {

        invalid.innerHTML = ''
        input.style.color = 'hsl(0, 0%, 0%)'
        input.style.backgroundColor = 'hsla(120, 100%, 60%, .3)'
        input.style.borderColor = 'hsl(120, 100%, 60%)'
        input.style.outlineColor = 'hsl(120, 100%, 60%)'


        btn.onclick = function() {
            location.href = "success-page.html";
        }
    } 
    else {
        invalid.innerHTML = 'valid email required'
        input.style.color = 'hsl(4, 100%, 67%)'
        input.style.borderColor = 'hsl(4, 100%, 67%)'
        input.style.backgroundColor = 'hsla(4, 100%, 67%, .3)'
        input.style.outlineColor = 'hsl(0, 100%, 60%)'


        btn.onclick = function() {
            location.href = '#sub-btn';
        }
        return console.log(false)
    }
}

input.addEventListener('keyup', validEmail)


btn.addEventListener('click', ()=> {
    const value = input.value
    if (value == '') {
        invalid.innerHTML = 'valid email required'
        alert('please, enter a valid email')
    }
})