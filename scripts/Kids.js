import { database } from "./database.js"

const children = database.children

export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li 
                    data-id="${child.id}" 
                    data-type="child" 
                    data-wish="${child.wish}">
                    ${child.name}
                </li>`
    }

    html += "</ol>"
    return html
}
