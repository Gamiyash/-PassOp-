import Navbar1 from "./componet/Navbar1"
import Manager from "./componet/Manager"
import Footer from "./componet/Footer"
function App() {

  return (
    <>
          
      <Navbar1/>
      <div className="top-0 z-[-2]  w-screen  transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]">
      <Manager/>
      </div>
      <Footer/>
      
    </>
  )
}

export default App
