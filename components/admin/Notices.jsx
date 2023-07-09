"use client"
import React,{useState,useEffect} from 'react'


function Admin() {
    const initial =         {
        head: '',
        body: '',
        link : '',
        sector:'',
        date:'',
        
    }

    const [formData,setFormData] = useState(initial)
    
    const handleChange = (e)=>{
        const {name,value} = e.target;
        setFormData((prev)=>({...prev,[name] : value}))
        
        
    }
    
 


    
    const handleSubmit = async (e) =>{
        setFormData(initial);

        e.preventDefault();
        try {
            try {
                
                const responce = await fetch('/api/notices',{
                    method : 'POST',
                    headers :{
                        'Content-Type' : 'application/json',
                    },
                    body : JSON.stringify(formData)
                })

                
                if (responce.ok)
                {
                    const data = await responce.json();
                    console.log(data);
                    console.log("Successfully data is updated:::")
                }
                else{
                    console.log("Error in updating")
                }
            } catch (error) {
                console.log("Form handle error :",error)
            }
            
        } catch (error) {
            console.error("error:" , error)
        }

    
    }


  return (
       <div className="userform">
        <div className="head">Notices </div>
        <form onSubmit={handleSubmit}>

            <textarea className="input" onChange={handleChange}  name="head" value={formData.head} placeholder="Head" />
            <textarea className="input" onChange={handleChange}  name="body" value={formData.body} placeholder="Body" />
            <input className="input" onChange={handleChange} type="text" name="link" value={formData.link} placeholder="Link" />
            <input className="input" onChange={handleChange} type="text" name="sector" value={formData.sector} placeholder="Sector" />
            <input className="input" onChange={handleChange} type="date" name="date" value={formData.date} placeholder="Date" />
            
            <button className="btn" onChange={handleChange} type="submit">Submit</button>
        </form>
       </div>


    
  )
}

export default Admin