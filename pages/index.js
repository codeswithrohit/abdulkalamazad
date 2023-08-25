import React from 'react';

const index = () => {
  return (
    <div className='min-h-screen '>
      <header className="">
        <div className="lg:flex">
          <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
            <div className="max-w-xl">
              <h2 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Welcome To</h2>
              <p className="text-xl font-semibold text-gray-800 dark:text-white lg:text-2xl">A.P.J. ABDUL KALAM DEGREE COLLEGE</p>
              <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                <a href="#" className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-700">Get Admission</a>
                <a href="#" className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md lg:mx-4 hover:bg-gray-300">Courses</a>
              </div>
            </div>
          </div>
          <div className="w-full h-64 lg:w-1/2 lg:h-auto">
            <div className="w-full h-full bg-cover" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1508394522741-82ac9c15ba69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=748&q=80)' }}>
              <div className="w-full h-full bg-black opacity-25"></div>
            </div>
          </div>
        </div>
      </header>
      <div class="flex items-center justify-center flex-col   min-h-screen">
      
      <div class=" p-10 rounded-xl">
      
          <div class="flex flex-col justify-center items-center text-center">
              <div class="max-w-sm font-bold font-sans">
              Select from B.A, B.Sc, B.Com and Beyond
              </div>
              
          </div>

          <div
              class="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-12  md:space-y-0 justify-center items-center mt-10">
              <div class="bg-[#FFFBEC] rounded-xl">
                  <div class="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
                      <div class="mt-3 font-semibold text-lg">B.A</div>
                      <div class="text-sm font-light">Bachelor Of Arts</div>
                      <div class="my-4">
                          <span class="font-bold text-base">299,-</span>
                      </div>

                      <button class="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4">
                          Get Registration
                      </button>
                  </div>
              </div>

              <div class="bg-[#F9ECFF] rounded-xl">
                  <div class="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
                      <div class="mt-3 font-semibold text-lg">B.Sc</div>
                      <div class="text-sm font-light w-60 md:w-auto">Bachelor Of Science</div>
                      <div class="my-4">
                          <span class="font-bold text-base">953,-</span>
                      </div>

                      <button class="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4">
                          Get Registration
                      </button>
                  </div>
              </div>


              <div class="bg-[#ECEEFF] rounded-xl">
                  <div class="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
                      <div class="mt-3 font-semibold text-lg">B.com</div>
                      <div class="text-sm font-light w-60 md:w-auto">Bachelor Of Commerce</div>
                      <div class="my-4">
                          <span class="font-bold text-base">1028,-</span>
                      </div>

                      <button class="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4">
                          Get Registration
                      </button>
                  </div>
              </div>
          </div>

         
      </div>
  </div>
      <section class="">
    <div class="h-[32rem] ">
        <div class="container px-6 py-10 mx-auto">
            <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">The College Faculty</h1>

            <div class="flex justify-center mx-auto mt-6">
                <span class="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                <span class="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                <span class="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
            </div>

            
        </div>
    </div>

    <div class="container px-6 py-10 mx-auto -mt-96 sm:-mt-80 md:-mt-96">
        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
            <div class="flex flex-col items-center p-4 border sm:p-6 rounded-xl dark:border-gray-700">
                <img class="object-cover w-full rounded-xl aspect-square" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>

                <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">arthur melo</h1>

                <p class="mt-2 text-gray-500 capitalize dark:text-gray-300">design director</p>

               
            </div>

            <div class="flex flex-col items-center p-4 border sm:p-6 rounded-xl dark:border-gray-700">
                <img class="object-cover w-full rounded-xl aspect-square" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt=""/>

                <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">Pamela Anderson</h1>

                <p class="mt-2 text-gray-500 capitalize dark:text-gray-300">Lead Developer</p>

             
            </div>

            <div class="flex flex-col items-center p-4 border sm:p-6 rounded-xl dark:border-gray-700">
                <img class="object-cover w-full rounded-xl aspect-square" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>

                <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">John Doe</h1>

                <p class="mt-2 text-gray-500 capitalize dark:text-gray-300">Full stack developer</p>

             
            </div>
        </div>
    </div>
</section>
    </div>
  );
}

export default index;
