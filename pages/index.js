import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home({data}) {
  return (
    <div className="flex flex-col items-center">
      
      {data.map(user=>(
        <div className="pt-6 text-6xl text-blue-800"
         key={user.id} >{user.name}</div>
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
