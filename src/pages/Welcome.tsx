
import { useNavigate } from 'react-router-dom'
function Welcome() {
  const route =  useNavigate()
  return (
    <div className='bg-white p-0 flex justify-center flex-col items-center m-0 h-[100vh] w-[100vw]'>
     <div className='bg-purple-100 h-[100vh] w-[90vw] flex flex-col justify-end items-start px-[16px] '>
      <h4 className='text-xl font-bold pb-[10px]'>Welcome to PopX</h4>
      <p className='w-[60vw] pb-[30px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum repudiandae autem iure.</p>
      <button onClick={()=>route("/register")} className='capitalize w-full mb-[15px] px-2 text-md  font-md py-2 bg-violet-600 rounded-sm hover:bg-indigo-600  text-white '> create Account </button>
      <button onClick={()=>route("/login")} className='capitalize w-full mb-[20px] px-2 text-md  font-md py-2 bg-purple-500 rounded-sm hover:bg-indigo-600  text-black'>already registered? Login</button>
     </div>
    </div>
  )
}

export default Welcome
