import Header from "./pages/header";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import AddMark from "./pages/markPages/addMark";
import AddStudent from "./pages/studentPages/addStudent";
import ViewStudent from "./pages/studentPages/viewStudent";
import ViewMark from "./pages/markPages/viewMark";
import GenerateRank from "./pages/generateRank";
import UpdateMark from "./pages/markPages/updateMark";
import UpdateStudent from "./pages/studentPages/updateStudent"; 
import Home from "./pages/home";
import Student from "./pages/student"
import Mark from "./pages/mark";


function App(){
  return (
    
      
    <BrowserRouter>
    <Header />
    <Routes >
      <Route path="/" element={<Home />} />
      <Route path="/student" element={<Student />} >
          <Route path="/student/addStudent" element={<AddStudent/>} />
          <Route path="/student/updateStudent" element={<UpdateStudent/>} />
          <Route path="/student/viewStudent" element={<ViewStudent/>} />
      </Route>
      <Route path="/mark" element={<Mark />} >
          <Route path="/mark/addMark" element={<AddMark/>} />
          <Route path="/mark/updateMark" element={<UpdateMark/>} />
          <Route path="/mark/viewMark" element={<ViewMark/>} />
      </Route>
      <Route path="/generateRank" element={<GenerateRank />} />
    </Routes>
    </BrowserRouter>
  );
}
export default App;