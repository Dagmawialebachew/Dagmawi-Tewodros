const contentWrapper = document.querySelector('.content-wrapper')
const pulser = document.querySelector('.pulser')

setTimeout( () => {
 contentWrapper.style.display = 'none'
    document.body.style.background = 'white'
},6000)
setTimeout( () => {
  
    contentWrapper.style.display = 'block'
    document.body.style.background = 'var(--primary-color)'
    pulser.style.display = 'none'
}, 6001)

setTimeout(() => {
  pulser.innerHTML =`
    <div>
    <div class="grid"><p>Modern</p><img src="images/modern.png"></div>
 
  </div>
  `
},1500)
setTimeout(() => {
  pulser.innerHTML =`
  <div>
  <div class="grid"><p>Appeling</p><img src="images/magnet.png"></div>

</div>
`
},3000)
setTimeout(() => {
  pulser.innerHTML =`
  <div>
  <div class="grid"><p>User Friendly</p><img src="images/user-friendly.png"></div>

</div>
`
},4500)
