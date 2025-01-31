import React from "react";
import { useNavigate } from "react-router-dom";
import Shelters from "./Shelters";
import { UpcomingShifts } from "./Shifts";
import Impact from "./Impact"; // Ensure Impact.js exists and exports correctly

function VolunteerDashboard() {
  const navigate = useNavigate();


  function signupClick() {
    navigate("/shelters");
  }

  return (
    <div className="volunteer-dashboard">
      <div className="column column-1">
        <h3>Upcoming Shifts</h3>
        <div className="no-title"><UpcomingShifts /></div>
      </div>
      <div className="column column-2">
        <h3>Shelters looking for Volunteers</h3>
        <Shelters condensed={true} />
      </div>
      <div className="column column-3">
        <Impact />
      </div>
      <div className="cta-button">
        <button onClick={signupClick}>Sign up for shifts</button>
      </div>

    </div>
  );
}

export default VolunteerDashboard;
