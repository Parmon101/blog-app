import * as React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export const Singlepage = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [post, setPosts] = React.useState([]);

    const goBack = () => navigate(-1)
    const goHome = () => navigate('/', {replace: true})

    React.useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPosts(data))
    });

    return (
        <div>
            <button onClick={goBack}>Go back</button>
            <button onClick={goHome}>Go home</button>
            {post && (
                <>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </>
            )}
        </div>
    );
};
