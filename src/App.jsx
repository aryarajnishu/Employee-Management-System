import React, { useContext, useEffect , useState} from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

function App() {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
    
  const [userData , setUserData] = useContext(AuthContext)

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  },[])


  const handleLogin = (email , password) =>{
    if(email == 'admin@me.com' && password == '123'){
      setUser('admin')
      localStorage.setItem('loggedInUser' , JSON.stringify({roal : 'admin'}))
    } 
    else if (userData) {
      const employee = userData.find((e) => email == e.email && e.password == password)
      
      if(employee){
        setLoggedInUserData(employee)
        setUser('employee')
        localStorage.setItem('loggedInUser' , JSON.stringify({roal : 'employee' , data : employee}))
      }
    } 
    else{
      alert("invalid")
    }
  }



  useEffect(() => {
    setLocalStorage()
  })
  



  return (
    <>
    
    {!user ? <Login handleLogin = {handleLogin}/> : ''}
    {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null) }
    </>
  )
}

export default App