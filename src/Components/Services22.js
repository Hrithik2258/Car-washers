import React from 'react'
import {Link} from 'react-router-dom';
import Footer from './Footer';
import car2 from '../assets/roadside.jpg'
const Services22 = () => {
  return (

  <div>
  <div>
  
  <div className="app">
  <section className="text-gray-600 body-font">
   <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
     <img className="lg:w-3/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={car2}/>
     <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Road Side Attendence  </h1>
     <div className="text-center lg:w-2/3 w-full">
     </div>
   </div>
 </section>
 
  </div>


      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="https://www.speedcarwash.com/images/services/silver-wash.jpg"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                Silver Wash
              </h1>

              <p className="leading-relaxed">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean shorts keytar banjo tattooed umami
                cardigan.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
  
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Gold wash </h1>
       
        <p className="leading-relaxed mb-4">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean.</p>
       </div>
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://www.speedcarwash.com/images/services/gold-wash.jpg"/>
    </div>
  </div>
</section>



      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="https://www.speedcarwash.com/images/services/silver-wash.jpg"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              WAX RUBBING AND BUFFING
              </h1>

              <p className="leading-relaxed">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean shorts keytar banjo tattooed umami
                cardigan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
    </div>
  )
}

export default Services22