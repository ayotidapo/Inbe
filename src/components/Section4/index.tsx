import Icon from '../../atoms/Icon'
import './section4.scss'

const Section4 = () => {
  return (
     <section className='section4 app_side_pad'>
        <div>
          <div className='wedo__wrapper'>
            <p className='wedo_p'>We connect our customers with the best, and help them keep up-and stay open.</p>
            <div className='bar__div_wrapper'>
              <div className='bar__div'>
               <Icon id='leaf'/><span>We connect our customers with the best.</span>
             </div>
             <div className='bar__div'>
               <Icon id='eye'/><span>Advisor success customer launch party.</span>
             </div>
             <div className='bar__div'>
               <Icon id='light'/><span>Business-to-consumer long tail.</span>
             </div>

            </div>
            
          </div>
         
        </div>
        <div>
          <div className='img__wrapper'>
            <img src='/phone-lady.png' alt='lady-on-phone'/>
            <div className='abs_img'>
                 <img src='pie-graph.png' alt='graph'/>  
                 <div>
                  <span className='percent'>35% -  Agile Development</span>
                  <span className='percent'>30% -  Investor bandwidth</span>
                   <span className='percent'>35% -  A/B testing </span>
                 </div>
            </div>
                              
          </div>
        </div>
        
      </section>
  )
}

export default Section4