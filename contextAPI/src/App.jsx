import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./contet/UserContextProvider"


function App() {
 

  return (
    <UserContextProvider>
      <h1>Aysuh Agarwal react project Context api</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
