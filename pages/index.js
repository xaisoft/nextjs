import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home({data}) {
  return (
    <div>
      {data.map(user=>(
        <div key={user.id}>{user.name}</div>
     ))}
    </div>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
  const data = await res.json()
  return {
    props: {data} // will be passed to the page component as props
  }
}
