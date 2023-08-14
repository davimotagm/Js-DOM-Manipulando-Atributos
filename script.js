const users = [
    {
        name: 'Madalena',
        profile: 'Admin',
        sector: 'Administration'
    },
    {
        name: 'Rafael',
        profile: 'user',
        sector: 'Finance'
    },
    {
        name: 'Baltazar',
        profile: 'user',
        sector: 'Reception'
    },
    {
        name: 'Carmen',
        profile: 'Admin',
        sector: 'Business'
    }
]

const container_Cards = document.querySelector('.div_cards');

for (let i = 0; i < users.length; i++) {

    container_Cards.insertAdjacentHTML(
        'beforeend',
        `<div class="card">
        <span>${users[i].name}</span>
        <span>${users[i].profile}</span>
        <span>${users[i].sector}</span>
        </div>`
    )
}

const cardUser = document.querySelectorAll('.card');

for (let i = 0; i < users.length; i++) {
    if (users[i].profile === "Admin" && users[i].sector === "Administration") {
        cardUser[i].setAttribute('id', 'admAdmin')
    }

    if (users[i].profile === "user") {
        cardUser[i].setAttribute('id', 'user')
    }

    if (users[i].profile === "Admin" && users[i].sector !== "Administration") {
        cardUser[i].setAttribute('id', 'admin')
    }
}
console.log(cardUser)