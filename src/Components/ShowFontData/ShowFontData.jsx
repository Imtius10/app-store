import React from 'react';
import star from '../../assets/icon-ratings.png';
import download from '../../assets/icon-downloads.png';
import { Link } from 'react-router';

const ShowFontData = ({ single }) => {
  const { companyName, ratingAvg, image, description, downloads, id, title } = single;

  return (
    <Link to={`/appdetails/${id}`}>
      <div className='card w-[348px] h-[435px]'>
        <div className='p-5 bg-gray-100 flex justify-center items-center '>
          <img className='w-50 h-50 object-cover   rounded-xl' src={image} alt={title} />
        </div>
        <p className='text-center text-lg font-medium mt-2'>{title}</p>
        <div className="flex justify-between px-4 mt-3">
          <span className="flex items-center gap-2 bg-[#F1F5E8] text-[#00D390] p-1 rounded-sm">
            {downloads}
            <img className="w-[16px] h-[16px]" src={download} alt="" />
          </span>
          <span className="flex items-center gap-2 bg-[#F1F5E8] text-[#FF8811] p-1 rounded-sm">
            {ratingAvg}
            <img className="w-[16px] h-[16px]" src={star} alt="" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ShowFontData;
