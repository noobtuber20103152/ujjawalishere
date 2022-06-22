import React from 'react';
import Skills from './Skills';
function Front(props) {
  return <>
    <div className={`container-sm bg-gray-700  mx-0 pb-20 w-100 py-10 my-0 `}>
      <div class=" grid md:grid-cols-2 ">
        <div className="container my-2 px-4 md:ml-20" style={{ maxWidth: "600px" }}>
          <div className="container my-4 flex justify-center flex-col mr-10">
            <h1 className={`text-5xl text-white font-bold px-0`}>Hey! It's me <br /><span className='my-2 text-4xl text-blue-500 px-0'>Ujjwal Rachhoya</span> </h1>
            <p className='text-white mt-4'>I am Ujjawal Rachhoya, 2nd year student at Dr. B R Ambedkar National Institute of technology, Jalandhar pursuing B.Tech study in computer science and engineering. I enjoy creating many interactive and functional websites using react, node js and other many interesting libraries and frameworks like bootstrap , tailwind-css etc and I have 1 year of experience in web development and competitive programming. </p>
            <span className={`text-white font-bold mt-5`}>" Just start and see what happened ? "</span>
            <div className="flex">
              <button class="bg-transparent w-4/12 my-8 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Come on
              </button>
              <a target="_blank" href="https://drive.google.com/file/d/1bjn6RVfMfdEhfWM5Kz3PG-oFzqF-FYlq/view?usp=sharing" className={`flex text-${props.mode === 'black' ? 'white' : 'gray-800'} hover:text-blue-500 justify-center items-center ml-10`}>
                <svg className={`mx-2 `} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="11" cy="11" r="11" fill="#3056D3"></circle>
                  <rect x="6.90906" y="13.3636" width="8.18182" height="1.63636" fill="white"></rect>
                  <rect x="10.1818" y="6" width="1.63636" height="4.09091" fill="white"></rect>
                  <path d="M11 12.5454L13.8343 9.47726H8.16576L11 12.5454Z" fill="white"></path>
                </svg> Download Resume</a>
            </div>
            <div className="flex">
              <h1 className={`text-xl font-bold mb-2 text-white`}>Web Development</h1>
            </div>
            <div className="flex flex-wrap">
              <Skills link="https://www.svgrepo.com/show/55451/html.svg" />
              <Skills link="https://www.svgrepo.com/show/353623/css-3.svg" />
              <Skills link="https://www.svgrepo.com/show/349419/javascript.svg" />
              <Skills link="https://www.svgrepo.com/show/303293/bootstrap-4-logo.svg" />
              <Skills link="https://www.svgrepo.com/show/374118/tailwind.svg" />
              <Skills link="https://www.svgrepo.com/show/354259/react.svg" />
              <Skills link="https://www.svgrepo.com/show/303658/nodejs-1-logo.svg" />
              <Skills link="https://www.svgrepo.com/show/354113/nextjs-icon.svg" />
              <Skills link="https://www.svgrepo.com/show/331488/mongodb.svg" />
              <Skills link="https://www.svgrepo.com/show/221326/mysql.svg" />
              <Skills link="https://www.svgrepo.com/show/373482/c.svg" />
              <Skills link="https://www.svgrepo.com/show/303480/c-logo.svg" />
              <Skills link="https://www.svgrepo.com/show/354238/python.svg" />
            </div>
          </div>
        </div>
        <div className="container my-2 px-4 flex justify-center">
          <img style={{ borderRadius: "100px 10px 10px 10px" }} src='./images/14.jpg' class="px-2 object-scale-down h-70 w-80" />
        </div>
      </div>
    </div>
  </>
}

export default Front;
