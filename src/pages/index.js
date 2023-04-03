import styles from '@/styles/Home.module.css'
import Navbar from '@/components/navbar'
import MainForm from '@/components/MainForm'
import { useState, useEffect } from 'react'
import TailwindHome from '@/components/TailwindComponent'

export default function Home() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch('/api/users');
      console.log(response, 'response');
      const users = await response.json();
      setUsers(users);
    }

    fetchUsers();
  }, []);

  return (
    <>
      {/* <div>
      <h1>Users:</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div> */}
      {/* <Navbar />
      <MainForm /> */}
      <TailwindHome />
    </>
  )
}
