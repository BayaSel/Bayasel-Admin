//import React from 'react'

import Select from "../component/Select";

export default function Overview() {
  return (
    <div className="font-poppins">
        <h1 className="text-[#555657] font-semibold text-2xl leading-[48px] mb-5">Good Day, VERA</h1>
       
        {/* Total Section */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="lg:w-[200px] h-[120px] flex gap-3 p-3 bg-white rounded transition duration-300 ease-in-out transform hover:scale-105">
                <img src="/totaluser.png" alt="Total User Icon" className="w-[53px] h-[53px] mt-3"/>
                <div className="flex flex-col space-y-5">
                    <p className="text-semibold text-sm text-[#555657]">Total Users</p>
                    <p className="text-semibold text-xl text-[#417149] text-center">500</p>
                </div>
            </div>
            <div className="lg:w-[200px] h-[120px] flex gap-3 p-3 bg-white rounded transition duration-300 ease-in-out transform hover:scale-105">
                <img src="/totalvendor.png" alt="Total Vendor Icon" className="w-[53px] h-[53px] mt-3"/>
                <div className="flex flex-col space-y-5">
                    <p className="text-semibold text-sm text-[#555657]">Total Vendors</p>
                    <p className="text-semibold text-xl text-[#115DCF] text-center">150</p>
                </div>
            </div>
            <div className="lg:w-[200px] h-[120px] flex gap-3 p-3 bg-white rounded transition duration-300 ease-in-out transform hover:scale-105">
                <img src="/totalsales.png" alt="Total Sale Icon" className="w-[53px] h-[53px] mt-3"/>
                <div className="flex flex-col space-y-5">
                    <p className="text-semibold text-sm text-[#555657]">Total Sales</p>
                    <p className="text-semibold text-xl text-[#8E0AA3] text-center">850</p>
                </div>
            </div>
            <div className="lg:w-[200px] h-[120px] flex gap-3 p-3 bg-white rounded transition duration-300 ease-in-out transform hover:scale-105">
                <img src="/totalvisitor.png" alt="Total Visitor Icon" className="w-[53px] h-[53px] mt-3"/>
                <div className="flex flex-col space-y-5">
                    <p className="text-semibold text-sm text-[#555657]">Total Visitors</p>
                    <p className="text-semibold text-xl text-[#C09605] text-center">333</p>
                </div>
            </div>
        </section>

        {/* Sales Summary and Low Stock Section */}
        <section className="flex flex-col lg:flex-row my-5 gap-2">
            <div className="bg-[#FFFFFF] py-3 px-4 rounded-[10px]">
                <div className="flex justify-between font-semibold">
                    <h2 className="text-xl text-[#555657]">Sales Summary</h2>
                    <div className="flex gap-2">
                        <button className="transition duration-300 ease-in-out transform hover:scale-105 bg-Green hover:bg-[#63da5f] text-white py-1 px-[10px] cursor-pointer rounded-lg text-base">Monthly</button>
                        <Select />
                    </div>
                </div>
                <img src="/salessummary.png" alt="/Graph of sales for the year" className="mt-5 w-[470px]" />
            </div>
            {/* Low Stock */}
            <div className="bg-[#FFFFFF] py-2 px-3 rounded-[10px]">
                <h2 className="text-[#DB7C05] font-semibold text-xl py-2">Low Stock</h2>
                <table className="table-auto border-collapse">
                    <thead className="bg-Green text-white rounded-lg">
                        <tr className="text-sm font-medium">
                            <th className="px-3 py-2 rounded-tl-lg rounded-bl-lg">Product</th>
                            <th className="px-3 py-2">Qty left</th>
                            <th className="px-3 py-2">Vendor</th>
                            <th className="px-3 py-2 rounded-tr-lg rounded-br-lg">Status</th>
                        </tr>
                    </thead>
                    <tbody className="font-medium text-[10px] text-[#555657] divide-y divide-[#E5E7EB]">
                        <tr className='my-1'>
                            <td className="flex flex-col gap-1 py-3">
                                <img src="/Beans.png" alt="Image of beans" className="w-[50px]"/>
                                <p>Beans</p>
                            </td>
                            <td>8 (Bags)</td>
                            <td>LMK Farms</td>
                            <td><button className=" bg-[#F18805] text-white rounded-lg py-1 px-[10px]">Pending</button></td>
                        </tr>
                        <tr className='my-1'>
                            <td className="flex flex-col gap-1 py-3">
                                <img src="/Carrot.png" alt="Image of beans" className="w-[50px]"/>
                                <p>Carrots</p>
                            </td>
                            <td>6 (Bags)</td>
                            <td>Dotun Foods</td>
                            <td><button className=" bg-[#AB3533] text-white rounded-lg py-1 px-[10px]">Not alerted</button></td>
                        </tr>
                        <tr className='my-1'>
                            <td className="flex flex-col gap-1 py-3">
                                <img src="/Banana.png" alt="Image of beans" className="w-[50px]"/>
                                <p>Banana</p>
                            </td>
                            <td>5 (Bunch)</td>
                            <td>Dotun Foods</td>
                            <td><button className=" bg-[#AB3533] text-white rounded-lg py-1 px-[10px]">Not alerted</button></td>
                        </tr>
                        <tr className='my-1'>
                            <td className="flex flex-col gap-1 py-3">
                                <img src="/Rice.png" alt="Image of beans" className="w-[50px]"/>
                                <p>Rice</p>
                            </td>
                            <td>8 (Bags)</td>
                            <td>LMK Farms</td>
                            <td><button className=" bg-[#F18805] text-white rounded-lg py-1 px-[10px] h-fit">Pending</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        {/* Recent Order Section */}
        <section className="p-4 bg-white rounded-[10px] lg:w-[700px] w-fit mb-5">
            <div className="flex justify-between py-2 font-semibold">
                <h2 className="text-[#555657] text-xl">Recent Order</h2>
                <button className="transition duration-300 ease-in-out transform hover:scale-105 text-Green text-sm cursor-pointer">See all</button>
            </div>
            <table className="table-auto border-collapse my-3 mx-2 w-full">
                <thead>
                    <tr className="text-sm font-medium bg-Green text-white rounded-xl justify-around">
                        <th className="px-2 py-3 rounded-tl-lg rounded-bl-lg">Order no.</th>
                        <th className="px-2 py-3">Date</th>
                        <th className="px-2 py-3">Vendor</th>
                        <th className="pl-1.5 py-3">Customer name</th>
                        <th className="px-2 py-3">Price</th>
                        <th className="px-2 py-3 rounded-tr-lg rounded-br-lg">Satus</th>
                    </tr>
                </thead>
                <tbody className="font-medium text-[10px] text-[#555657] divide-y divide-[#E5E7EB] py-2">
                    <tr className="p-3">
                        <td className='py-3'>#4353768923</td>
                        <td className='py-3'>12/09/24</td>
                        <td className='py-3'>LMK Farms</td>
                        <td className='py-3 pl-3'>Kate John</td>
                        <td className='py-3'>$350</td>
                        <td className='py-3'><button className="bg-[#2A8935] text-white rounded-lg py-2 px-[10px]">Delivered</button></td>
                    </tr>
                    <tr className="p-3">
                        <td className='py-3'>#4353768923</td>
                        <td className='py-3'>12/09/24</td>
                        <td className='py-3'>LMK Farms</td>
                        <td className='py-3 pl-3'>Kate John</td>
                        <td className='py-3'>$350</td>
                        <td className='py-3'><button className="bg-[#F18805] text-white rounded-lg py-2 px-[10px]">Pending</button></td>
                    </tr>
                    <tr className="p-3">
                        <td className='py-3'>#4353768923</td>
                        <td className='py-3'>12/09/24</td>
                        <td className='py-3'>LMK Farms</td>
                        <td className='py-3 pl-3'>Kate John</td>
                        <td className='py-3'>$350</td>
                        <td className='py-3'><button className="bg-[#F18805] text-white rounded-lg py-2 px-[10px]">Pending</button></td>
                    </tr>
                </tbody>
            </table>
        </section>

        {/* Out of Stock & Request Section */}
        <section className="flex flex-col lg:flex-row my-2 gap-3 font-poppins">
            <div className="bg-white rounded-[10px] p-3 ">
                <h2 className="text-[#960200] font-semibold text-xl py-2">Out of Stock</h2>
                <table className="border-collapse">
                    <thead className="bg-Green text-white rounded-lg">
                        <tr className="text-sm font-medium">
                            <th className="px-3 py-2 rounded-tl-lg rounded-bl-lg">Product</th>
                            <th className="px-3 py-2">Category</th>
                            <th className="px-3 py-2">Vendor</th>
                            <th className="px-3 py-2 rounded-tr-lg rounded-br-lg">Status</th>
                        </tr>
                    </thead>
                    <tbody className="font-medium text-[10px] text-[#555657] divide-y divide-[#E5E7EB]">
                        <tr className='my-1'>
                            <td className="flex flex-col lg:flex-row gap-1 py-3">
                                <img src="/Beans.png" alt="Image of beans" className="w-[50px]"/>
                                <p className="self-center">Beans</p>
                            </td>
                            <td className="text-center">Crop</td>
                            <td>Dotun Food</td>
                            <td><button className="bg-[#F18805] text-white rounded-lg py-1 px-[10px]">Pending</button></td>
                        </tr>
                        <tr className='my-1'>
                            <td className="flex flex-col lg:flex-row gap-1 py-3">
                                <img src="/admineggs.png" alt="Image of beans" className="w-[50px]"/>
                                <p className="self-center">Eggs</p>
                            </td>
                            <td className="text-center">Poultry</td>
                            <td>LMK Farms</td>
                            <td><button className="bg-[#F18805] text-white rounded-lg py-1 px-[10px]">Pending</button></td>
                        </tr>
                        <tr className='my-1'>
                            <td className="flex flex-col lg:flex-row gap-1 py-3">
                                <img src="/admincatfish.png" alt="Image of beans" className="w-[50px]"/>
                                <p className="self-center">Catfish</p>
                            </td>
                            <td className="text-center">Aquaculture</td>
                            <td>LMK Farms</td>
                            <td><button className="bg-[#F18805] text-white rounded-lg py-1 px-[10px]">Pending</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="bg-white p-3 rounded-[10px]">
                <div className="flex justify-between font-semibold my-2">
                    <h2 className="text-[#555657] text-xl">Vendor Request</h2>
                    <button className="text-Green text-sm cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">See all</button>
                </div>
                <div className="flex gap-2 p-2 my-2 border-[0.5px] border-[#C8C8C9] rounded">
                    <img src="/James.png" alt="Picture of Vendor James" className="self-start mt-2"/>
                    <div className="flex flex-col font-medium text-[#626364] text-xs py-2.5">
                        <p>Name: <span className="text-Green text-sm">James Okoro</span></p>
                        <p>Business Name: <span className="text-Green text-sm">Jameson</span></p>
                        <div className="flex gap-3 mt-3">
                            <button className="transition duration-300 ease-in-out transform hover:scale-105 bg-Green text-white p-[10px] rounded">Accept</button>
                            <button className="transition duration-300 ease-in-out transform hover:scale-105 bg-[#960200] text-white p-[10px] rounded">Reject</button>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 p-2 my-2 border-[0.5px] border-[#C8C8C9] rounded">
                    <img src="/Toyin.png" alt="Picture of Vendor Toyin" className="self-start mt-2"/>
                    <div className="flex flex-col font-medium text-[#626364] text-xs py-2.5">
                        <p>Name: <span className="text-Green text-sm">Toyin Balogun</span></p>
                        <p>Business Name: <span className="text-Green text-sm">T.Food</span></p>
                        <div className="flex gap-3 mt-3">
                            <button className="transition duration-300 ease-in-out transform hover:scale-105 bg-Green text-white p-[10px] rounded">Accept</button>
                            <button className="transition duration-300 ease-in-out transform hover:scale-105 bg-[#960200] text-white p-[10px] rounded">Reject</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
