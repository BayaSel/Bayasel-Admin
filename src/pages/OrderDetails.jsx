import PropTypes from 'prop-types';
//import { useState } from 'react';


export default function OrderDetails({ order, onBackClick }) {
  const parseCurrency = (value) => {
    return parseFloat(value.replace(/[^0-9.-]+/g, ''));
  };

  const price = parseCurrency(order.price);
  const deliveryFee = parseCurrency(order.deliveryFee);
  const discount = parseCurrency(order.discount);

  const total = price + deliveryFee - discount;

  
  return (
    <div className="poppins">
      <button onClick={onBackClick} className='text-Green text-sm pb-3'><i className='bx bx-arrow-back pr-2 transform hover:scale-105'></i>Back</button>
      <h1 className="text-[#555657] text-2xl leading-[48px] font-semibold mb-4">ORDER PAGE</h1>
      <div className="flex gap-2">
        <img src="/biggerbeans.png" alt="Beans image" className='h-[300px] w-[400px]'/>
        <div className="text-[#343434] ml-4">
          <h5 className="font-semibold pb-2 lg:pb-8 text-xs">
            <span className="text-[#4BAF47]">Sold by: </span>{order.vendor}
          </h5>
          <h3 className="hidden lg:block font-semibold text-xl">
            Oloyin Beans
          </h3>
          <div className="hidden md:flex gap-[6px] my-6">
            <i className="bx bx-sm text-[#4BAF47] bxs-star"></i>
            <i className="bx bx-sm text-[#4BAF47] bxs-star"></i>
            <i className="bx bx-sm text-[#4BAF47] bxs-star"></i>
            <i className="bx bx-sm text-[#4BAF47] bxs-star"></i>
            <i className="bx bx-sm text-[#4BAF47] bx-star"></i>
            <p className="font-normal text-base">12 Reviews</p>
          </div>
          <p className="hidden md:block font-semibold text-2xl">{order.price}</p>
          <p className='text-[#626364] text-sm pt-4 font-semibold'>Chat with Vendor</p>
          <button className='text-white bg-Green rounded p-[7px] transition duration-300 ease-in-out transform hover:scale-105 my-2'>Message</button>
        </div>
      </div>
      
      {/* order details section */}
      <h1 className="text-[#555657] text-xl leading-[40px] mt-8">Order Details</h1>
      <div className='relative w-[530px]'>
      <img src="/paidTag.png" alt="paid tag" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-auto  w-[170px] z-10"  />
      <section  className="px-3 py-4 text-[#555657] bg-white rounded-[10px] mt-2 space-y-3 relative z-0">
        <div className="flex justify-between">
          <p>Transaction Date</p>
          <p>{order.date}</p>
        </div>
        <div className="flex justify-between">
          <p>Order ID</p>
          <p>{order.orderNo}</p>
        </div>
        <div className="flex justify-between">
          <p>Estimated Arrival Date</p>
          <p>{order.date}</p>
        </div>
        <div className="flex justify-between font-semibold pb-2 border-b border-[#BABBBB]">
          <p>{`Customer's Name`}</p>
          <p>{order.customerName}</p>
        </div>
        
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>{order.price}</p>
        </div>
        <div className="flex justify-between">
          <p>Delivery Fee</p>
          <p>{order.deliveryFee}</p>
        </div>
        <div className="flex justify-between">
          <p>Discount</p>
          <p>{order.discount}</p>
        </div>
        <div className="flex justify-between font-semibold">
          <p>Grand Total</p>
          <p>${total}</p>
        </div>
      </section>
      </div>

      {/* Order Tracking Section */}
      <h1 className="text-[#555657] text-xl leading-[40px] mt-8">Order Tracking</h1>
      <section className="px-3 py-4 w-[570px] text-[#555657] bg-white rounded-[10px] mt-2 space-y-3 relative z-0">
        <div className="flex justify-between font-semibold pb-3 border-b border-[#E2E2E3]">
          <p>Order ID</p>
          <p>{order.orderNo}</p>
        </div>
        <div className="flex justify-between pt-2">
          <div className="flex gap-1">
            <img src="/trackCheck.png" alt="tracked" />
            <p className='pt-1'>Rider accepted your order</p>
          </div>
          <p className='pt-1'>11:32am</p>
        </div>
        <div className="flex justify-between mt-0 pt-0">
          <div className="flex gap-1">
            <div className='flex flex-col'>
              <img src="/trackcircle.png" alt="tracking" />
              <img src="/line.png" alt="tracking" className='self-center w-[1px] h-[42px]'/>
            </div>
            <p className='pt-1'>Vendor is preparing your order</p>
          </div>
          <p className='pt-1'>-</p>
        </div>
        <div className="flex justify-between mt-0 pt-0">
          <div className="flex gap-1">
            <div className='flex flex-col'>
              <img src="/trackcircle.png" alt="tracking" />
              <img src="/line.png" alt="tracking" className='self-center w-[1px] h-[42px]'/>
            </div>
            <p className='pt-1'>Rider is ready to pick up your order</p>
          </div>
          <p className='pt-1'>-</p>
        </div>
        <div className="flex justify-between mt-0 pt-0">
          <div className="flex gap-1">
            <div className='flex flex-col'>
              <img src="/trackcircle.png" alt="tracking" />
              <img src="/line.png" alt="tracking" className='self-center w-[1px] h-[42px]'/>
            </div>
            <p className='pt-1'>Rider is on his way</p>
          </div>
          <p className='pt-1'>-</p>
        </div>
        <div className="flex justify-between mt-0 pt-0">
          <div className="flex gap-1">
            <div className='flex flex-col'>
              <img src="/trackcircle.png" alt="tracking" />
              <img src="/line.png" alt="tracking" className='self-center w-[1px] h-[42px]'/>
            </div>
            <p className='pt-1'>Rider has arrived</p>
          </div>
          <p className='pt-1'>-</p>
        </div>
        <div className="flex justify-between mt-0 pt-0">
          <div className="flex gap-1">
              <img src="/trackcircle.png" alt="tracking" />
            <p className='pt-1'>Your order has been delivered successfully.</p>
          </div>
          <p className='pt-1'>-</p>
        </div>
      </section>
    </div>
  );
}

OrderDetails.propTypes = {
  order: PropTypes.shape({
    customerName: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    vendor: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    orderNo: PropTypes.string.isRequired,
    deliveryFee: PropTypes.string.isRequired,
    discount: PropTypes.string.isRequired
  }).isRequired,
  onBackClick: PropTypes.func.isRequired,
};
