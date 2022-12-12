import React, { useEffect, useState } from 'react'
import './ticket.css'

function Ticket() {
    const [tickets, seTickets] = useState([]);
    useEffect(() => {
        fetch('https://plane-passengers.herokuapp.com/passengers')
        .then(res => res.json())
        .then(seTickets)
    }, [])
  return (
    <div>
        <h1>We have total of {tickets.length} Tickets</h1>
    </div>
  )
}

export default Ticket