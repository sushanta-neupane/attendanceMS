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


        <div className="body">
        <iframe src="https://drive.google.com/embeddedfolderview?id=1QceEYxfhjBrlFRoIYjG2s0ogdDX9G3Ka#grid" className='material-embedded' ></iframe>
 
        </div>
    </div>
  )
}

export default Materials