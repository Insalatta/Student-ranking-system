import {useState} from "react";
import "../style/addMark.css";
function AddMark(){
    const[sno,setSno] = useState('');
    const[tamil,setTamil] = useState('');
    const[english,setEnglish] = useState('');
    const[maths,setMaths] = useState('');
    const[science,setScience] = useState('');
    const[social,setSocial] = useState('');
    const[type,setExamType] = useState('M0');
    const[msg,setMsg] = useState('');
    const mId = type+sno;
    const values = {mId,tamil,english,maths,science,social}
    const handleClick=(e)=>{
        e.preventDefault();
        fetch("http://localhost:8080/savemark/"+sno,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(values)
        }).then((response)=>response.text()).then((data)=>setMsg(data));
    }
    return(
        <div className={"addMarkWrapper"}>
            <div className="msgdiv">{msg}</div>
            <select value={type} onChange={(e)=>setExamType(e.target.value)}>
                <option value="M0">Mid Term I</option>
                <option value="M1">Quarterly</option>
                <option value="M2">Mid Term II</option>
                <option value="M3">Half Yearly</option>
                <option value="M4">Mid Term III</option>
                <option value="M5">Annual</option>
            </select>
            <div className="addMarkSubWrapper">
                <input className={"addMarkElements"} type="text" value={sno} onChange={(e)=>setSno(e.target.value)} placeholder="Serial Number" />
                <input className={"addMarkElements"} type="text" value={tamil} onChange={(e)=>setTamil(e.target.value)} placeholder="Tamil" />
            </div>
            <div className="addMarkSubWrapper">
                <input className={"addMarkElements"} type="text" value={english} onChange={(e)=>setEnglish(e.target.value)} placeholder="English" />
                <input className={"addMarkElements"} type="text" value={maths} onChange={(e)=>setMaths(e.target.value)} placeholder="Maths" />
            </div>
            <div className="addMarkSubWrapper">
                <input className={"addMarkElements"} type="text" value={science} onChange={(e)=>setScience(e.target.value)} placeholder="Science" />
                <input className={"addMarkElements"} type="text" value={social} onChange={(e)=>setSocial(e.target.value)} placeholder="Social" />
            </div>
            <div className={"markElementsWrapper"}>
                <input className={"submitBtn"} type="button"  value="Add" onClick={handleClick}/>
            </div>
            
        </div>
    )
}
export default AddMark;