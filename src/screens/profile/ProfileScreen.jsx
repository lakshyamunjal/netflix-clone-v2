import React from "react";

import Avatar from "../../components/avatar/Avatar";
import NavBar from "../../components/navBar/NavBar";
import Plans from "../../components/plans/Plans";

import "./profileScreen-styles.scss";

const ProfileScreen = () => {
  return (
    <div className="profile-screen">
      <NavBar showProfileOption={false} rightComponent={Avatar} />
      <div className="profile-screen-container">
        <Plans />
      </div>
    </div>
  );
};

export default ProfileScreen;
