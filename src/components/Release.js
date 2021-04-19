import React from 'react';

const Release = ({name, url}) => {

    return(
        <li>
        <a href={url}>{name}</a>
        </li>
    )

}

export default Release;