import React from "react";
import { Link } from "react-router-dom";
const Services1 = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://img.indianauto.com/2020/05/29/l2AZQYjw/car-washing-876a.jpg"
                  alt="blog"
                />
                <div className="p-6">
                  {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> */}
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Car Washing
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <Link
                      to="/service11"
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      <button>Learn more</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://media.istockphoto.com/photos/checking-oil-in-car-engine-picture-id1157179147?k=20&m=1157179147&s=612x612&w=0&h=UKbu3rdN-53cmKSO8NvuNl5Ve7Lh29rsUkVeARnE87M="
                  alt="blog"
                />
                <div className="p-6">
                  {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> */}
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    RoadSide Assistance
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Roadside Assistance Cover in your Car Insurance Plan is an
                    add-on cover and acts as your most trusted ally when the
                    vehicle breaks down. In other words,
                    <br />
                    Roadside Assistance Coverage means a professional technician
                    comes to your rescuebr
                    <br /> when your car breaks down in the middle of the
                    journey leaving you stranded.
                  </p>
                  <div className="flex items-center flex-wrap">
                    <Link
                      to="/service22"
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://content.jdmagicbox.com/comp/siliguri/d4/9999px353.x353.200316223609.x5d4/catalogue/door-to-door-car-wash-service-sevoke-road-siliguri-xihuas92tt.jpg?clr=29293d"
                  alt="blog"
                />
                <div className="p-6">
                  {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> */}
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    On Door Service
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <Link
                      to="/service33"
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services1;
