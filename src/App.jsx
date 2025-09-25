import './App.css'
import { TopBanner } from './components/TopBanner'
import { Routes, Route } from "react-router"
import { Navbar } from './components/Navbar'
import Products from './components/ProductsPage'
import Customers from './components/CustomersPage'
import Pricing from './components/PricingPage'
import Resources from './components/ResourcesPage'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

function App() {
  return (
    <>
      <div className="topBanner-box">
        <TopBanner />
      </div>

      <Routes>
          <Route element={<Navbar/>}>
            <Route path='/products' element={<Products />} />
            <Route path='/customers' element={<Customers />} />
            <Route path='/pricing' element={<Pricing />} />
            <Route path='/resources' element={<Resources />} />
            <Route path='/sign in' element={<SignIn />} />
            <Route path='/sign up' element={<SignUp />} />
          </Route>
        </Routes>
    </>
  )
}

export default App