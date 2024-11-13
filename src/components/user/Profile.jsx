import React from "react";
import { useGetUserProfileQuery } from "../../redux/api/userApi";

const Profile = () => {
  const { data } = useGetUserProfileQuery();
  console.log(data);
  return (
    <div className="d-flex justify-content-center align-items-center shadow w-50">
      <div className="p-5 m-4">
        <h1 className="mb-3">The LoggedIn User is</h1>
        <h3>username:{data.username}</h3>
        <h4>Email:{data?.email}</h4>
      </div>
    </div>
  );
};

export default Profile;
