//Task 2
const ticketContainer = document.getElementById(`ticketContainer`)
const error = document.getElementById(`error`)

async function fetchTicket(){
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
   
        if (!response.ok){
            throw new Error(`Failed`)
        }


        const ticket = await response.json()

        if (!tickets.length)
            throw new Error(`Ticket unavailable`)

    ticketContainer.innerHTML = ``
    displayTickets(tickets)

    }
    catch (errorOccur){
    error.textcontent = `Error`
    }

}

//Task 3
function displayTickets(tickets){
    tickets.forEach(item =>{
        const tDiv = document.createElement(`div`)
        tDiv.classList.add(`ticket`)
        tDiv.innerHTML = `
        <p><strong>Customer Name</strong> ${ticket.userId}</p>
        <p><strong>Issue Description</strong> ${ticket.title}</p>
        <p><strong>Details</strong> ${ticket.body} </p> `
    })
}

fetchTicket()