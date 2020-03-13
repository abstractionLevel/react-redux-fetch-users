import React from 'react'

const ListUser = (props) => (
    <div>
        <button onClick={props.fetchUsers}>fetch users</button>
        <ul>
        {props.users.map(user =>
            <li key={user.id} >
                {user.name}
            </li>
        )}
        </ul>
    </div>
);

export default ListUser;
