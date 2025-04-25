import CircleCaret from '../../atoms/Icon/CircleCaret'
import './section5.scss'


const Section5 = () => {
  return (
     <section className=' section5  '>
        <div className='title_div'>
          <h2 className='title'>
            An enterprise template to ramp up your company website
          </h2>
          <div className='caret__div'>
            <CircleCaret/>
            <CircleCaret className='mirror'/>
          </div>
        </div>
        <div className="testimony__wrapper">
          <article className='testimony_item'>
            <div>“Buyer buzz partner network disruptive non-disclosure agreement business”</div>

            <div className='testifier__div'>
              <span className='avatar'>
                <img src='/albus.png' alt='albus'/>
              </span>
              <div>
                <h6>Albus Dumbledore</h6>
                Manager @ Howarts
              </div>
            </div>
          </article>
          <article className='testimony_item'>
            <div>“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”</div>
            <div className='testifier__div'>
              <span className='avatar'>
                 <img src='/severus.png' alt='severus'/>
              </span>
              <div>
                <h6>Severus Snape</h6>
                Manager @ Slytherin
              </div>
            </div>
          </article>
          <article className='testimony_item'>
            <div>“Release facebook responsive web design business model canvas seed money monetization.”</div>
             <div className='testifier__div'>
              <span className='avatar'>
                 <img src='/porter.png' alt='porter'/>
              </span>
              <div>
                <h6>Harry Potter</h6>
                Team Leader @ Gryffindor
              </div>
            </div>
          </article>
           
        </div>

      </section>
  )
}

export default Section5