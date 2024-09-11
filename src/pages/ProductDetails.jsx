import PropTypes from 'prop-types';
import { useState } from 'react';
import CustomerReview from '../component/CustomerReview';

export default function ProductDetails({ product, onBackClick }) {
  const [selectedOption, setSelectedOption] = useState('monthly');
  
  return (
    <div className="poppins">
      <button onClick={onBackClick} className='text-Green'><i className='bx bx-arrow-back pr-2 transform hover:scale-105'></i>Back</button>
      <h1 className="text-[#555657] font-semibold text-2xl leading-[48px] my-4">Product Details</h1>
      <div className="flex gap-2">
        <img src={product.imgSrc} alt="Beans product" className='h-[300px] w-[400px]'/>
        <div className="text-[#343434] ml-4">
          <h5 className="font-semibold pb-2 lg:pb-8 text-xs">
            <span className="text-[#4BAF47]">Sold by: </span>{product.vendor}
          </h5>
          <h3 className="hidden lg:block font-semibold text-xl">
            {product.name}
          </h3>
          <div className="hidden md:flex gap-[6px] my-6">
            <i className="bx bx-sm text-[#4BAF47] bxs-star"></i>
            <i className="bx bx-sm text-[#4BAF47] bxs-star"></i>
            <i className="bx bx-sm text-[#4BAF47] bxs-star"></i>
            <i className="bx bx-sm text-[#4BAF47] bxs-star"></i>
            <i className="bx bx-sm text-[#4BAF47] bx-star"></i>
            <p className="font-normal text-base">12 Reviews</p>
          </div>
          <p className="hidden md:block font-semibold text-2xl">{product.price}</p>
          <div className="flex gap-1.5 py-4">
            <button className='text-white bg-Green rounded p-[7px] transition duration-300 ease-in-out transform hover:scale-105'>Accept</button>
            <button className='text-white bg-[#960200] rounded p-[7px] transition duration-300 ease-in-out transform hover:scale-105'>Deny</button>
          </div>
        </div>
      </div>

      {/* Customer review section */}
      <div className='pt-8'>
        <CustomerReview showWriteReview={false}/>
      </div>
      
      {/* Graph section */}
      <div className="bg-[#FFFFFF] py-3 px-4 w-[480px] rounded-[10px]">
        <div className="flex justify-between font-semibold">
          <h2 className="text-xl text-[#555657]">Sales Summary</h2>
          <div className="flex">
            <button
              className={`transition duration-300 ease-in-out transform hover:scale-105 border border-Green text-Green py-2 px-[10px] cursor-pointer rounded-l-lg text-base ${
                selectedOption === 'monthly' ? 'bg-Green text-white' : ''
              }`}
              onClick={() => setSelectedOption('monthly')}
            >
              Monthly
            </button>
            <button
              className={`transition duration-300 ease-in-out transform hover:scale-105 border border-Green text-Green py-2 px-[10px] cursor-pointer rounded-r-lg text-base ${
                selectedOption === 'weekly' ? 'bg-Green text-white' : ''
              }`}
              onClick={() => setSelectedOption('weekly')}
            >
              Weekly
            </button>
          </div>
        </div>
        {selectedOption === 'monthly' && (
        <img
          src="/monthlygraph.png"
          alt="Graph of sales for the month"
          className="mt-4 w-[300px] h-[300px]"
        />
        )}
        {selectedOption === 'weekly' && (
          <img
            src="/weeklygraph.png"
            alt="Graph of sales for the week"
            className="mt-4 w-[300px] h-[300px]"
          />
        )}
      </div>
    </div>
  );
}

ProductDetails.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    vendor: PropTypes.string.isRequired
  }).isRequired,
  onBackClick: PropTypes.func.isRequired,
};
