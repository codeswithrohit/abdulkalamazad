import React from 'react'

const courses = () => {
  return (
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
  )
}

export default courses