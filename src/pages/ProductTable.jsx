import React from 'react'
import PropTypes from 'prop-types';
import { TablePagination } from "../component/TablePagination"
import { ApprovedProductsData } from '../component/ApprovedProductsData';
import { PendingProductsData } from '../component/PendingProductsData';

export default function ProductTable({ onViewClick }) {
  const [approvedCurrentPage, setApprovedCurrentPage] = React.useState(1);
  const [pendingCurrentPage, setPendingCurrentPage] = React.useState(1);

  const itemsPerPage = 6; 

  const approvedTotalPages = Math.ceil(ApprovedProductsData.length / itemsPerPage);
  const pendingTotalPages = Math.ceil(PendingProductsData.length / itemsPerPage);

  const approvedCurrentData = ApprovedProductsData.slice(
    (approvedCurrentPage - 1) * itemsPerPage,
    approvedCurrentPage * itemsPerPage
  );

  const pendingCurrentData = PendingProductsData.slice(
    (pendingCurrentPage - 1) * itemsPerPage,
    pendingCurrentPage * itemsPerPage
  );

  return (
    <div className="font-poppins">
      <h1 className="text-[#555657] font-semibold text-2xl leading-[48px] mb-5">PRODUCTS PAGE</h1>

      {/* Accepted order section */}
      <section className="p-4 bg-white rounded-[10px] w-fit mb-5">
        <h2 className="font-semibold text-Green text-xl pb-3">Accepted order</h2>
        <table className="table-auto border-collapse my-2 mx-2 w-full">
          <thead>
            <tr className="text-sm font-medium bg-Green text-white rounded-xl justify-around space-x-4">
              <th className="px-4 py-3 whitespace-nowrap rounded-tl-lg rounded-bl-lg">Product name</th>
              <th className="px-4 py-3 whitespace-nowrap">Category</th>
              <th className="px-4 py-3 whitespace-nowrap">Price</th>
              <th className="px-4 py-3 whitespace-nowrap">In stock</th>
              <th className="px-4 py-3 whitespace-nowrap">Sold</th>
              <th className="px-4 py-3 whitespace-nowrap">Vendor</th>
              <th className="px-4 py-3 whitespace-nowrap rounded-tr-lg rounded-br-lg"></th>
            </tr>
          </thead>
          <tbody className="font-medium text-xs text-[#555657] divide-y divide-[#E5E7EB]">
          {approvedCurrentData.map((item, index) => (
            <tr key={index}>
              <td className="flex gap-1 py-3 whitespace-nowrap">
                <img src={item.imgSrc} alt={`Image of ${item.name}`} className="w-[50px]" />
                <p className='self-center'>{item.name}</p>
              </td>
              <td className="px-4 py-3 whitespace-nowrap">{item.category}</td>
              <td className="px-4 py-3 whitespace-nowrap">{item.price}</td>
              <td className="px-4 py-3 whitespace-nowrap">{item.stock}</td>
              <td className="px-4 py-3 whitespace-nowrap">{item.sold}</td>
              <td className="px-4 py-3 whitespace-nowrap">{item.vendor}</td>
              <td className="px-4 py-3 whitespace-nowrap">
                <button className="transition duration-300 ease-in-out transform hover:scale-105 text-Green" onClick={() => onViewClick(item)}>
                  View
                </button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
        <TablePagination
        currentPage={approvedCurrentPage}
        setCurrentPage={setApprovedCurrentPage}
        totalPages={approvedTotalPages}
      />
      </section>

      {/* Pending Products Section */}
      <section className="p-4 bg-white rounded-[10px] w-fit mb-5">
        <h2 className="font-semibold text-[#F18805] text-xl pb-3">Pending Products</h2>
        <table className="table-auto border-collapse my-2 mx-2 w-full">
          <thead>
            <tr className="text-sm font-medium bg-Green text-white  justify-around space-x-4">
              <th className="px-3 py-3 whitespace-nowrap rounded-tl-lg rounded-bl-lg">Product name</th>
              <th className="px-3 py-3 whitespace-nowrap">Category</th>
              <th className="px-3 py-3 whitespace-nowrap">Price</th>
              <th className="px-3 py-3 whitespace-nowrap">In stock</th>
              <th className="px-3 py-3 whitespace-nowrap">Vendor</th>
              <th className="px-3 py-3 whitespace-nowrap rounded-tr-lg rounded-br-lg"></th>
            </tr>
          </thead>
          <tbody className="font-medium text-xs text-[#555657] divide-y divide-[#E5E7EB]">
          {pendingCurrentData.map((item, index) => (
            <tr key={index}>
              <td className="inline-flex gap-1 px-3 py-3 whitespace-nowrap">
                <img src={item.imgSrc} alt={`Image of ${item.name}`} className="w-[50px]" />
                <p className='self-center'>{item.name}</p>
              </td>
              <td className="px-4 py-3 whitespace-nowrap">{item.category}</td>
              <td className="px-4 py-3 whitespace-nowrap">{item.price}</td>
              <td className="px-4 py-3 whitespace-nowrap">{item.stock}</td>
              <td className="px-4 py-3 whitespace-nowrap">{item.vendor}</td>
              <td className='flex gap-1.5 py-3 px-3'>
                <button className='text-white bg-Green rounded p-[7px] transition duration-300 ease-in-out transform hover:scale-105'>Accept</button>
                <button className='text-white bg-[#960200] rounded p-[7px]  transition duration-300 ease-in-out transform hover:scale-105'>Deny</button>
              </td>
              <td className="px-3 py-3 whitespace-nowrap">
                <button className="transition duration-300 ease-in-out transform hover:scale-105 text-Green">
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

ProductTable.propTypes = {
    onViewClick: PropTypes.func.isRequired,
  };
  
