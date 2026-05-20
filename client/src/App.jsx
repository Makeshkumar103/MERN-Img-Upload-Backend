// import reactLogo from './assets/react.svg'

import './App.css'
import { useState } from 'react';
// import { image } from '../../server/cloudinary';
import axios from "axios"

function App() {

  const [file,setFile]= useState(null)

  // const handleFileUpload = async (e) => {
  //   const file = e.target.files[0];

  //   if(!file) return
  //   setLoading(true)

  //   const data = new FormData()
  //   data.append("file", file)
  //   data.append("upload_preset", "firstproject" )
  //   data.append("cloud_name","dxyhx9bt9")
  //   console.log(file);

  //   const res = await fetch("https://api.cloudinary.com/v1_1/dxyhx9bt9/image/upload",{
  //     method:"POST",
  //     body: data
  //   })

  //   const uploadedImageURL = await res.json()
  //   console.log(uploadedImageURL)
  //   console.log(uploadedImageURL.url)
  //   setLoading(false)
    
  // };

  const handleUpload = async () => {

      // setFile(e.target.files[0]);

      if (!file) return;

      const formData = new FormData();      
      formData.append("image", file);       // The key 'image' must match upload.single('image') in backend


      try {
        const res = await axios.post("http://localhost:5000/upload",formData,
        {headers: { 'Content-Type': 'multipart/form-data' }}
        );      
        console.log("Upload success: ",res.data.filePath);   
      } catch (error) {      
        console.log("Upload Error",error);      
      }
  };

  return (
    <>
        <div className='app'>
          <input type="file" 
          className='file-input'
          onChange={(e) => setFile(e.target.files[0])}
        />


        <button
          type="button"
          className="counter"
          onClick={handleUpload}
        >
          Upload to backend
        </button>
        </div>
        

      
    </>
  )
}

export default App
