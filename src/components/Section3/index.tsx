import Icon from '@/atoms/Icon'
import Button from '@/atoms/Button'


import './section3.scss'


const Section3 = () => {
  return (

      <section className='section3 app_side_pad'>
        <div>
          <div className='img__wrapper'>
            <img src='/phone-man.png' alt='man-on-phone' className='man__phone'/>
            <img src='Group 209.png' alt='graph' className='abs_img'/>                       
          </div>
        </div>
        <div>
          <div className='wedo__wrapper'>
            <p className='wedo_p'>We connect our customers with the best, and help them keep up-and stay open.</p>
            <ul className='wedo_ul ul-x'>
              <li><Icon id='check' width={36} height={36} className='mr-20'/><span className="ul_text">We connect our customers with the best.</span></li>
              <li><Icon id='check' width={36} height={36} className='mr-20'/><span className="ul_text">Advisor success customer launch party.</span></li>
              <li><Icon id='check' width={36} height={36} className='mr-20'/><span className="ul_text">Business-to-consumer long tail.</span></li>
            </ul>
             <Button className='start_now'>Start now</Button>
          </div>
         
        </div>
      </section>
       
  )
}

export default Section3