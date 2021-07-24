import axios from 'axios'
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_FAILURE,
  FETCH_USERS_SUCCESS,
} from '../constants'

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  }
}

export const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  }
}

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  }
}

export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch(fetchUsersRequest())
    try {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      )

      dispatch(fetchUserSuccess(data))
    } catch (err) {
      dispatch(fetchUsersFailure(err.message))
    }
  }
}
