import React from 'react';
import star from '../../assets/icon-ratings.png'
import download from '../../assets/icon-downloads.png'
import { Link } from 'react-router';
const ShowFontData = ({single}) => {
    const {companyName,ratingAvg,image,description,downloads,id}=single
    return (
      <Link to={`/appdetails/${id}`}>
         <div className='card w-[348px] h-[435px]'>
        <img src={image} alt="" />
        <p>{description}</p>
    <div className="flex justify-between">
  <span className="flex items-center gap-2 bg-[#F1F5E8] text-[#00D390] p-1 rounded-sm">
    {downloads}
    <img className="w-[16px] h-[16px] " src={download} alt="" />
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