import React from 'react'

function UserCard (props) {
    return(
        <div>
            <h2>{props.data.login}</h2>
        </div>
    )
}

export default UserCard