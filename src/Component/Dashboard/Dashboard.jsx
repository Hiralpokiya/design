import { useState } from "react";
import bulb from "../Image/Bulb.png";
import volume from "../Image/Volume.png";
import reload from '../Image/Reload.png';
import icon from '../Image/icon.png';
import icon2 from '../Image/Icon2.png';
import hyg from '../Image/hyg.png';
import flash from '../Image/flash.png'
const Dashboard = () => {

    const [isFlipped, setIsFlipped] = useState(false);
    const[isExpand , setIsExpand] = useState(false)

    const handleEx = () => {
      setIsExpand(!isExpand)
    }
    const handleFlip = () => {
      setIsFlipped(!isFlipped);
    };
  return (
    <>
      <div>
        <div className="mr-[700px]">
          <h2 className="text-[30px] text-blue-900 font-bold">
            Relations and functions (Mathematics)
          </h2>
        </div>
        <div className="flex gap-9 list-none m-[30px] text-[20px] ml-[500px] text-gray-600">
          <li className="text-blue-900 font-bold underline">Study</li>
          <li>Quiz</li>
          <li>Test</li>
          <li>Game</li>
          <li>Others</li>
        </div>

        <div
      className={`bg-blue-600 h-[300px] w-[600px] rounded-[50px] ml-[380px] relative ${
        isFlipped ? 'flip' : ''
      }`}
      onClick={handleFlip}
    >
      <div className="absolute top-0 left-0 ml-[30px] mt-[30px]">
        <img src={bulb} height="40px" width="40px" alt="Bulb" />
      </div>
      <div className="absolute top-0 right-0 mr-[30px] mt-[30px]">
        <img src={volume} height="40px" width="40px" alt="Volume" />
      </div>
      <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[25px] font-bold text-white">
        {isFlipped ? ' 5x + 12' : '9+6+7x-2x-3'}
      </p>
    </div>

    <div className="list-none">
 

      <div className="flex gap-9 list-none m-[30px] text-[20px] ml-[400px] text-gray-600">
      <li>
        <img src={reload}/>
      </li><li></li>
         <li>
          <img src={icon}/>
         </li>
         <li></li>
         <li>
          <img src={icon2}/>
         </li>
        </div>
    </div>
    <div className="flex m-[70px]">
      <div>

      <img src={hyg}/>
      </div>
      <div className="ml-[650px]">
        <img src={flash}/>
      </div>
      </div>
      <div className="mr-[1100px]">
        <div>
        <h2 className="text-[45px] font-bold text-blue-700 ">
          FAQ
        </h2>

        </div>
        <div className="ml-[70px]">
        <div className={`relative w-[700px] ${isExpand ? 'h-auto' : 'h-[50px]'} border-[1px] border-blue-700 rounded-lg transition-all duration-300 ease-in-out cursor-pointer`} onClick={handleEx}>
      <p className="mt-[10px] mr-[300px] font-bold">Can education flashcard use for all groups?</p>
      {isExpand && (
        <p className=" p-2">Yes education flashcard will be tailored to different age groups and living levels. There are</p>
      )}
    </div>  
    <div className={`relative w-[700px] ${isExpand ? 'h-auto' : 'h-[50px]'} border-[1px] border-blue-700 rounded-lg transition-all duration-300 ease-in-out mt-[30px] cursor-pointer`} onClick={handleEx}>
      <p className="mt-[10px] mr-[300px] font-bold">Can education flashcard use for all groups?</p>
      {isExpand && (
        <p className=" p-2">Yes education flashcard will be tailored to different age groups and living levels. There are</p>
      )}
    </div>  
    <div className={`relative w-[700px] ${isExpand ? 'h-auto' : 'h-[50px]'} border-[1px] border-blue-700 rounded-lg transition-all duration-300 ease-in-out mt-[30px] cursor-pointer`} onClick={handleEx}>
      <p className="mt-[10px] mr-[300px] font-bold">Can education flashcard use for all groups?</p>
      {isExpand && (
        <p className=" p-2">Yes education flashcard will be tailored to different age groups and living levels. There are</p>
      )}
    </div>  
        </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
