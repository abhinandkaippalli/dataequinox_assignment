import { useSelector } from 'react-redux';
//import { useEffect } from 'react';
//import { setUser } from 'react';
import './leaderboard.css'
//import axios from "axios";

 function Leaderboard() {
/*
  const fetchData = async () => {
    const response = await axios.get("https://reqres.in/api/users");
    return setUser(response.data);
  */
/*
  useEffect(() => {
    fetchData();
  },[])
*/

  const users = useSelector(state => state.users)

  return (
    <div className="App">
      {
        users.map(user =>
          <div className='box' key={user.id}>
            {user.firstname} 
             .{user.lastname}   
             <p>      
             {user.email}
             </p>
          </div>)
      }
    </div>

  );
    }

export default Leaderboard;