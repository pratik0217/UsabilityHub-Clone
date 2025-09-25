import { Link, Route, Routes } from 'react-router'
import './App.css'
import { Navbar } from './components/Navbar'
import { TopBanner } from './components/TopBanner'

function App() {
  return (
    <>
      {/* Top Banner Section  */}
      <div className="topBanner-box">
        <TopBanner />
      </div>

      {/* Navbar Section  */}
      <Routes>
        <Route element={<Navbar />}>
          <Route path='/product' element="#"/>
          <Route path='/customers' element="#"/>
          <Route path='/pricing' element="#"/>
          <Route path='/resources' element="#"/>
          <Route path='/sign in' element="#"/>
          <Route path='/sign up' element="#"/>
        </Route>
      </Routes>

      {/* Header section  */}
      <header>
        <div className="container header-section flex">
          <div className="left-header">
            <h1>Design confidently.</h1>
            <p>UsabilityHub is a remote user research platform that takes the guesswork out of design decisions by validating them with real users.</p>

            <Link className='primary-btn get-started-btn'>Getting Started</Link>
          </div>

          <div className="right-header"></div>
        </div>
      </header>

      {/* Companies Section  */}
      <div className="container">
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
    </>
  )
}

export default App