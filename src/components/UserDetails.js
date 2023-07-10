import React from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import { Button } from '@soluto-private/mx-asurion-ui-react';


function UserDetails() {
    const navigate = useNavigate();
    const location = useLocation();
    const user = location.state.data;
 const navigateToPreviousPath = () => {
    if (location.state && location.state.from) {
        navigate(-1); // Go back one step in the history stack
      } else {
        const selectedOption ='option3';
        // If there's no previous path, navigate to a default fallback route
        navigate('/',selectedOption);
      }
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column',alignItems: 'center' }}>
      <h1>User Details</h1>
      <table>
        <tbody>
            <tr><p>Name: {user?.name}</p></tr>
            <tr><p>Email: {user?.email}</p></tr>
            <tr><p>Phone: {user?.phone}</p></tr>
            <tr><p>Website: {user?.website}</p></tr>
        </tbody>
      </table>
      <Button onClick={navigateToPreviousPath}>Go Back</Button>
    </div>
  );
}

export default UserDetails;
