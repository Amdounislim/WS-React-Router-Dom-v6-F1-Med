import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import UserCard from '../User/UserCard'
import './Users.css'

const Users = ({ persons }) => {
    return (
        <div>
            {/* List Users
            <Link to={"/connection"}>
                <Button>Connection</Button>
            </Link> */}
            <h1>Welcome, this is the Users List Page</h1>
            <div className="usersList">
                {persons.map((el, i) => <UserCard user={el} key={i} />)}
            </div>
        </div>
    )
}

export default Users
