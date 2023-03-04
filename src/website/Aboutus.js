import React from 'react';
// import { FaQuoteLeft } from 'react-icons/fa';

const Aboutus = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="rounded-lg overflow-hidden">
            <img src="https://via.placeholder.com/500x300" alt="Team member" />
            <div className="p-6">
              <h3 className="text-lg font-medium mb-2">John Doe</h3>
              <p className="text-gray-600 mb-4">Co-Founder</p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex items-center">
                {/* <FaQuoteLeft size={20} className="text-gray-400 mr-2" /> */}
                <p className="text-sm font-medium text-gray-600">What we do is more than just a job. It's a passion.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="rounded-lg overflow-hidden">
            <img src="https://via.placeholder.com/500x300" alt="Team member" />
            <div className="p-6">
              <h3 className="text-lg font-medium mb-2">Jane Smith</h3>
              <p className="text-gray-600 mb-4">Co-Founder</p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex items-center">
                {/* <FaQuoteLeft size={20} className="text-gray-400 mr-2" /> */}
                <p className="text-sm font-medium text-gray-600">We believe in pushing boundaries and exceeding expectations.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="rounded-lg overflow-hidden">
            <img src="https://via.placeholder.com/500x300" alt="Team member" />
            <div className="p-6">
              <h3 className="text-lg font-medium mb-2">Bob Johnson</h3>
              <p className="text-gray-600 mb-4">Marketing Director</p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex items-center">
                {/* <FaQuoteLeft size={20} className="text-gray-400 mr-2" /> */}
                <p className="text-sm font-medium text-gray-600">We are dedicated to delivering the best customer experience possible.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
