import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import {useRouter} from "next/router"
import Link from "next/link"
export default function Item() {
  const router = useRouter();
  const items = [
    {name: 'bag'},
    {name: 'dress'},
    {name: 'pants'}
  ]
  console.log(router.query);
  return (
    <div className= "wrapper">
      <h1>商品<span>{router.query.item}</span>ページを作って見たい</h1>
      <ul>
        {items.map((item) => {
          return (
            <li>
              <Link as={`/items/${item.name}`} href="/items/[name]" >{item.name}</Link>
            </li>
          )
        })}
      </ul>
      <Link href="/about">詳細はこちら</Link>
    </div>
  )
}
