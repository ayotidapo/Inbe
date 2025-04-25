import Icon from '@/atoms/Icon'
import manStanding from '@/images/man-standing.png'
import menShaking from '@/images/men-shaking.png'
import manLonely from '@/images/lonely-man.png'

import './section2.scss'


const Section2 = () => {
  return (
    <section className='section2 app_side_pad'>
      
        <div className='desc'>
            <span className='our_service'>Our Services</span>
            <p>Handshake infographic mass market crowdfunding iteration.</p>
        </div>

        <div className='illustrations'>
          <article>
            <div className='img_div'>
              <img src={manStanding} alt='man-standing'/>
            </div>
            <h2>Cool feature title</h2>
            <span className='feature__desc'>Learning curve network effects return on investment.</span>
             <div className='xplore_div'>
              <span>Explore page </span>
              <Icon id="caret" className="icon_"/>
             </div>
          </article>
           <article> 
              <div className='img_div'>
                <img src={menShaking} alt='men-shaking'/>
              </div>
            <h2 >Even cooler feature</h2>
            <span className='feature__desc'>Learning curve network effects return on investment.</span>
             <div className='xplore_div'>
              <span>Explore page </span>
              <Icon id="caret" className="icon_"/>
             </div>
            </article>
            <article> 
              <div className='img_div'>
                <img src={manLonely} alt='man-lonely'/>
              </div>
              <h2>Cool feature title</h2>
              <span className='feature__desc'>Learning curve network effects return on investment.</span>
              <div className='xplore_div'>
                <span>Explore page </span>
                <Icon id="caret" className="icon_"/>
              </div>
            </article>
        </div>

      </section>
  )
}

export default Section2