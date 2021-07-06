import React from 'react';
import { useHistory } from 'react-router-dom';

const Posts = (props) => {
    const {id, title, body} = props.post;
    const history = useHistory();
    const showComments =id => {
        const url = `posts/${id}`;
        history.push(url)
    }
    return (
        <div>
            <h3><strong>ID:{id}</strong> Title: {title}</h3>
            <p>{body}</p>
            <button onClick={()=> showComments(id)}>Show Comments</button>
        </div>
    );
};

export default Posts;