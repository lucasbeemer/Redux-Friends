import React from 'react'

function Friend(props) {
    return (
        <div className={`friend ${props.name}`}>
            <p><strong>Name: </strong> {props.name}</p>
            <p><strong>Age: </strong> {props.age}</p>
            <p><strong>E-mail: </strong> {props.email}</p>
            <button id={props.id} onClick={props.onDelete}>Delete</button>
            <button id={props.id} onClick={props.onUpdate}>Update</button>
        </div>
    )
}

export default Friend