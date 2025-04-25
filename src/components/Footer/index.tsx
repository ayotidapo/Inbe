import  './footer.scss'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='brand_display'>
          <div className='dark__logo'>
            <img src='/dark-logo.png' alt="black-logo" className='logo_fit'/>
          </div>

          <p className='brand_desc'>
            Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.
          </p>

          <span className="reserved">All rights reserved.</span>
        </div>
        <section className='links'>
          <div className='list__wrapper'>
            <h4>Landings</h4>
            <ul>
              <li>Home</li>
              <li>Products</li>
              <li>Services</li>
            </ul>
          </div>
          <div className='list__wrapper'>
            <h4>Company</h4>
            <ul>
              <li>Home</li>
              <li>Careers</li>
              <li>Services</li>
            </ul>
          </div>
          <div className='list__wrapper'>
            <h4>Resources</h4>
            <ul>
              <li>Blog</li>
              <li>Products</li>
              <li>Services</li>
            </ul>
          </div>

        </section>


      </footer>
  )
}

export default Footer