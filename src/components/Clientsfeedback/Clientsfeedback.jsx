import React, { useEffect, useState } from 'react'
import './Clientsfeedback.css';
import Feedbackcards from './Feedbackcards/Feedbackcards';

function Clientsfeedback() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials');
        if (!response.ok) {
          throw new Error("You done it now something went wrong!!");
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='clients-container wrapper'>
      <h2>Clients are <br />Loving Our App</h2>
      <Feedbackcards users={users} />
    </div>
  );
};

export default Clientsfeedback;
