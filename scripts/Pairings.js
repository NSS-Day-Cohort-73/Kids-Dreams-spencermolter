import { database } from "./database.js"

const kids = database.children
const celebrities = database.celebrities

const findCelebrityMatch = (kidObject, celebrityArray) => {
    let celebrity = null

    for (const star of celebrityArray) {
        if (star.id === kidObject.celebrityId) {
            celebrity = star
            break
        }
    }

    return celebrity
}

export const Pairings = () => {
    let html = ""
    html = "<ul>"

    for (const kid of kids) {
        const celebrity = findCelebrityMatch(kid, celebrities)
        html += `
            <li>
                ${kid.name} will be making memories with ${celebrity.name}, a ${celebrity.sport} star, by ${kid.wish}
            </li>
        `
    }

    html += "</ul>"

    return html
}
