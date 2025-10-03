import {  Route, Routes } from 'react-router'
import './App.css'
import { Navbar } from './components/Navbar'
import { TopBanner } from './components/TopBanner'
import {Product} from "./components/Product"
import {Pricing} from './components/Pricing'
import {Resources} from './components/Resources'
import {Customers} from './components/Customers'
// import {SignIn} from './components/SignIn'
// import {SignUp} from './components/SignUp'

function App() {
  return (
    <>
      {/* Top Banner Section  */}
      <div className="topBanner-box">
        <TopBanner />
      </div>

      <Routes>
        <Route element={<Navbar/>}>
          <Route path='/product' element={<Product/>} />
          <Route path='/customers' element={<Customers/>} />
          <Route path='/pricing' element={<Pricing/>} />
          <Route path='/resources' element={<Resources/>} />
          <Route path='/sign in' element="#" />
          <Route path='/sign up' element="#" />
        </Route>
      </Routes>

      {/* Header section  */}
      <header>
        <div className="container header-section flex">
          <div className="left-header">
            <h1>Design confidently.</h1>
            <p>UsabilityHub is a remote user research platform that takes the guesswork out of design decisions by validating them with real users.</p>

            <a className='primary-btn get-started-btn'>Getting Started</a>
          </div>

          <div className="right-header"></div>
        </div>
      </header>

      {/* Companies Section  */}
      <section id='companies-section'>
        <div className="container companies-section">
          <div className="small-bold-text companies-heading">The world’s best companies rely on UsabilityHub to make better design decisions.</div>

          <div className="companies-logos flex">
            <div className="company-logo1 logos"></div>
            <div className="company-logo2 logos"></div>
            <div className="company-logo3 logos"></div>
            <div className="company-logo4 logos"></div>
            <div className="company-logo5 logos"></div>
            <div className="company-logo6 logos"></div>
            <div className="company-logo7 logos"></div>
          </div>
        </div>
      </section>

      <section id='features-section'>
        <div className="container">
          <div className="features-heading">
            <h2>Your user research Swiss Army knife</h2>
            <a className='secondary-btn'>See All Features <i className="fa-solid fa-arrow-right"></i></a>
          </div>

          <div className="features-area flex">
            <div className="features-card">
              <div className="features-card-img1"></div>
              <h3>Card Sorting</h3>
              <p>Discover how people group and label information.</p>
              <a href="#"></a>
            </div>

            <div className="features-card">
              <div className="features-card-img2"></div>
              <h3>Card Sorting</h3>
              <p>Discover how people group and label information.</p>
              <a href="#"></a>
            </div>

            <div className="features-card">
              <div className="features-card-img3"></div>
              <h3>Card Sorting</h3>
              <p>Discover how people group and label information.</p>
              <a href="#"></a>
            </div>

            <div className="features-card">
              <div className="features-card-img4"></div>
              <h3>Card Sorting</h3>
              <p>Discover how people group and label information.</p>
              <a href="#"></a>
            </div>

            <div className="features-card">
              <div className="features-card-img5"></div>
              <h3>Card Sorting</h3>
              <p>Discover how people group and label information.</p>
              <a href="#"></a>
            </div>

            <div className="features-card">
              <div className="features-card-img6"></div>
              <h3>Card Sorting</h3>
              <p>Discover how people group and label information.</p>
              <a href="#"></a>
            </div>
          </div>
        </div>
      </section>


      <section>
        <div className="buttom-spacer"></div>
      </section>
    </>
  )
}

export default App