import { getPets, getWalkers } from "./database.js"

const pets = getPets()
const walkers = getWalkers()

document.addEventListener(
    "click",
    (clickEvent) => {
    
        const itemClicked = clickEvent.target
        
        if (itemClicked.id.startsWith("pet")) {
            const [,petId] = itemClicked.id.split("--")

                let walkedPet = pets.find(pet => pet.id === parseInt(petId))
                let walker = walkers.find(walker => walker.id === walkedPet.walkerId)

                window.alert(`${walkedPet.name} is being walked by ${walker.name}`)
                

            }
            }
        
)

export const RegisteredPets = () => {
    let petHTML = "<ul>"
    for (const pet of pets) {
        petHTML += `<li id="pet--${pet.id}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

