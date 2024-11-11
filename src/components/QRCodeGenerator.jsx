import React, { useState } from 'react'

export const QRCodeGenerator = () => {
  const [img , newImg] = useState("")
  const [loading , setloading] = useState(false)
  const[qrdata,setQrData] = useState("")
  const [qrSize,setQrSize ] = useState("")
  async function Generateqr(){
      setloading(true)
      try{
         const url =`https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrdata)}`;
          newImg(url)
      } catch(e){
          console.error("Error in generating QR", e)
      }finally{
        setloading(false) 
      }
  }

  function Downloadqr(){
    fetch(img).then((response) => response.blob()).then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "QRcode.png"
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link)
    });
  }

  
  return (
    <div className='app-container'>
      
        <h1>QR CODE GENERATOR</h1>
        {loading && <p>Please Wait...🔄</p>}
        {img && <img src={img}  className='image'/>}
        <div>
        <label htmlFor='dataInput' className='link'>
        Link For QR Code:</label>
        <input type='text' id='dataInput' 
        placeholder='Enter Link For QR Code'value={qrdata}  onChange={(e) => setQrData(e.target.value)} /> 
        <label htmlFor='data' className='link'>
            Enter QR Code Size (eg:150):</label> 
            <input  type='text' id = "data" 
            placeholder='Enter QR Size' value={qrSize} onChange={(e) => setQrSize (e.target.value)}/>
        <button className='GenerateQR' disabled ={loading} onClick={Generateqr} >Generate QR Code</button>
        <button className='DownloadQR' onClick={Downloadqr} >Download QR Code</button>  
    </div>
    <p className='footer'> 
      Designed By <a href='https://www.linkedin.com/in/praveen-sm-742209212/'>Praveen SM</a>
    </p>
  </div>
    
  )
};
