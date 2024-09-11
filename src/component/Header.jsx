//import React from 'react'

function AdminHeader() {
  return (
    <div className="flex flex-row bg-white py-3 top-0 justify-end gap-8 mx-4">
        <div className="flex relative text-[#343434]">
            <input
              type="text"
              placeholder="Search"
              className="relative pl-6 lg:pl-12 pr-3 h-[48px] w-[500px] bg-white rounded-md border border-[#626364] focus:outline-none focus:border-green-600 text-[8px] md:text-xs lg:text-base mr-4 my-2"
            />
            <button className="absolute inset-y-5 left-0 items-center pl-1 lg:pl-4 z-1 cursor-pointer ">
              <i className="bx bx-search bx-sm text-gray-400 hover:text-black"></i>
            </button>
        </div>
        <div className="flex gap-5">
            <div className="flex justify-center items-center">
                <i className='bx bx-sm bx-bell'></i>
            </div>
            <div className="flex gap-3">
                <div className="w-[60px] h-[60px]">
                    <img src="/adminpic.png" alt="Admin's picture"/>
                </div>
                <div className="flex flex-col justify-start gap-1 font-medium">
                    <h3 className="text-[#626364] text-xl">Vera</h3>
                    <p className="text-[#888889] text-base ">Head Admin</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminHeader