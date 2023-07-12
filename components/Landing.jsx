import Link from "next/link"

const Landing = () => {
  return (
    <>
    <div className="landing main-container">
      <div>
          <div className="main-text">
            Master Your <span className="m-w">Semester</span> 
          </div>
          <div className="sub-text">
          Simplify your task  <span className="m-w">&</span>  Elevate your semester for academic success
          </div>
          <div>
          <Link href="./overview">
          
          <button className="btn">Overview</button>
          </Link>  
          <Link href="./chat">
            <button className="btn fade">Connect</button>
          </Link>
          </div>

   
      </div>
    </div>
    
  
    </>
  )
}

export default Landing