import { useState } from 'react';
import { Fragment } from 'react';
import sky from '../images/purple-sky-moon.jpg';
import axios from "axios";
import config from '../config';


export default function About() {
  const [users, setUsers] = useState([]);
  const handleUsers = async () => {
    console.log(config.API_URL);
    const res = await axios({
      method: 'get',
      url: `${config.API_URL}/users`,
    })

    console.log(res.data.message);
    setUsers(res.data.message)
  }
  return (
    <Fragment>
      <article className='p-3 bg-white text-dark'>
        <h1 className='title'>Who we are</h1>
        <p>Our mission is to cultivate peace, encourage exploration, and spread a never-ending healing ripple effect, through our coaching and conscious wellness programs. Thoughtfully curated programs are designed and provide clients with the tools to aid in the journey of, but not limited to purpose identification, creative connection, stress reduction and mental wellness.</p>
        <button onClick={handleUsers}>Check users</button>
        {users.map(u => ( 
          <h4>{u.name}</h4>
        ))}
      </article>
      <div className="w-100 d-md-block" style={{ 
        height: '500px', 
        backgroundImage: `url(${sky})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }} />
    </Fragment>
  )
}
