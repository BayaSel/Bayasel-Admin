//import React from 'react'
import CustomerPieChart from "../component/Charts/CustomerPieChart"
import OrderPieChart from "../component/Charts/OrderPieChart"
import { IoFilterOutline } from "react-icons/io5";
import { GrDocumentText } from "react-icons/gr";
import MyBarChart from "../component/Charts/BarChart";
import MyLineChart from "../component/Charts/LineChart";

export default function Analytics() {

  const countries = [
    {
      image:"https://images.pexels.com/photos/4386429/pexels-photo-4386429.jpeg?auto=compress&cs=tinysrgb&w=600",
      title:"United States",
      paragraph:"48%",
    },
    {
      image:"https://images.pexels.com/photos/968299/pexels-photo-968299.jpeg?auto=compress&cs=tinysrgb&w=600",
      title:"United Kingdom",
      paragraph:"12%",
    },
    {
      image:"https://images.pexels.com/photos/968299/pexels-photo-968299.jpeg?auto=compress&cs=tinysrgb&w=600",
      title:"Switzerland",
      paragraph:"9%",
    },
  ]

  return (
    <>
      <div className="flex justify-between pr-[100px]">
        <div>
          <h2 className="mb-[18px] text-[18px] font-semibold">Analytics</h2>
          <span className="px-[25px] py-[11px] flex bg-[#d5dfd7] w-[525px] h-[46px] rounded-xl justify-between text-[16px] mb-[18px]">
            <p>Today</p>
            <p>Yesterday</p>
            <p>Week</p>
            <p>Month</p>
          </span>

          {/* Pie Charts */}
          <div className="flex gap-[20px] mb-[18px]">
            <CustomerPieChart />
            <OrderPieChart />
          </div>
          
          {/* Customer Activity */}
          
          <h4 className="mb-1">Customer Activity - Summary based on Trace</h4>
          <div className="flex justify-between mb-[18px]">
            <div className="bg-white px-[7px] py-[9px] rounded-2xl w-[105px] h-[78px]">
              <p className="pr-[20px] text-[16px] text-slate-600 font-medium">Favourite</p>
              <p className="text-[24px] font-bold text-[#4baf47]">700</p>
            </div>
            <div className="bg-white px-[7px] py-[9px] rounded-2xl w-[105px] h-[78px]">
              <p className="pr-[20px] text-[16px] text-slate-600 font-medium">Cart</p>
              <p className="text-[24px] font-bold text-[#4baf47]">500</p>
            </div>
            <div className="bg-white px-[7px] py-[9px] rounded-2xl w-[105px] h-[78px]">
              <p className="pr-[20px] text-[16px] text-slate-600 font-medium">Payment</p>
              <p className="text-[24px] font-bold text-[#4baf47]">400</p>
            </div>
            <div className="bg-white px-[7px] py-[9px] rounded-2xl w-[105px] h-[78px]">
              <p className="pr-[20px] text-[16px] text-slate-600 font-medium">Pending</p>
              <p className="text-[24px] font-bold text-[#4baf47]">100</p>
            </div>
            <div className="bg-white px-[7px] py-[9px] rounded-2xl w-[105px] h-[78px]">
              <p className="pr-[20px] text-[16px] text-slate-600 font-medium">Pre Paid</p>
              <p className="text-[24px] font-bold text-[#4baf47]">400</p>
            </div>
          </div>

           {/* Overall Customer Acquisition Bar Chart */}

           <div className="mb-[18px]">
              <MyBarChart />
           </div>

           {/* Overall Sales Activity */}

          <MyLineChart />

        </div>

        {/* admin activity and top countries */}

        <div>
          <div className="flex gap-[9px] mb-[26px]">
            <div className="flex items-center justify-center gap-[3px] cursor-pointer w-[141px] h-[48px] border-[1px] rounded-lg border-[#4baf47] text-[#4baf47]">
              <IoFilterOutline className="text-[20px] font-semibold"/>
              <button className="text-[18px] font-semibold">Filter</button>
            </div>
            <div className="flex items-center justify-center gap-[3px] w-[141px] h-[48px] cursor-pointer rounded-lg bg-[#4baf47] text-white">
              <GrDocumentText className="text-[20px] font-semibold"/>
              <button className="text-[18px] font-semibold">Export</button>
            </div>
          </div>

          
            <div className="bg-white rounded-lg px-[24px] pb-[8px] py-[8px] mb-[18px]">
              <h5 className="text-[16px] font-semibold text-[#5f6162]">Admin Activity</h5>
              <hr />
              <div className="pb-[10px] flex justify-between">
                <p className="text-[14px] text-slate-400">Vendors Added</p>
                <p className="text-[#4baf47] text-[14px] font-semibold">139</p>
              </div>
              <div className="pb-[10px] flex justify-between">
                <p className="text-[14px] text-[aaaaab]">Vendors Added</p>
                <p className="text-[#4baf47] text-[14px] font-semibold">139</p>
              </div>
              <div className="pb-[10px] flex justify-between">
                <p className="text-[14px] text-[aaaaab]">Vendors Added</p>
                <p className="text-[#4baf47] text-[14px] font-semibold">139</p>
              </div>
              <div className="pb-[10px] flex justify-between">
                <p className="text-[14px] text-[aaaaab]">Vendors Added</p>
                <p className="text-[#4baf47] text-[14px] font-semibold">139</p>
              </div>
              <div className="pb-[10px] flex justify-between">
                <p className="text-[14px] text-[aaaaab]">Vendors Added</p>
                <p className="text-[#4baf47] text-[14px] font-semibold">139</p>
              </div>
              <div className="pb-[10px] flex justify-between">
                <p className="text-[14px] text-[aaaaab]">Vendors Added</p>
                <p className="text-[#4baf47] text-[14px] font-semibold">139</p>
              </div>
            </div>
           
          <div className="px-[30.84px] py-[30px] bg-white rounded-lg shadow-lg">
            <h5 className="pb-[30px]">Top Countries</h5>
            {countries.map((countries, index) => (
              <div className="flex justify-between items-center mb-[18px]" key={index}>
              <div className="flex items-center gap-[13px]">
                <img src={countries.image} alt="" className="w-[50.37px] h-[49px] rounded-full"/>
                <p>{countries.title}</p>
              </div>
              <p>{countries.paragraph}</p>
            </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
