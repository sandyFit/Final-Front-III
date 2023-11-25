import Form from "./components/Form";
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import { ContextProvider } from "./utils/global.context"
import { Outlet } from "react-router-dom";




function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Navbar />
        <Outlet />
        <Footer />
        <Form />
      </ContextProvider>
      
    </div>
  );
}

export default App;
