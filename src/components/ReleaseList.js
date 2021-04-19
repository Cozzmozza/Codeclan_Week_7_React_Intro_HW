import React from 'react';
import Release from './Release'

const ReleaseList = ({releases}) => {

    const releaseNodes = releases.map((release) => {
        return(
            <Release name={release.name} url={release.url} key={release.id}/>
        )
    }
    )

    return(
        <>
        {/* Tried to do this container as an ul. This made the entries take up 100% width */}
        {releaseNodes}
        </>
    )

}

export default ReleaseList;