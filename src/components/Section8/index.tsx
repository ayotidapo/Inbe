import Button from '@/atoms/Button'
import './section8.scss'

const Section7 = () => {
  return (
     <section className='section8'>
        <div className='subscribe_wrapper'>
          <div className='content_div'>
             <span>An enterprise template to ramp up your company website</span>

             <div className='input__container'>
               <input type='email' placeholder='Your email address'/> <Button className='start_now'>Start now</Button>
             </div>
          </div>                
        </div>      
      </section>
  )
}

export default Section7