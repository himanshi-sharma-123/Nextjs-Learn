import React from "react";

const MyProfile = ({ params }) => {
  console.log(params);
  return (
    <div>
      <h1>My Profile {params.id}</h1>
    </div>
  );
};

export default MyProfile;
