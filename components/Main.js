import Places from './Places'
import Guide from './Guide'
import Car from './Car'
import Contact from './Contact'
import Footer from './Footer'
import Header from './Header'
import Agency from './Agency'

const Main = () => (
  <div id="main" >
    <Header />

    <div id="container" >
      <i id="navplaces" />
      <Places />
      <i id="navagency" />
      <Agency />
      <i id="navguide" />
      <Guide />
      <i id="navcar" />
      <Car />
      <i id="navcontact" />
      <Contact />
    </div>
    <Footer />
  </div>
)


export default Main