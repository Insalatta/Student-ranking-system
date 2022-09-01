import {useState} from "react";
import "./style/addMark.css";
function GenerateRank(){
    const[mId,setMid] = useState('M0');
    const handleClick = (e) =>{
        e.preventDefault();
        var tb = document.getElementById("myTable");
        while(tb.rows.length>1){
            tb.deleteRow(1);
        }
        fetch("http://localhost:8080/generateRank/"+mId,{
            method:"GET",
            header:{"Content-Type":"application/json"}
        }).then((response) => response.json()).then((data)=> {
            var table = document.getElementById("myTable");
            var pos = 1;
            for(var key in data){
                var cell= 0;
                var row = table.insertRow(pos);
                row.className="tableRows";
                row.insertCell(cell++).innerHTML=data[key]['grade']==null?'-':data[key]['grade'];
                row.insertCell(cell++).innerHTML=data[key]['student'].sno;
                row.insertCell(cell++).innerHTML=data[key]['total']==null?'-':data[key]['total'];
                var nameCell = row.insertCell(cell++);
                nameCell.innerHTML=data[key]['student'].name;
                nameCell.className="tableName";
                row.insertCell(cell++).innerHTML=data[key]['tamil']==null?'A':data[key]['tamil'];
                row.insertCell(cell++).innerHTML=data[key]['english']==null?'A':data[key]['english'];
                row.insertCell(cell++).innerHTML=data[key]['maths']==null?'A':data[key]['maths'];
                row.insertCell(cell++).innerHTML=data[key]['science']==null?'A':data[key]['science'];
                row.insertCell(cell++).innerHTML=data[key]['social']==null?'A':data[key]['social'];
                row.insertCell(cell++).innerHTML=data[key]['failed']==null?'-':data[key]['failed'];
                pos++;
            }
           
        });
    }
    return(
        <div className={"addMarkWrapper"}>
            <div className="rankWrapper">
                <select className="rankSelect" value={mId} onChange={(e)=>setMid(e.target.value)}>
                    <option value="M0" >Mid Term I</option>
                    <option value="M1" >Quarterly</option>
                    <option value="M2" >Mid Term II</option>
                    <option value="M3" >Half Yearly</option>
                    <option value="M4" >Mid Term III</option>
                    <option value="M5" >Annual</option>
                </select>
                <input className="generate" type="button" value="Generate" onClick={handleClick} />
            </div>
            
            <table id="myTable" className="tableData">
                <tr className="tableHeaderWrapper">
                    <td className="tableHead">Rank</td>
                    <td className="tableHead">No</td>
                    <td className="tableHead">Total</td>
                    <td className="tableHead">Name</td>
                    <td className="tableHead">Tamil</td>
                    <td className="tableHead">English</td>
                    <td className="tableHead">Maths</td>
                    <td className="tableHead">Science</td>
                    <td className="tableHead">Social</td>
                    <td className="tableHead">Failed</td>  
                </tr>
            </table>
        </div>
    )
}
export default GenerateRank;