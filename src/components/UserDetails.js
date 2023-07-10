import React from 'react';
import { useLocation } from 'react-router-dom';

function UserDetails() {
    const location = useLocation();
    const user = location.state.data;
  //const [user, setUser] = useState(null);
 console.log("user",user);

  return (
    <div>
      <h1>User Details</h1>
      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
      <p>Phone: {user?.phone}</p>
        <p>Website: {user?.website}</p>
        
    </div>
  );
}

export default UserDetails;
