import React from "react";
import Loading from "../components/Loading";
import { useAuth0 } from "../react-auth0-spa";

const Profile = () => {
    const {loading, user} = useAuth0();
    if (loading || !user) {
        return <Loading />;
    }
    return (
        <>
            This is the profile.
        </>
    );
};

export default Profile;
