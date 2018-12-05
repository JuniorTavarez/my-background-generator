
const color1 = document.querySelector('#color1')
const color2 = document.querySelector('#color2')
const body = document.querySelector('body')
function color (){
    document.querySelector('body').style.background = 'linear-gradient(to right,' +  color1.value +  ',' + color2.value + ')'
}

document.querySelector('#color1').addEventListener('input', color)


document.querySelector('#color2').addEventListener('input', color)



document.querySelector('#color1').addEventListener('input', function(){
    const p = document.querySelector('.p1')
  p.innerHTML = ''
 p.textContent = color1.value
})

document.querySelector('#color2').addEventListener('input', function(){
    const p = document.querySelector('.p2')
    p.innerHTML = ''
   p.textContent = color2.value


  })


