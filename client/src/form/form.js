import './form.css';
import react from 'react';
import { useState } from 'react';
import axios from 'axios'
function Form(){
const [data, setData] = useState({
    name: "",
    position: "Team-Member",
    insta:"",
    linkedin:"",
    github:""
  });
  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value
    });
  };
  const handleSubmit = async(e) => {
    // e.preventDefault();
    const userData = {
      name: data.name,
      position: data.position,
      insta:data.insta,
      linkedin:data.linkedin,
      github:data.github
    };
    const res = await axios.post("/post_data", userData)
    console.log(res);
    };
    return(
        <div  className="wrapper">
            <form  onSubmit={handleSubmit}>
            <h1>OWASP</h1>
                <label >Name</label>
                    <input type="text" className="name" placeholder='Enter' name='name'  value={data.name} onChange={handleChange} required/>
                    <label >Position</label>
                    <select id="Position" className="Position" name='position'   onChange={handleChange} required>
                        <option value="Team-Member">Team-Member</option>
                        <option value="Core">Core</option>
                        <option value="Exbo">Exbo</option>
                    </select>
                    <label >Instagram</label>
                    <input type = "text" className='link' id='insta' placeholder='URL' name='insta' value={data.insta} onChange={handleChange}></input>
                    <label >LinkeIn</label>
                    <input type = "text" className='link' id='LinkedIn'  placeholder='URL' name='linkedin' value={data.linkedin} onChange={handleChange}></input>
                    <label >GitHub</label>
                    <input type = "text" className='link' id='GitHub'  placeholder='URL' name='github' value={data.github} onChange={handleChange}></input>
                <button type='submit' className='button'>SUBMIT</button>
            </form>
            
        </div>
    )
}
export default Form;








  