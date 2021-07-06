import React from 'react';

const Comments = (props) => {
    const {name, email, body} = props.comment;
    return (
        <p>
          {name} : {email} :: {body}  
        </p>
    );
};

export default Comments;