"use client"
import React,{useState,useEffect} from 'react'


function Admin() {
    const initial =       {
        id : '',
        name:'',
        roll:'',
        sem:''
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
                
                const responce = await fetch('/api/user',{
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
        <div className="head">User</div>
        <form onSubmit={handleSubmit}>

            <input className="input" onChange={handleChange} type="text" name="id" value={formData.id} placeholder="Id" />
            <input className="input" onChange={handleChange} type="text" name="name" value={formData.name} placeholder="Name" />
            <input className="input" onChange={handleChange} type="number" name="roll" value={formData.roll} placeholder="Roll" />
            <input className="input" onChange={handleChange} type="number" name="sem" value={formData.sem} placeholder="Sem" />
            <button className="btn" onChange={handleChange} type="submit">Submit</button>
        </form>
       </div>


    
  )
}

export default Admin