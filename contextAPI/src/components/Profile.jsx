import {useContext} from 'react'
import UserContext from '../contet/UseContext'

function Profile() {
    const {user} = useContext(UserContext)
  if (!user) return <div>login now</div>
  return <div>Welcome {user.username}</div>
}

export default Profile