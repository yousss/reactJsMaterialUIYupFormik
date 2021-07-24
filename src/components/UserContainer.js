import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../redux/user/action'

const UserContainer = () => {
  const { users } = useSelector((state) => state.users)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <div>
      <h1>user list</h1>
      <ul>
        {users &&
          users.length !== 0 &&
          users.map((user) => {
            return <li key={user.id}>{user.name}</li>
          })}
      </ul>
    </div>
  )
}

export default UserContainer
