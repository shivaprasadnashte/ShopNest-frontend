import React, { useEffect, useState } from 'react'
import {
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
    list,
} from "firebase/storage"
import { storage } from "../firebase"
import {v4} from "uuid"
function Regestration() {
    const [image, setImage] = React.useState(null)
    const [url, setUrl] = React.useState("")
    const [progress, setProgress] = React.useState(0)
    const imagesListRef = ref(storage, "Profilepicture/");
    const [imageUrls, setImageUrls] = useState([]);

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
            
        }
    }
    // console.log(image)
    
        const uploadFile = () => {
            if (image == null) return;
            const imageRef = ref(storage, `Profilepicture/${image.name + v4()}`);
            uploadBytes(imageRef, image).then((snapshot) => {
              getDownloadURL(snapshot.ref).then((url) => {
                setImageUrls((prev) => [...prev, url]);
                
              });
            })
          };
    // console.log(imageUrls)
   const fetchImages = async () => {
     
        listAll(imagesListRef).then((response) => {
            response.items.forEach((item) => {
              getDownloadURL(item).then((url) => {
                setImageUrls((prev) => [...prev, url]);
              });
            });
          });
    }
  

    return (
        <>
            <div className='w-full bg-[url(/images/bg1.jpg)] bg-cover md:h-screen'>
                <div className='w-full flex justify-center text-4xl font-bold'>Shop <span className='text-blue-700'>Nest</span></div>
                <div>

                    <div className='grid md:grid-cols-3 p-5 gap-5 justify-evenly '>

                        <div>
                            <p className='text-lg text-white'>Enter your name</p>
                            <div className='border-2 border-gray-300 p-1 '>
                                <input type="text" placeholder='Name' className='focus:outline-none placeholder:text-gray-300 bg-transparent text-white font-bold w-full h-full' />
                            </div>
                        </div>

                        <div>
                            <p className='text-lg text-white'>Username</p>
                            <div className='border-2 border-gray-300 p-1 '>
                                <input type="text" placeholder='Username' className='focus:outline-none placeholder:text-gray-300 bg-transparent text-white font-bold w-full h-full' />
                            </div>
                        </div>

                        <div>
                            <p className='text-lg text-white'>Create Passward</p>
                            <div className='border-2 border-gray-300 p-1 '>
                                <input type="text" placeholder='Name' className='focus:outline-none placeholder:text-gray-300 bg-transparent text-white font-bold w-full h-full' />
                            </div>
                        </div>

                        <div>
                            <p className='text-lg text-white'>Confirm Passward</p>
                            <div className='border-2 border-gray-300 p-1 '>
                                <input type="text" placeholder='Passward' className='focus:outline-none placeholder:text-gray-300 bg-transparent text-white font-bold w-full h-full' />
                            </div>
                        </div>

                        <div>
                            <p className='text-lg text-white'>Address</p>
                            <div className='border-2 border-gray-300 p-1 '>
                                <input type="text" placeholder='Address' className='focus:outline-none placeholder:text-gray-300 bg-transparent text-white font-bold w-full h-full' />
                            </div>
                        </div>

                        <div>
                            <p className='text-lg text-white'>State</p>
                            <div className='border-2 border-gray-300 p-1 '>
                                <input type="text" placeholder='State' className='focus:outline-none placeholder:text-gray-300 bg-transparent text-white font-bold w-full h-full' />
                            </div>
                        </div>

                        <div>
                            <p className='text-lg text-white'>City</p>
                            <div className='border-2 border-gray-300 p-1 '>
                                <input type="text" placeholder='City' className='focus:outline-none placeholder:text-gray-300 bg-transparent text-white font-bold w-full h-full' />
                            </div>
                        </div>

                        <div>
                            <p className='text-lg text-white'>Pin code</p>
                            <div className='border-2 border-gray-300 p-1 '>
                                <input type="text" placeholder='Pin code' className='focus:outline-none placeholder:text-gray-300 bg-transparent text-white font-bold w-full h-full' />
                            </div>
                        </div>

                        <div>
                            <p className='text-lg text-white'>Mobile Number</p>
                            <div className='border-2 border-gray-300 p-1 '>
                                <input type="text" placeholder='Mobile ' className='focus:outline-none placeholder:text-gray-300 bg-transparent text-white font-bold w-full h-full' />
                            </div>
                        </div>

                        <div onClick={
                            fetchImages
                        }>
                            <p className='text-lg text-white'>Email </p>
                            <div className='border-2 border-gray-300 p-1 '>
                                <input type="text" placeholder='Email' className='focus:outline-none placeholder:text-gray-300 bg-transparent text-white font-bold w-full h-full' />
                            </div>
                        </div>

                        <div>
                            <p className='text-lg text-white'> Profile Photo </p>
                            <div className=' p-1 '>
                                <input type="file" onChange={
                                    handleChange
                                  
                                } />
                            </div>
                        </div>

                    </div>
                </div>
                <div className=' flex w-full justify-center '>
                    <button className='hover:bg-gray-300 p-1 border-2 border-gray-300 rounded-md'
                    onClick={uploadFile}>
                        Register
                    </button>
                </div>
            </div>
          {
            imageUrls.map((url) => {
                return <img src={url} alt="profile" />;
                }
            )
          }
        </>
    )
}

export default Regestration