import React from 'react'
import PropTypes from 'prop-types';
import { TablePagination } from '../component/TablePagination'
import { CompletedOrderData } from '../component/CompletedOrderData'
import { PendingOrderData } from '../component/PendingOrderData';

export default function OrderList({ onViewClick }) {
  const [completedCurrentPage, setCompletedCurrentPage] = React.useState(1);
  const [pendingCurrentPage, setPendingCurrentPage] = React.useState(1);

  const itemsPerPage = 6; 

  const completedTotalPages = Math.ceil(CompletedOrderData.length / itemsPerPage);
  const pendingTotalPages = Math.ceil(PendingOrderData.length / itemsPerPage);

  const completedCurrentData = CompletedOrderData.slice(
    (completedCurrentPage - 1) * itemsPerPage,
    completedCurrentPage * itemsPerPage
  );

  const pendingCurrentData = PendingOrderData.slice(
    (pendingCurrentPage - 1) * itemsPerPage,
    pendingCurrentPage * itemsPerPage
  );

  return (
    <div>
      <h1 className="text-[#555657] font-semibold text-2xl leading-[48px] mb-5">ORDER PAGE</h1>
      {/* Completed order section */}
      <section className="p-4 bg-white rounded-[10px] w-fit mb-5">
        <div className="flex justify-between py-2 font-semibold">
            <h2 className="text-[#555657] text-xl">Completed Orders</h2>
            <button className="transition duration-300 ease-in-out transform hover:scale-105 text-Green text-sm cursor-pointer">See all</button>
        </div>
        <table className="table-auto border-collapse my-2 mx-2 w-full">
          <thead>
            <tr className="text-sm font-medium bg-Green text-white rounded-xl justify-around space-x-3">
              <th className="px-2 py-3 whitespace-nowrap rounded-tl-lg rounded-bl-lg">Order no.</th>
              <th className="px-2 py-3 whitespace-nowrap">Date</th>
              <th className="px-2 py-3 whitespace-nowrap">Vendor</th>
              <th className="px-2 py-3 whitespace-nowrap">Customer name</th>
              <th className="px-2 py-3 whitespace-nowrap">Price</th>
              <th className="px-2 py-3 whitespace-nowrap rounded-tr-lg rounded-br-lg">Status</th>
            </tr>
          </thead>
          <tbody className="font-medium text-xs text-[#555657] divide-y divide-[#E5E7EB]">
          {completedCurrentData.map((item, index) => (
            <tr key={index}>
              <td className="px-2 py-3 whitespace-nowrap">{item.orderNo}</td>
              <td className="px-2 py-3 whitespace-nowrap">{item.date}</td>
              <td className="px-2 py-3 whitespace-nowrap">{item.vendor}</td>
              <td className="pl-5 pr-2 py-3 whitespace-nowrap">{item.customerName}</td>
              <td className="px-2 py-3 whitespace-nowrap">{item.price}</td>
              <td className="px-2 py-3 whitespace-nowrap">
                <p className="bg-deepGreen text-white p-2 rounded-lg">
                  Delivered
                </p>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
        <TablePagination
        currentPage={completedCurrentPage}
        setCurrentPage={setCompletedCurrentPage}
        totalPages={completedTotalPages}
      />
      </section>

      {/* Pending order section */}
      <section className="p-4 bg-white rounded-[10px] w-fit mb-5">
        <div className="flex justify-between py-2 font-semibold">
            <h2 className="text-[#555657] text-xl">Pending Orders</h2>
            <button className="transition duration-300 ease-in-out transform hover:scale-105 text-Green text-sm cursor-pointer">See all</button>
        </div>
        <table className="table-auto border-collapse my-2 mx-2 w-full">
          <thead>
            <tr className="text-sm font-medium bg-Green text-white rounded-xl justify-around space-x-3">
              <th className="px-2 py-3 whitespace-nowrap rounded-tl-lg rounded-bl-lg">Order no.</th>
              <th className="px-2 py-3 whitespace-nowrap">Date</th>
              <th className="px-2 py-3 whitespace-nowrap">Vendor</th>
              <th className="px-2 py-3 whitespace-nowrap">Customer name</th>
              <th className="px-2 py-3 whitespace-nowrap">Price</th>
              <th className="px-2 py-3 whitespace-nowrap rounded-tr-lg rounded-br-lg">Status</th>
            </tr>
          </thead>
          <tbody className="font-medium text-xs text-[#555657] divide-y divide-[#E5E7EB]">
          {pendingCurrentData.map((item, index) => (
            <tr key={index}>
              <td className="px-2 py-3 whitespace-nowrap">{item.orderNo}</td>
              <td className="px-2 py-3 whitespace-nowrap">{item.date}</td>
              <td className="px-2 py-3 whitespace-nowrap">{item.vendor}</td>
              <td className="pl-5 pr-2 py-3 whitespace-nowrap">{item.customerName}</td>
              <td className="px-2 py-3 whitespace-nowrap">{item.price}</td>
              <td className="px-2 py-3 whitespace-nowrap">
                <p className="bg-[#F18805] text-white p-2 rounded-lg">
                  Delivered
                </p>
              </td>
              <td className="px-2 py-3 whitespace-nowrap">
                <button className="transition duration-300 ease-in-out transform hover:scale-105 text-Green" onClick={() => onViewClick(item)}>
                    View
                </button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
        <TablePagination
        currentPage={pendingCurrentPage}
        setCurrentPage={setPendingCurrentPage}
        totalPages={pendingTotalPages}
      />
      </section>
    </div>
  )
}

OrderList.propTypes = {
  onViewClick: PropTypes.func.isRequired,
};
