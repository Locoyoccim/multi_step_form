import "/src/styles/App.css";
import Top from "./Top";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <div className="main_container">
        <Top></Top>
        <Outlet/>
      </div>
    </>
  );
}

export default App;
