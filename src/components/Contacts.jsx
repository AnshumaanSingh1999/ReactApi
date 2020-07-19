import React from "react";

export default function Contacts(props) {
  console.log(props.contacts);
  return (
    <div>
      <center>
        <h1>Corona Tracker</h1>
      </center>
      {props.contacts.results.map((contact) => (
        <div class="card">
          <div class="card-body">
            <p class="card-text">Total Number of Cases : {contact.total_cases}</p>
            <p class="card-text">Total Recoveries : {contact.total_recovered}</p>
            <p class="card-text">Toatal Daeths : {contact.total_deaths}</p>
            <p class="card-text">Total Number of Affected Countries : {contact.total_affected_countries}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
