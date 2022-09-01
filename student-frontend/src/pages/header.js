import { SettingsInputAntennaTwoTone } from "@material-ui/icons";
import React,{useState} from "react";
import {Link} from "react-router-dom";
import "./style/headerStyle.css";
function Header(){
    const[active,setActive]=useState([false,false,false,false]);
    const handle0 = () =>{
        setActive([true,false,false,false]);
    }
    const handle1 = () =>{
        setActive([false,true,false,false]);
    }
    const handle2 = () =>{
        setActive([false,false,true,false]);
    }
    const handle3 = () =>{
        setActive([false,false,false,true]);
    }
    return(
        <div>
            <div>
                <h2 className={"header"}>STUDENT DETAILS APPLICATION</h2>
            </div>
            <div className={"headerLink"}>
                <Link to="/" className={"linkElements "+(active[0]?"linkActive":"")} onClick={handle0}>Home</Link>
                <Link to="/student" className={"linkElements "+(active[1]?"linkActive":"")} onClick={handle1}>Student</Link>
                <Link to="/mark" className={"linkElements "+(active[2]?"linkActive":"")} onClick={handle2}>Mark</Link>
                <Link to="/generateRank" className={"linkElements "+(active[3]?"linkActive":"")} onClick={handle3}>Generate Rank</Link>
            </div>
        </div>
    )
}
export default Header;