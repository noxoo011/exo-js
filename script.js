
const mainTitle = document.getElementById("main-title")
console.log(mainTitle)

const texte = document.getElementsByClassName("texte")
console.log(texte)

const allLi = document.querySelectorAll("li")
console.log(allLi)


const btnClick = document.querySelector("#btnClick")
const inputTxt = document.querySelector("#inputTxt")
const resultat = document.querySelector("#resultat")

btnClick.addEventListener('click' , () => {
    console.log("Bouton cliqué !")
})


inputTxt.addEventListener('input' , (e) => {
    resultat.textContent = e.target.value
})

btnClick.addEventListener('mouseenter' , () => {
    btnClick.style.backgroundColor = '#a7287d'
})

btnClick.addEventListener('mouseleave' , () => {
    btnClick.style.backgroundColor = '#ffffff'

})

const titre = document.querySelector("#title")
const zone = document.querySelector("#zone")
const btnAjouter = document.querySelector("#add")
const btnSupprimer = document.querySelector("#remove")

titre.textContent = "Nouveau titre !"
zone.innerHTML =
`
<ul>
 <li>Premier element</li>
 <li>deuxieme element</li>
 <li>Troisieme element</li>
</ul>
`

btnAjouter.addEventListener('click', () => {
    const p = document.createElement('p')
    p.textContent = "Nouveau paragraphe"
    zone.appendChild(p)
})


btnSupprimer.addEventListener('click' , () => {
    const paragraphes = zone.querySelectorAll('p')
    if(paragraphes.length > 0) {
        paragraphes[paragraphes.length -1].remove()
    }
})

