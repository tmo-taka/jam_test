import Link from "next/link"
import Header from "../components/header"
export default function index({ posts }) {
    return (
        <div>
        <Header header="こんにちは"></Header>
        <h1>POST一覧</h1>
        {posts.map((list) => {
            return(
                <li key={list.id}><span>{list.id}</span>
                <Link as={`/test/${list.id}`} href="/test/[test]" >{list.title}</Link></li>
            )
        })}
        </div>
    );
}

export async function getServerSideProps() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const posts = await res.json();
    return { props: { posts } };
}