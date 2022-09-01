import {useState} from "react";
import {Link,Outlet} from "react-router-dom";
import "./style/student.css";
function Student(){
    const[active,setActive] = useState([false,false,false]);
    const handleadd=()=>{
        setActive([true,false,false]);
    }
    const handleupdate=()=>{
        setActive([false,true,false]);
    }
    const handleview=()=>{
        setActive([false,false,true]);
    }
    return(
        <div>
            <div className="studentWrapper">
                <Link to="/student/addStudent" className={"studentElements "+(active[0]?"studentActive":"")} onClick={handleadd} >Add Student</Link>
                <Link to="/student/updateStudent" className={"studentElements "+(active[1]?"studentActive":"")} onClick={handleupdate} >Update Student</Link>
                <Link to="/student/viewStudent" className={"studentElements "+(active[2]?"studentActive":"")} onClick={handleview} >View Student</Link>
            </div>
            <Outlet/>
        </div>
    )
}
export default Student;