const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(response => response.json())
        .then(data => displayBuddies(data))
}
loadBuddies()

const displayBuddies = data => {
    const buddies = data.results;
    const buddiesDiv = document.getElementById("buddies")
    for (const buddy of buddies) {

        const p = document.createElement("P");
        p.innerText = `name ${buddy.name.first} ${buddy.name.last} ${buddy.email}`

        buddiesDiv.appendChild(p)

    }
}