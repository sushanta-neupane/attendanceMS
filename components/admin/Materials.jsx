"use client"
import React,{useState,useEffect} from 'react'


function Admin() {
    const initial ={
        link: '',
        sector:'',
        sem:'',
        date:'',
    }

    const [formData,setFormData] = useState(initial    )
    
    const handleChange = (e)=>{
        const {name,value} = e.target;
        setFormData((prev)=>({...prev,[name] : value}))
        
        
    }
    
 


    
    const handleSubmit = async (e) =>{
        setFormData(initial);
        e.preventDefault();
        try {
            try {
                
                const responce = await fetch('/api/materials',{
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
        <div className="head">Materials </div>
        <form className='formhandle' onSubmit={handleSubmit}>

            <input className="input" onChange={handleChange} type="text" name="link" value={formData.link} placeholder="Link" />
            <select  value={formData.sem} onChange={handleChange} name="sem" className="choose">
                <option value="1">Sem 1</option>
                <option value="2">Sem 2</option>
                <option value="3">Sem 3</option>
                <option value="4">Sem 4</option>
                <option value="5">Sem 5</option>
                <option value="6">Sem 6</option>
                <option value="7">Sem 7</option>
                <option value="8">Sem 8</option>

            </select>
            <select value={formData.sector} onChange={handleChange} name="sector"  className="choose">
                <option value="pastqn">Past Qn</option>
                <option value="dailynotes">Daily Notes</option>
                <option value="practicals">Practicals</option>
                <option value="ebooks">E-Books</option>
                <option value="syllabus">Syllabus</option>
                <option value="others">Others</option>
            </select>
            <input className="input" onChange={handleChange} type="date" name="date" value={formData.date} placeholder="Date" />
            
            <button className="btn" onChange={handleChange} type="submit">Submit</button>
        </form>
       </div>


    
  )
}

export default Admin