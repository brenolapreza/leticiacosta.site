import React from 'react'
import Header from "../../components/Header"

export default function Home(){

    const [ posts, setPost ] = React.useState([]);
  
    const loadData = async () => {
        const res = await fetch('http://localhost:1337/blogs')
        const data = await res.json()
        setPost(data)
    }
  
    React.useEffect(() => {
        loadData();
    }, [])

    return(
        <>
            <Header/>
            <h1>Oi</h1>
                {posts.map(post => (
                    <article key={post.id}>
                        <h4>{post.titulo}</h4>
                        <p>{post.content}</p>
                    </article>
                ))}
        </>
    )
}