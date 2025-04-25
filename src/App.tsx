import { useState } from 'react'
import  Button  from './atoms/Button'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'
import Section5 from './components/Section5'
import Section6 from './components/Section6'
import Section7 from './components/Section7'
import Section8 from './components/Section8'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import heroImg from './images/hero.png'
import Icon from './atoms/Icon'

import './App.scss'






function App() {

const [showMobNav, setShowMobNav] = useState('')
console.log({showMobNav})
  return (
    <div className='home__container'>
      <section className={`nav_modal ${showMobNav}`}>
        <div className='mobile_nav_wrapper'>
          <div className='close_nav' onClick={()=>setShowMobNav('')}>&times;</div>
           <Navbar/>
        </div>
       
      </section>
      <section className='top__section app_side_pad'>
        <div className='curved__'></div>
        <header className='header'>
          <img src="/logo.png" alt="logo" className='logo'/>
          <Navbar/>
          <Icon id='hamburger' className='hamburger' onClick={()=> setShowMobNav('open')}/>
        </header>
        <section className='jumbotron'>
      
          <div className='jumbotron_desc'>
            <div className='desc_wrapper'>

              <h2>
                Save time by building  fast with Boldo Template 
              </h2>
              <span>Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.</span>
              <div className='cta_div'>
                 <Button className='template'>Buy template</Button>
                 <Button className='xplore'>Explore</Button>
              </div>

            </div>
          </div>
          <div className='jumbotron_illustr'>
            <img src={heroImg} alt="illustration" className='top_illustr'/>
          </div>

        </section>

        <div className='company_logos'>
          <div><img src='/boldo.png' alt="boldo" /></div>
          
           <div><img src='/presto.png' alt="presto"/></div>
          <div><img src='/boldo.png' alt="boldo" /></div>
          
           <div><img src='/presto.png' alt="presto"/></div>
         <div><img src='/boldo.png' alt="boldo" /></div>
          
           <div><img src='/presto.png' alt="presto"/></div>
          
        </div>

      </section>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
      <Section8/>
      <Footer/>      
    </div>
  )
}

export default App
