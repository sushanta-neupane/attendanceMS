"use client"
import React ,{useState,useEffect} from 'react'
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
function Materials() {
  const [materialsData, setMaterialsData] = useState([]);
  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        const response = await fetch(`${apiUrl}/materials`, {
          method: 'GET'
        });

        if (response.ok) {
          const data = await response.json();
          setMaterialsData(data.data);
        } else {
          console.log('Error in fetching materials');
        }
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchMaterials();
  }, []);


  return (
    <div className="main-container materials">
        {/* <div className="selector">
            <div className="select-btn dropdown">   
            <select  className="choose">
                <option value="1">Sem 1</option>
                <option value="2">Sem 2</option>
                <option value="3">Sem 3</option>
                <option value="4">Sem 4</option>
                <option value="5">Sem 5</option>
                <option value="6">Sem 6</option>
                <option value="7">Sem 7</option>
                <option value="8">Sem 8</option>

            </select>
         </div>
            <div className="select-btn fade">Past QN </div>
            <div className="select-btn fade">Daily Notes</div>
            <div className="select-btn fade">Practicals</div>
            <div className="select-btn fade ">E-Books</div>
            <div className="select-btn fade">Syllabus</div>
            <div className="select-btn fade">Others</div>
        </div> */}


        <div className="body">
        <iframe src="https://drive.google.com/embeddedfolderview?id=1QceEYxfhjBrlFRoIYjG2s0ogdDX9G3Ka#grid" className='material-embedded' ></iframe>
        {/* {materialsData.map((item,index)=>(

      <div key={index} className="new-notice">
      <div className="fadetext">{item.date.split('T')[0]} </div>
          <div className="notice-head">  {item.link}</div>
          <div className="notice-sub"> {item.sem}</div>
          <div className="notice-sub"> {item.sector}</div>

      </div>
      ))} */}
        </div>
    </div>
  )
}

export default Materials