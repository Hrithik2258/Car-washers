import React, { useState } from 'react'

const Contact = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        car: "",
        phone: "",
        carno: "",
        service: "",

    });
    let name, value;
    const getUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUser({ ...user, [name]: value });
    };
    const postData = async(e) => {
                e.preventDefault();


                const {name,email,car,carno,phone,service} = user;
           const res =  await fetch('https://miakf-ed52b-default-rtdb.firebaseio.com/carwashers.json',
           {
            method:"POST",
            headers:{
             "Content-Type" : "application/json",
            },
            body:JSON.stringify({
                name,
                email,
                car,
                phone,
                carno,
                service,
            }),
         } 
           );
           if(res){
            setUser
            ({
                name: "",
                email: "",
                car: "",
                phone: "",
                carno: "",
                service: "",  
            });
            alert("Form has been Registered ")
           }
     
    }

    return (
        <div>
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <form  className="flex flex-wrap -m-2" method='POST'>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                                    <input type="text" value={user.name} onChange={getUserData} id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                    <input type="email" value={user.email} onChange={getUserData} id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>

                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
                                    <input type="number" value={user.phone} onChange={getUserData} id="phone" name="phone" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>

                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="car" className="leading-7 text-sm text-gray-600">Car </label>
                                    <input value={user.car} onChange={getUserData} type="text" id="car" name="car" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <br />
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="car no" className="leading-7 text-sm text-gray-600">Enter Your Car no </label>
                                    <input type="text" value={user.carno} onChange={getUserData} id="carno" name="carno" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>



                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="service" className="leading-7 text-sm text-gray-600">Type Of Service you Want </label>
                                    <input type="text" value={user.service} onChange={getUserData} id="service" name="service" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={postData}>Submit </button>
                            </div>

                        </form>
                    </div>
                </div>
            </section>
            
        </div>
    )
}

export default Contact