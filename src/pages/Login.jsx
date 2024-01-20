import React from 'react'
import Cover from '../../public/images/cover.jpeg'
function Login() {
    const [username, setUsername] = React.useState('')
    const [password, setPassward] = React.useState('')
    return (
        <>
            <div className=' h-screen bg-[url(/images/cover.jpeg)]'>
               
                    <div className=' w-full h-screen  flex justify-center items-center'>
                        <div className='   flex flex-col gap-8 px-5 py-12 shadow-2xl'>

                            <div className=' w-full flex justify-center'>
                                <h1 className=' flex  text-4xl text-gray-600 '>
                                   <p className=' text-white font-bold'> Shop <span className=' text-blue-800'>Nest</span></p>
                                </h1>
                            </div>
                            <div className=' w-full flex flex-col items-center gap-4 justify-center p-5'>
                                <div className=' flex w-full flex-col gap-5'>
                                    <div className=' w-full border-b-2  border-black'>
                                        <input type="text"
                                            placeholder='username'
                                            className=' focus:outline-none px-4 py-1 bg-transparent text-black placeholder:text-white w-full'
                                            value={username}
                                            onChange={(e) => {
                                                setUsername(e.target.value)
                                            }} />
                                    </div>

                                    <div className=' border-b-2 border-black w-full '>
                                        <input type="password"
                                            placeholder='passward'
                                            className=' focus:outline-none px-4 py-1 bg-transparent text-black placeholder:text-white w-full'
                                            value={password}
                                            onChange={(e) => {
                                                setPassward(e.target.value)
                                            }} />
                                    </div>
                                </div>

                                <div className=' w-full flex flex-col gap-3 justify-center items-center'>
                                    <div className=' bg-blue-700 text-white w-full text-center  py-1 shadow-lg'>
                                        <button >LOGIN</button>
                                    </div>
                                    <div className=' text-gray-600'>
                                        <p>OR</p>
                                    </div>
                                    <div className=' bg-white  hover:bg-blue-700 hover:text-white w-full text-center  py-1 border-2 border-gray-200 shadow-lg'>
                                        <button onClick={() => {
                                            navigate('/signup')
                                        }} >
                                            CREAT AN ACCOUNT
                                        </button>
                                    </div>
                             

                            </div>



                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Login