import { Route, Routes } from 'react-router'
import './App.css'
import { Navbar } from './components/Navbar'
import { TopBanner } from './components/TopBanner'
import { Product } from "./components/Product"
import { Pricing } from './components/Pricing'
import { Resources } from './components/Resources'
import { Customers } from './components/Customers'
// import {SignIn} from './components/SignIn'
// import {SignUp} from './components/SignUp'
import asset1 from "./homePageAssets/asset\ 1.jpeg"
import asset2 from "./homePageAssets/asset\ 2.png"
import asset3 from "./homePageAssets/asset\ 3.png"
import asset4 from "./homePageAssets/asset\ 4.png"
import asset5 from "./homePageAssets/asset\ 5.png"
import asset6 from "./homePageAssets/asset\ 6.png"
import asset8 from "./homePageAssets/asset\ 8.png"
import asset9 from "./homePageAssets/asset\ 9.svg"
import asset10 from "./homePageAssets/asset\ 10.svg"
import asset11 from "./homePageAssets/asset\ 11.svg"
import asset12 from "./homePageAssets/asset\ 12.svg"
import asset13 from "./homePageAssets/asset\ 13.svg"
import asset14 from "./homePageAssets/asset\ 14.svg"
import asset15 from "./homePageAssets/asset\ 15.png"
import asset16 from "./homePageAssets/asset\ 16.png"
import asset17 from "./homePageAssets/asset\ 17.png"
import asset18 from "./homePageAssets/asset\ 18.png"
import asset19 from "./homePageAssets/asset\ 19.png"
import asset20 from "./homePageAssets/asset\ 20.png"
import asset21 from "./homePageAssets/asset\ 21.png"
import asset22 from "./homePageAssets/asset\ 22.png"
import asset23 from "./homePageAssets/asset\ 23.png"


function App() {
  return (
    <>
      {/* Top Banner Section  */}
      <div className="topBanner-box">
        <TopBanner />
      </div>

      <Routes>
        <Route element={<Navbar />}>
          <Route path='/product' element={<Product />} />
          <Route path='/customers' element={<Customers />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/resources' element={<Resources />} />
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

          <div className="right-header">
            <img src={asset1} alt="" />
          </div>
        </div>
      </header>

      {/* Companies Section  */}
      <section id='companies-section'>
        <div className="container companies-section">
          <div className="small-bold-text companies-heading">The world’s best companies rely on UsabilityHub to make better design decisions.</div>

          <div className="companies-logos flex">
            <div className="logos flex">
              <img className='logo' src={asset2} alt="" />
              <img className='logo' src={asset3} alt="" />
              <img className='logo' src={asset4} alt="" />
              <img className='logo' src={asset5} alt="" />
              <img className='logo' src={asset6} alt="" />
              <img className='logo' src={asset8} alt="" />
            </div>
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
            <div className="features-card flex">
              <img src={asset9} alt="" />
              <h3>Card Sorting</h3>
              <p>Discover how people group and label information.</p>
              <a className='secondary-btn' href="#">Learn More <i className="fa-solid fa-arrow-right"></i></a>
            </div>

            <div className="features-card flex">
              <img src={asset10} alt="" />
              <h3>Prototype Text</h3>
              <p>Discover how people group and label information.</p>
              <a className='secondary-btn' href="#">Learn More <i className="fa-solid fa-arrow-right"></i></a>
            </div>

            <div className="features-card flex">
              <img src={asset11} alt="" />
              <h3>First Click Tests</h3>
              <p>Discover how people group and label information.</p>
              <a className='secondary-btn' href="#">Learn More <i className="fa-solid fa-arrow-right"></i></a>
            </div>

            <div className="features-card flex">
              <img src={asset12} alt="" />
              <h3>Design Surveys</h3>
              <p>Discover how people group and label information.</p>
              <a className='secondary-btn' href="#">Learn More <i className="fa-solid fa-arrow-right"></i></a>
            </div>

            <div className="features-card flex">
              <img src={asset13} alt="" />
              <h3>Preference Tests</h3>
              <p>Discover how people group and label information.</p>
              <a className='secondary-btn' href="#">Learn More <i className="fa-solid fa-arrow-right"></i></a>
            </div>

            <div className="features-card flex">
              <img src={asset14} alt="" />
              <h3>Five second tests</h3>
              <p>Discover how people group and label information.</p>
              <a className='secondary-btn' href="#">Learn More <i className="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </section>

      <section id='big-festures'>
        <div className="container flex big-features-container">
          <div className='features-img'>
            <img src={asset15} alt="features-img" />
          </div>

          <div className="features-description">
            <div className="features-descr flex">
              <h4>Effortless validation for</h4>
              <h3>Design Professionals</h3>
              <p>Test interfaces, interaction flows, iconography and more, to help you create intuitive and delightful experiences for your users.</p>
            </div>

            <div className="features-descr flex">
              <div className="feature-descr-img">
                <img src={asset16} alt="" />
              </div>

              <div className="guoted-section">
                <p>The navigation test is god's gift to UI designers, it probably has the best power-to-simplicity ratio of any software, ever.</p>
              </div>

              <div className="human-section flex">
                <div className="human-img">
                  <img src={asset17} alt="human-img" />
                </div>

                <div className="human-details">
                  <h4>Nick Franklin</h4>
                  <h4>Chief Executive Officer</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container flex big-features-container middle-big-features-container">
          <div className='features-img'>
            <img src={asset20} alt="features-img" />
          </div>

          <div className="features-description">
            <div className="features-descr flex">
              <h4>Optimisation for</h4>
              <h3>Marketers</h3>
              <p>Fine-tune landing pages, messaging, and creative, helping you optimise conversion rates on marketing campaigns and product launches.</p>
            </div>

            <div className="features-descr flex">
              <div className="feature-descr-img">
                <img src={asset18} alt="" />
              </div>

              <div className="guoted-section">
                <p>We use UsabilityHub tests to help us make decisions for various projects. From web and mobile design to marketing activities.</p>
              </div>

              <div className="human-section flex">
                <div className="human-img">
                  <img src={asset19} alt="human-img" />
                </div>

                <div className="human-details">
                  <h4>Rick van de Ven</h4>
                  <h4>Digital Marketing Analyst</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container flex big-features-container">
          <div className='features-img'>
            <img src={asset21} alt="features-img" />
          </div>

          <div className="features-description">
            <div className="features-descr flex">
              <h4>Easier decision making for</h4>
              <h3>Product Managers</h3>
              <p>Ensure you’re delivering the right features to the right customers by validating product concepts with your target audience.</p>
            </div>

            <div className="features-descr flex">
              <div className="feature-descr-img">
                <img src={asset22} alt="" />
              </div>

              <div className="guoted-section">
                <p>Adopting UsabilityHub got us into the habit of asking our users questions before locking in decisions.</p>
              </div>

              <div className="human-section flex">
                <div className="human-img">
                  <img src={asset23} alt="human-img" />
                </div>

                <div className="human-details">
                  <h4>Ron Diorio</h4>
                  <h4>VP Innovation & New Products</h4>
                </div>
              </div>
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