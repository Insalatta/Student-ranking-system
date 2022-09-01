import {useState} from "react";
import {Link,Outlet} from "react-router-dom";
import "./style/mark.css";
function Mark(){
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
            <div className="markWrapper">
                <Link to="/mark/addMark" className={"markElements "+(active[0]?"markActive":"")} onClick={handleadd} >Add Mark</Link>
                <Link to="/mark/updateMark" className={"markElements "+(active[1]?"markActive":"")} onClick={handleupdate} >Update Mark</Link>
                <Link to="/mark/viewMark" className={"markElements "+(active[2]?"markActive":"")} onClick={handleview} >View Mark</Link>
            </div>
            <Outlet/>
        </div>
    )
}
export default Mark;