import React from "react";

export default function Contacts(props) {
  console.log(props.contacts);
  return (
    <div>
      <center>
        <h1>Contact List</h1>
      </center>
      {props.contacts.results.map((contact) => (
        <div class="card">
          <div class="card-body">
            <p class="card-text">{contact.total_cases}</p>
            <p class="card-text">{contact.total_recovered}</p>
            <p class="card-text">{contact.total_deaths}</p>
            <p class="card-text">{contact.total_affected_countries}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
