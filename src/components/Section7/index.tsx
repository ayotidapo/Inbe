import Button from '../../atoms/Button'
import manStanding from '../../images/man-standing.png'
import './section7.scss'

const Section7 = () => {
  return (
    <section className='section7 app_side_pad'>
      
        <div className='desc'>
            <span className='our_service'>Our Blog</span>
            <p>Value proposition accelerator product management venture</p>
        </div>

        <div className='illustrations'>
          <article>
            <div className='img_div'>
              <img src={manStanding} alt='man-standing'/>
            </div>
            <h2>Category</h2>
            <span className='feature__desc'>Pitch termsheet backing validation focus release.</span>
            <div className='avatar__wrapper'>
              <span className='avatar'>
                <img src='/albus.png' alt='albus'/>
              </span>
              <span>Chandler Bing</span>
            </div>
          </article>
           <article> 
              <div className='img_div'>
                <img src='/phone-lady2.png' alt='mlady-on-phone'/>
              </div>
            <h2 >Category</h2>
            <span className='feature__desc'>Seed round direct mailing non-disclosure agreement graphical user interface rockstar.</span>
             <div className='avatar__wrapper'>
              <span className='avatar'>
                <img src='/albus.png' alt='albus'/>
              </span>
              <span>Rachel Green</span>
            </div>
            </article>
            <article> 
              <div className='img_div'>
                <img src='/office-boy.png' alt='office-boy'/>
              </div>
              <h2>Category</h2>
              <span className='feature__desc'>Beta prototype sales iPad gen-z marketing network effects value proposition</span>
              <div className='avatar__wrapper'  >
              <span className='avatar'>
                <img src='/albus.png' alt='albus'/>
              </span>
              <span>Monica Geller</span>
            </div>
            </article>

            
        </div>
         <div className='justify-center'><Button className='load_more'>Load more</Button></div>
      </section>
  )
}

export default Section7