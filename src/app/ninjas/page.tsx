import styles from './../Jobs.module.css'


 


async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 
const Ninjas =async () => {
  const data = await getData()

  return (
    <div>
      <h1>All Ninjas</h1>
      {data.map(el => (
        <div key={el.id}>
          <a className={styles.single}>
            <h3>{ el.name }</h3>
          </a>
        </div>
      ))}
    </div>
  );
}
 
export default Ninjas;