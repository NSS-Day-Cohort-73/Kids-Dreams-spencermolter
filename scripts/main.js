import { Pairings } from "./Pairings.js"
import { Celebrities } from "./CelebrityList.js"
import { Kids } from "./Kids.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
    <h1>Make a Memory for Kids</h1>
    <article class="details">
        <section class="detail--column list details__kids">
            <h2>Kids</h2>
            ${Kids()}
        </section>
        <section class="detail--column details__celebrities">
            <h2>Celebrities</h2>
            ${Celebrities()}
        </section>
    </article>

    <article class="assignments">
        <h2>Pairings</h2>
        ${Pairings()}

    </article>
`

mainContainer.innerHTML = applicationHTML

const kiddos = document.querySelectorAll("[data-type='child']")
const celebs = document.querySelectorAll("[data-type='celebrity']")

kiddos.forEach(kid => {
    kid.addEventListener('click', (event) => {
        const kidName = event.target.textContent
        const kidWish = event.target.getAttribute("data-wish")
        alert(`${kidName}'s wish is ${kidWish}`)
    })
})

celebs.forEach(celeb => {
    celeb.addEventListener('click', (event) => {
        const celebName = event.target.textContent
        const celebSport = event.target.getAttribute("data-sport")
        alert(`${celebName} is a ${celebSport} star`)
    })
})
