"use client";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from "./../../Details.module.css"


const Details = ({params}) => {
 
  const [ninja, setNinja] = useState(null);
  const id = params.id
console.log(params.id)
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!res.ok) {
          throw new Error('Failed to fetch user data');
        }
        const data = await res.json();
        setNinja(data);
      } catch (error) {
        console.error(error);
      }
    }

    if (id) {
      fetchData();
    }
  }, [id]);
 
//   console.log(id)
return (
  <div className={styles.container}>
    <h1 className={styles.heading}>User Details</h1>
    {ninja ? (
      <div>
        <p className={styles.para}><strong>Name:</strong> {ninja.name}</p>
        <p className={styles.para}><strong>Email:</strong> {ninja.email}</p>
        <p className={styles.para}><strong>Website:</strong> {ninja.website}</p>
        <p className={styles.para}><strong>City:</strong> {ninja.address.city}</p>
      </div>
    ) : (
      <p>Loading...</p>
    )}
  </div>
);
};

export default Details;

