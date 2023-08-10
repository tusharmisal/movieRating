import { useState } from "react"
import jsonFile from "../dataBase.json" 


function Header(){
	
   const [email,setEmail] = useState("")
   const [passw,setPassw] = useState("")

   const submitThis=()=>{
	const info={email:email,passw:passw}; 
//setDataInput([info]);
console.log(jsonFile)

}
    return (
        <div>
        <form action="" onSubmit={submitThis}> 
				<div> 
					<label htmlFor="email">Email</label>
					<input type="text" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/> 
				</div> 
				<div> 
					<label htmlFor="passw">Password</label>
					<input type="text" name="passw" id="passw"  value={passw} onChange={(e)=>setPassw(e.target.value)}/> 
				</div>  
				<button type="submit">Login</button>
			</form>
            </div>
    )

 
}

Header.defaultProps={
    text:'Feedback from props',
    
  }
export default Header