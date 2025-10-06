import { Route, Routes, Navigate } from 'react-router'
import './App.css'
import './media-queries.css'
import { TopBanner } from './components/TopBanner'
import Navbar from './components/Navbar'
import Product from './components/Product'
import Customers from './components/Customers'
import Pricing from './components/Pricing'
import Resources from './components/Resources'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import websiteLogo from "/src/homePageAssets/asset\ 0.png"
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
import asset40 from "./homePageAssets/asset\ 40.png"
import PageNotFound from './components/PageNotFound'


function App() {
  const alertMessage = alert("Does't work it clicked Click.")
  return (
    <>
      {/* Top Banner Section  */}
      <div className="topBanner-box">
        <TopBanner />
      </div>

      <Routes>
        <Route path='/' element={<Navbar alertPop={alertMessage} logo={websiteLogo} />}>
          <Route path='/product' element={<Product />} />
          <Route path='/customers' element={<Customers />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/resources' element={<Resources />} />
          <Route path='/sign in' element={<SignIn />} />
          <Route path='/sign up' element={<SignUp />} />
          <Route path='/*' element={<PageNotFound/>} />
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
            <img src={asset1} alt="asset1" />
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

        <div className="container flex big-features-container reverse-container">
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

      <section id='examples-section'>
        <div className="container examples-section-container">
          <div className="features-heading example-heading-container">
            <h2>One platform, endless possibilities</h2>
            <a className='secondary-btn'>See More examples <i className="fa-solid fa-arrow-right"></i></a>
          </div>

          <div className="examples-area flex">
            <a href="#" className='example-card example-card-img1'>
              <h4 className='example-card-text'>Can users complete task in my software interface?</h4>
            </a>

            <a href="#" className='example-card'>
              <h4 className='example-card-text'>Can users find important pages on my website?</h4>
            </a>

            <a href="#" className='example-card'>
              <h4 className='example-card-text'>is my website's intended audience clear?</h4>
            </a>

            <a href="#" className='example-card'>
              <h4 className='example-card-text'>Do vistitors understand what a page is about?</h4>
            </a>
          </div>
        </div>
      </section>

      <section id='cta-section'>
        <div className="container flex cta-section-container reverse-container">
          <div className="cta-img">
            <img src={asset40} alt="cta" />
          </div>

          <div className="cta-description flex">
            <h2>No participants?</h2>
            <h2>No problem.</h2>
            <p>Our integrated panel allows you to quickly and affordably recruit research participants that precisely match your target audience.</p>

            <h3>Our panel includes:</h3>

            <div className="cta-descr-lists flex">
              <div className="cta-descr">
                <li>530k+ panel participants</li>
                <li>35+ demographic options</li>
                <li>Free demographic testing</li>
              </div>

              <div className="cta-descr">
                <li>Coverage in 100+ countries</li>
                <li>Average 2hr turn around time</li>
                <li>Response quality guarantee</li>
              </div>
            </div>

            <div className="cta-buttom-section flex">
              <a href="#" className='primary-btn'>Try the panel calculator</a>
              <p>Or</p>
              <a href="#" className='secondary-white-btn'>Learn more</a>
            </div>
          </div>
        </div>
      </section>

      <section id='cta-panel'>
        <div className="container">
          <div className="cta-panel-container flex">
            <h3>Start testing today</h3>
            <p>Take the guesswork out of design decisions</p>
            <a className='primary-btn'>Get Started</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container flex footer-container">
          <img className='websiteLogo' src={websiteLogo} alt="website logo" />

          <div className="footer-heading-list flex">
            <h3>Product</h3>

            <a href="#">Overview</a>
            <a href="#">Pricing</a>
            <a href="#">Research panel</a>
            <a href="#">Customers</a>
            <a href="#">Status page</a>
            <a href="#">Status page</a>
            <a href="#">Sign up</a>
            <a href="#">Book a demo</a>
          </div>

          <div className="footer-heading-list flex">
            <h3>Card sorting</h3>

            <a href="#">Prototype testing</a>
            <a href="#">First click tests</a>
            <a href="#">Preference tests</a>
            <a href="#">Five second tests</a>
            <a href="#">Design surveys</a>
          </div>

          <div className="footer-heading-list flex">
            <h3>Resources</h3>

            <a href="#">Blog</a>
            <a href="#">Testing guides</a>
            <a href="#">Help center</a>
            <a href="#">Contact</a>
            <a href="#">Careers</a>
          </div>
        </div>
      </footer>

      <footer id='subfooter-container'>
        <div className="container flex subfooter">
          <div className="terms flex">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Security information</a>
          </div>

          <div className="social-media flex">
            <a href="#"><i className="fa-brands fa-facebook"></i></a>
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="#"><i className="fa-brands fa-youtube"></i></a>
          </div>

          <div className="copyright">
            <p>&copy; pratikjadhav</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App