import UserProvider from './context/UserProvider'
import Profile from './components/Profile'
import LoginUser from './components/LoginUser'


function App() {


  return (
    <UserProvider>
      <LoginUser/>
      <Profile/>
      
    </UserProvider>
  )
}

export default App
