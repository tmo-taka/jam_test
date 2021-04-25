import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import {useRouter} from "next/router"
import Link from "next/link"

export default function Test(data) {
    return (
        <div className="wrapper">
            <div>{data.title}</div>
        </div>
    )
}

export async function getStaticPaths() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const posts = await res.json();
    const paths = posts.map((post) => `/test/${post.id}`);
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    console.log(params);
    // ファイル名のzeit/[name].jsに対応
    const id = params.test
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    return { props: data }
}
