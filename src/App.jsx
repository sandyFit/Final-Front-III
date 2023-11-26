import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import { ContextProvider } from "./utils/global.context"



function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </ContextProvider>
      
    </div>
  );
}

export default App;
