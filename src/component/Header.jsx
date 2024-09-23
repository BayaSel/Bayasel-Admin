//import React from 'react'

function AdminHeader() {
  return (
    <div className="flex flex-row bg-white py-3 top-0 justify-center items-centers lg:justify-end gap-5 md:gap-10 lg:mr-10">
        <div className="flex relative text-[#343434]">
            <input
              type="text"
              placeholder="Search"
              className="relative pl-7 lg:pl-12  pr-3 h-[30px] lg:h-[38px] w-[200px] md:w-[350px] lg:w-[500px] bg-white rounded-md border border-[#626364] focus:outline-none focus:border-green-600 text-xs lg:text-base mr-4 my-2"
            />
            <button className="absolute inset-y-3 left-0 items-center pl-1 lg:pl-4 z-1 cursor-pointer">
              <i className="bx bx-sm bx-search text-gray-400 hover:text-black "></i>
            </button>
        </div>
        <div className="flex gap-3 lg:gap-8">
            <div className="flex justify-center items-center">
              <img src="/chatsicon.png" alt="chat icon" />
            </div>
            <div className="flex justify-center items-center">
                <i className='bx bx-sm bx-bell text-[#626364]'></i>
            </div>
            <div className="flex gap-2 lg:gap-3">
                <div className="pt-1 lg:pt-0 w-[40px] h-[40px] lg:w-[60px] lg:h-[60px]">
                    <img src="/adminpic.png" alt="Admin's picture"/>
                </div>
                <div className="hidden lg:flex flex-col justify-start gap-1 font-medium">
                    <h3 className="text-[#626364] text-base lg:text-lg">Vera</h3>
                    <p className="text-[#888889] text-sm lg:text-base ">Head Admin</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminHeader