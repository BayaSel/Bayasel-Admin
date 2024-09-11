import { useState } from "react";
import PropTypes from 'prop-types'

function CustomerReview({ showWriteReview }) {
  const [selectedOption, setSelectedOption] = useState("");
  const [textareaValue, setTextareaValue] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };

  return (
    <>
      <h3 className="font-semibold text-xl my-3 font-poppins text-[#343434]">
        CustomerReview
      </h3>
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="py-3 basis-3/5">
          <section className="flex flex-col lg:flex-row text-[#343434] gap-36">
            <div className="gap-2 mb-3">
              <div className="flex text-black gap-3">
                <h1 className="text-xl lg:text-[90px] lg:leading-[135px] font-normal">
                  4.5
                </h1>
                <p className="text-sm lg:text-base self-center">out of 5</p>
              </div>
              <div className="flex gap-[6px] my-3 lg:self-center">
                <i className="bx text-[#4BAF47] bxs-star"></i>
                <i className="bx text-[#4BAF47] bxs-star"></i>
                <i className="bx text-[#4BAF47] bxs-star"></i>
                <i className="bx text-[#4BAF47] bxs-star"></i>
                <i className="bx text-[#4BAF47] bxs-star"></i>
              </div>
              <p className="hidden lg:block font-normal text-base py-3">
                2 Reviews
              </p>
            </div>
            <div className="text-black text-xs flex flex-col gap-6 font-medium">
              <div className="flex gap-1">
                <p>5 star</p>
                <img
                  src="/reviewed.png"
                  alt="percentage of review"
                  className="w-[200px] lg:w-[140px] h-[6px] self-center"
                />
                <p>1</p>
              </div>
              <div className="flex gap-1">
                <p>4 star</p>
                <img
                  src="/reviewed.png"
                  alt="percentage of review"
                  className="w-[200px] lg:w-[140px] h-[6px] self-center"
                />
                <p>1</p>
              </div>
              <div className="flex gap-1">
                <p>3 star</p>
                <img
                  src="/reviewed0.png"
                  alt="percentage of review"
                  className="w-[200px] lg:w-[140px] h-[6px] self-center"
                />
                <p>0</p>
              </div>
              <div className="flex gap-1">
                <p>2 star</p>
                <img
                  src="/reviewed0.png"
                  alt="percentage of review"
                  className="w-[200px] lg:w-[140px] h-[6px] self-center"
                />
                <p>0</p>
              </div>
              <div className="flex gap-1">
                <p>1 star</p>
                <img
                  src="/reviewed0.png"
                  alt="percentage of review"
                  className="w-[200px] lg:w-[140px] h-[6px] self-center"
                />
                <p>0</p>
              </div>
            </div>
          </section>
          <section className="my-4 flex flex-col text-[#343434] lg:shadow-md bg-[#ffffff] p-3 rounded">
            <button className="text-[#4BAF47] transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer self-end">
              See all
            </button>
            <div className="flex flex-col lg:flex-row gap-2">
              <div className="flex gap-3">
                <button className="bg-[#4BAF47] text-white text-lg w-10 h-10 rounded-[48px]">
                  P
                </button>
                <div className="text-xs">
                  <p className="p-1">Patrick Chukwudifu</p>
                  <p className="text-[#C4C4C4] p-1">October, 1 2024</p>
                </div>
              </div>

              <div>
                <div className="flex gap-[6px] mb-1 basis-1/2">
                  <i className="bx text-[#4BAF47] bxs-star"></i>
                  <i className="bx text-[#4BAF47] bxs-star"></i>
                  <i className="bx text-[#4BAF47] bxs-star"></i>
                  <i className="bx text-[#4BAF47] bxs-star"></i>
                  <i className="bx text-[#4BAF47] bx-star"></i>
                </div>
                <p className="text-xs">Lovely, just the way it is.</p>
              </div>
            </div>
            <div className="border-b border-[#c4c4c4] pb-3 lg:border-b-0 my-4"></div>
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex gap-3">
                <button className="bg-[#4BAF47] text-white text-lg w-10 h-10 rounded-[48px]">
                  F
                </button>
                <div className="text-xs">
                  <p className="p-1">Faith Anazodo</p>
                  <p className="text-[#C4C4C4] p-1 whitespace-nowrap">October, 1 2024</p>
                </div>
              </div>

              <div>
                <div className="flex gap-[6px] mb-1">
                  <i className="bx text-[#4BAF47] bxs-star"></i>
                  <i className="bx text-[#4BAF47] bxs-star"></i>
                  <i className="bx text-[#4BAF47] bxs-star"></i>
                  <i className="bx text-[#4BAF47] bxs-star"></i>
                  <i className="bx text-[#4BAF47] bxs-star"></i>
                </div>
                <p className="text-xs basis-1/2 whitespace-nowrap">
                  Exactly what i ordered for us what i get, so love bayasel
                  right now
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Write a review section */}
        {showWriteReview && (
        <div className="font-poppins text-[#343434] text-base lg:basis-2/5">
          <h4 className="font-semibold">Write a review</h4>
          <form className="py-6">
            <label
              htmlFor="options"
              className="block font-normal text-[#343434] mb-2"
            >
              Rating
            </label>
            <select
              id="options"
              value={selectedOption}
              onChange={handleChange}
              className="block w-full p-2 border border-[#C4C4C4] text-[#343434] rounded-md focus:outline-none focus:ring-[#4BAF47] focus:border-[#4BAF47] sm:text-sm mb-2"
            >
              <option value="" disabled>
                5 - Excellent
              </option>
              <option value="excellent">5 - Excellent</option>
              <option value="verygood">4 - Very Good</option>
              <option value="good">3 - Good </option>
              <option value="fair">2 - Fair</option>
              <option value="poor">1 - Poor</option>
            </select>

            <label
              htmlFor="options"
              className="block font-normal text-[#343434] my-2"
            >
              Review
            </label>

            <textarea
              id="textarea"
              value={textareaValue}
              onChange={handleTextareaChange}
              placeholder="Leave a review here"
              className="block w-full h-52 p-2 border border-[#C4C4C4] rounded-md focus:outline-none focus:ring-[#4BAF47] focus:border-[#4BAF47] sm:text-sm"
            />
          </form>
        </div>
        )}
      </div>
    </>
  );
}

CustomerReview.propTypes = {
  showWriteReview: PropTypes.bool,
};

CustomerReview.defaultProps = {
  showWriteReview: true,
};

export default CustomerReview;
