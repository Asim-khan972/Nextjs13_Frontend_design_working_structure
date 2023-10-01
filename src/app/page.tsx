import Image from 'next/image'

import Style from "./Home.module.css"
import Link from 'next/link'

export default function Home() {
  return (
    <div className={Style.container}>

      <h1 className={Style.title}>Homepage</h1>
      <p className={Style.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
      <p className={Style.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
     
     <Link href="/ninjas/" className={Style.btn}>
        See Ninja Listing
      </Link>
      
    </div>
  )
}



