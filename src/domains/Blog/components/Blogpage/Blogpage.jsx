import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';

export const Blogpage = observer(({data}) => {

    return (
        <div>
            <h1>Blog</h1>
            {
                data.map(post => (
                    <Link key={post.id} to={`/posts/${post.id}`}>
                        <li>{post.title}</li>
                    </Link>
                ))
            }
        </div>
    );
});
