import Header from "./components/Header/header";
import './App.css'
import SideBar from "./components/SideBar/SideBar";
function App() {
  return (
    <div className="App">
     <Header/>
     <div className="app__body">
       <SideBar/>
     </div>
    </div>
  );
}

export default App;
