import React , {useState} from 'react'


function Header(props) {

  // const data = props.data.firstName
  // console.log(data);
  // // const [Username, setUsername] = useState('')

  // // if(!data){
  // //   setUsername('Admin')
  // // }else{
  // //   setUsername(data.firstName)
  // // }

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser' , '')
    props.changeUser('')
  }

  return (
    // <div className='flex items-end justify-between '>
    //     <h1 className='text-2xl font-medium ml-10 '>Hello <br /> <span className='text-3xl font-semibold'>Username 👋</span></h1>
    //     <button onClick={logOutUser} className='bg-red-600 text-base mr-10 font-medium text-white px-5 py-2 rounded-sm mb-2'>Log Out</button>
    // </div>

    <div className="flex items-center justify-between bg-gradient-to-r from-gray-800 to-black p-6 rounded-xl shadow-xl mb-6">
      <h1 className="text-2xl font-medium text-white ml-10">
        Hello <br />
        <span className="text-3xl font-semibold text-yellow-300">user 👋</span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-600 text-base font-medium text-white px-6 py-3 rounded-md shadow-lg hover:bg-red-700 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 mr-10 mb-2"
      >
        Log Out
      </button>
    </div>



  )
}

export default Header