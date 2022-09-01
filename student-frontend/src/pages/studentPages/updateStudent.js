import {useState} from "react";
import "../style/addStudent.css"
function UpdateStudent(){
    const[name,setName] = useState('');
    const[admissionNo,setAdno] = useState('');
    const[phone,setPhone] = useState('');
    const[dob,setDate] = useState('');
    const[aadharNo,setAadhar] = useState('');
    const[accNo,setAccNo] = useState('');
    const[bloodGrp,setBloodGrp] = useState('');
    const[address,setAddress] = useState('');
    const[msg,setMsg] = useState('');
    const handleClick=(e)=>{
        e.preventDefault();
        const student = {name,admissionNo,dob,aadharNo,address,bloodGrp,accNo,phone};
        fetch("http://localhost:8080/saveStudent",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(student)
        }).then((response)=>response.text()).then((data) =>
            setMsg(data)
        )
        
    }
    const handleClear =(e) =>{
        e.preventDefault();
        setName("");
        setAadhar("");
        setAccNo("");
        setAddress("");
        setAdno("");
        setBloodGrp("");
        setMsg("");
        setPhone("");
        setDate("");
    }
    return(
        <form className={"stuWrapper"}>
            <div class={"addStudentMsg"}>{msg}</div>
            <div className={"stuSubElements"}>
                <div className={"stuElements"}>
                    <input className={"fieldElements"} placeholder="Student Name"  type="text" value={name} onChange={(e) => setName(e.target.value) } />
                </div>
                <div className={"stuElements"}>
                    <input className={"fieldElements"} placeholder="Admission Number" type="text" value={admissionNo} onChange={(e) => setAdno(e.target.value) } />
                </div>
            </div>
            <div className={"stuSubElements"}>
                <div className={"stuElements"}>
                    <input className={"fieldElements"} placeholder="Phone Number" type="text" value={phone} onChange={(e) =>setPhone(e.target.value) } />
                </div>
                <div className={"stuElements"}>
                    <input className={"fieldElements"} placeholder="Date Of Birth" type="date" value={dob} onChange={(e) =>setDate(e.target.value) } />
                </div>
            </div>
            <div className={"stuSubElements"}>
                <div className={"stuElements"}>
                    <input className={"fieldElements"} placeholder="Bank Account Number" type="text" value={accNo} onChange={(e) => setAccNo(e.target.value)} />
                </div>
                <div className={"stuElements"}>
                    <input className={"fieldElements"} placeholder="Aadhar Number" type="text" value={aadharNo} onChange={(e) => setAadhar(e.target.value)} />
                </div>
            </div>
            <div className={"stuSubElements"}>
                <div className={"stuElements"}>
                    <input className={"fieldElements"} placeholder="Blood Group" type="text" value={bloodGrp} onChange={(e) =>setBloodGrp(e.target.value) } />
                </div>
                <div className={"stuElements"}>
                    <textarea className={"fieldElements"} placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)}></textarea>
                </div>
            </div>
            <div className={"stuSubElements"}>
                <input className={"submission"} type="reset" value="Clear" onClick={handleClear}/>
                <input className={"submission"} type="button" value="Add" onClick={handleClick}  />
            </div>
        
        </form>
    )
}
export default UpdateStudent;