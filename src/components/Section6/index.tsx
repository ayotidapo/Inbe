import Icon from '@/atoms/Icon'
import './section6.scss'


const Section6 = () => {
  return (
      <section className='section6'>
        <div className='banner__div'>
          <img src='/banner.png' alt='banner'/>
        </div> 
        <div className='connect__'>
          <div className='desc_wrapper'>
            We connect our customers with the best, and help them keep up-and stay open.
             
          </div>
          <div className='collapse_wrapper'>
            <div className='collapsible'>
              <span>We connect our customers with the best?</span>
              <Icon id='dark-caret' width={28} height={28}/>
            </div>
            <div className='collapsible'>
              <span>We connect our customers with the best?</span>
              <Icon id='dark-caret' width={28} height={28}/>
            </div>
          </div>
          
        </div>   
      </section>
  )
}

export default Section6