import { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import { GoPeople, GoMegaphone } from "react-icons/go";
import { GrUserAdmin } from "react-icons/gr";

// eslint-disable-next-line react/prop-types
export default function SideNav({ onLinkClick }) {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const currentPath = location.pathname.split('/').pop();
    setActiveLink(currentPath);
  }, [location.pathname]);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    onLinkClick && onLinkClick(); 
  };

  return (
    <div className="bg-[#FFFFFF] flex flex-col w-[260px] lg:w-[320px] space-y-4">
      <div className="px-4">
        <img src="/adminlogo.png" alt="Bayasel Logo"/>
      </div>
      
      <nav className='pb-12'>
        <Link 
          to='overview' 
          onClick={() => handleLinkClick('overview')} 
          className={`flex justify-between items-center gap-2.5 py-3 px-3 rounded-lg font-semibold text-[18px] lg:text-xl mx-2 transition duration-300 ease-in-out transform hover:scale-105 w-fit ${
            activeLink === 'overview' ? 'bg-[#608866] text-[#FFFFFF]' : 'hover:bg-[#608866] hover:text-[#FFFFFF]'
          }`}
        >
          <i className='bx bx-sm bx-category-alt bx-rotate-90' ></i> Overview
        </Link>
        
        <Link 
          to='product' 
          onClick={() => handleLinkClick('product')} 
          className={`flex justify-between items-center gap-2.5 py-3 px-3 rounded-lg font-semibold text-[18px] lg:text-xl mx-2 transition duration-300 ease-in-out transform hover:scale-105 w-fit ${
            activeLink === 'product' ? 'bg-[#608866] text-[#FFFFFF]' : 'hover:bg-[#608866] hover:text-[#FFFFFF]'
          }`}
        >
          <i className='bx bx-sm bx-purchase-tag bx-rotate-90' ></i> Product
        </Link>
        
        <Link 
          to='order' 
          onClick={() => handleLinkClick('order')} 
          className={`flex justify-between items-center gap-2.5 py-3 px-3 rounded-lg font-semibold text-[18px] lg:text-xl mx-2 transition duration-300 ease-in-out transform hover:scale-105 w-fit ${
            activeLink === 'order' ? 'bg-[#608866] text-[#FFFFFF]' : 'hover:bg-[#608866] hover:text-[#FFFFFF]'
          }`}
        >
          <i className='bx bx-sm bx-cart'></i> Order
        </Link>
        
        <Link 
          to='customer' 
          onClick={() => handleLinkClick('customer')} 
          className={`flex justify-between items-center gap-2.5 py-3 px-3 rounded-lg font-semibold text-[18px] lg:text-xl mx-2 transition duration-300 ease-in-out transform hover:scale-105 w-fit ${
            activeLink === 'customer' ? 'bg-[#608866] text-[#FFFFFF]' : 'hover:bg-[#608866] hover:text-[#FFFFFF]'
          }`}
        >
          <GoPeople /> Customer
        </Link>
        
        <Link 
          to='analytics' 
          onClick={() => handleLinkClick('analytics')} 
          className={`flex justify-between items-center gap-2.5 py-3 px-3 rounded-lg font-semibold text-[18px] lg:text-xl mx-2 transition duration-300 ease-in-out transform hover:scale-105 w-fit ${
            activeLink === 'analytics' ? 'bg-[#608866] text-[#FFFFFF]' : 'hover:bg-[#608866] hover:text-[#FFFFFF]'
          }`}
        >
          <i className='bx bx-sm bx-line-chart'></i> Analytics and Report
        </Link>
        
        <Link 
          to='promotions' 
          onClick={() => handleLinkClick('promotions')} 
          className={`flex justify-between items-center gap-2.5 py-3 px-3 rounded-lg font-semibold text-[18px] lg:text-xl mx-2 transition duration-300 ease-in-out transform hover:scale-105 w-fit ${
            activeLink === 'promotions' ? 'bg-[#608866] text-[#FFFFFF]' : 'hover:bg-[#608866] hover:text-[#FFFFFF]'
          }`}
        >
          <GoMegaphone /> Promotions
        </Link>
        
        <Link 
          to='sub-admin' 
          onClick={() => handleLinkClick('sub-admin')} 
          className={`flex justify-between items-center gap-2.5 py-3 px-3 rounded-lg font-semibold text-[18px] lg:text-xl mx-2 transition duration-300 ease-in-out transform hover:scale-105 w-fit ${
            activeLink === 'sub-admin' ? 'bg-[#608866] text-[#FFFFFF]' : 'hover:bg-[#608866] hover:text-[#FFFFFF]'
          }`}
        >
          <GrUserAdmin /> Sub-admin
        </Link>
        
        <Link 
          to='content-manage' 
          onClick={() => handleLinkClick('content-manage')} 
          className={`flex justify-between items-center gap-2.5 py-3 px-3 rounded-lg font-semibold text-[18px] lg:text-xl mx-2 transition duration-300 ease-in-out transform hover:scale-105 w-fit ${
            activeLink === 'content-manage' ? 'bg-[#608866] text-[#FFFFFF]' : 'hover:bg-[#608866] hover:text-[#FFFFFF]'
          }`}
        >
          <i className='bx bx-sm bx-folder-plus'></i> Content management
        </Link>
        
        <Link 
          to='settings' 
          onClick={() => handleLinkClick('settings')} 
          className={`flex justify-between items-center gap-2.5 py-3 px-3 rounded-lg font-semibold text-[18px] lg:text-xl mx-2 transition duration-300 ease-in-out transform hover:scale-105 w-fit ${
            activeLink === 'settings' ? 'bg-[#608866] text-[#FFFFFF]' : 'hover:bg-[#608866] hover:text-[#FFFFFF]'
          }`}
        >
          <i className='bx bx-sm bx-cog'></i> Settings
        </Link>
      </nav>
    </div>
  );
}
