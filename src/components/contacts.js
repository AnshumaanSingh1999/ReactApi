import React from 'react'

const Contacts = ({contacts}) => {
    return (
        <div>
            <center><h1>Contact List</h1></center>
            {contacts.map((contact) => (
                <div class="card">
                    <div class="card-body">
                        <p class="card-text">{contact.results.total_cases}</p>
                        <p class="card-text">{contact.results.total_recovered}</p>
                        <p class="card-text">{contact.results.total_deaths}</p>
                        <p class="card-text">{contact.total_affected_countries}</p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Contacts