
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */

"use client"

import Image from "next/image";
import { useState } from "react";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";




function createData(
  id: number,
  url: string,
  title: string,
  date: string,
  weekDay: string,
  time: string,
  address: string,
  collection: string
) {
  return { id, url, title, date, weekDay, time, address, collection }
}
const sliderData = [
  createData(1, "https://i.ibb.co/sJQvrYQ/collection-1.jpg", "Las Vegas Aviators", "OCT 15", "SUN", "4:30", "Las Vegas Ballpark, Las Vegas, Nevada", "Take Flight Collection"),
  createData(2, "https://i.ibb.co/tx1rYf4/collection-2.jpg", "Sacramento River Cats", "OCT 15", "SUN", "4:30", "Sutter Health Park, Sacramento, California", "Orange Collection"),
  createData(3, "https://i.ibb.co/sJQvrYQ/collection-1.jpg", "Las Vegas Aviators", "OCT 15", "SUN", "4:30", "Las Vegas Ballpark, Las Vegas, Nevada", "Take Flight Collection"),
  createData(4, "https://i.ibb.co/tx1rYf4/collection-2.jpg", "Sacramento River Cats", "OCT 15", "SUN", "4:30", "Sutter Health Park, Sacramento, California", "Orange Collection"),
  createData(5, "https://i.ibb.co/sJQvrYQ/collection-1.jpg", "Las Vegas Aviators", "OCT 15", "SUN", "4:30", "Las Vegas Ballpark, Las Vegas, Nevada", "Take Flight Collection"),
  createData(6, "https://i.ibb.co/tx1rYf4/collection-2.jpg", "Sacramento River Cats", "OCT 15", "SUN", "4:30", "Sutter Health Park, Sacramento, California", "Orange Collection")

]



const CollectionCard = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [firstIndex, setFirstIndex] = useState<number>(0)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [lastIndex, setLastIndex] = useState<number>(3)
// eslint-disable-next-line react-hooks/rules-of-hooks
 const [ startIndex, setStartIndex] = useState<number>(0)
 // eslint-disable-next-line react-hooks/rules-of-hooks
 const [position, setPosition] = useState<number>(1) 

  const previousSlide = () => {
    const isFirstSlide = firstIndex === 0
    const isThirdSlide = lastIndex === 3
    const newFirstIndex = isFirstSlide ? sliderData.length - 3 : firstIndex - 1;
    const newLastIndex = isThirdSlide ? sliderData.length : lastIndex - 1
    setFirstIndex(newFirstIndex)
    setLastIndex(newLastIndex)

  }

  const nextSlide = () => {
    const isLastSlide = firstIndex === sliderData.length - 3
    const isThirdSlide = lastIndex === sliderData.length
    const newFirstIndex = isLastSlide ? 0 : firstIndex + 1;
    const newLastIndex = isThirdSlide ? 3 : lastIndex + 1;
    setFirstIndex(newFirstIndex)
    setLastIndex(newLastIndex)
  }

  const previousSlideSm = ()=>{

    const isFirstSlide = startIndex === 0;
    const isFirstPosition = position === 1;
    const newFirstSlide = isFirstSlide ? sliderData.length - 1 : startIndex - 1;
    const newFirstPosition = isFirstPosition ? sliderData.length : position - 1
    setStartIndex(newFirstSlide);
    setPosition(newFirstPosition)
  }

  const nextSlideSm = ()=>{
    const isLastSlide = startIndex === sliderData.length - 1
    const isLastPosition = position === sliderData.length
    const newFirstSlide = isLastSlide ? 0 : startIndex + 1;
    const newFirstPosition = isLastPosition ? 1 : position + 1;
    setStartIndex(newFirstSlide);
    setPosition(newFirstPosition)
  }


  return (
    <div>
      <div className="max-w-[1000px] h-[500px] mx-auto px-44 mt-10 relative hidden lg:grid lg:grid-cols-3 lg:gap-3  ">

        {
          sliderData.slice(firstIndex, lastIndex).map(item =>
            <div key={item.id}>
              <div className="w-[200px] shadow-2xl duration-500 ">
                <div className="h-[320px] pt-3 w-[180px] overflow-hidden mx-auto shadow-xl">
                  <Image src={item.url} alt="card image" width={226} height={401} objectFit="contain" />
                </div>
                <div className="text-center p-2 text-xs  my-4 relative">
                  <div className="w-3 h-6 rounded-tr-full circleShadow  rounded-br-full bg-gray-200 absolute top-2 -left-0"></div>
                  <hr className=" border-dashed border-[1px] border-gray-400  my-3" />
                  <div className="w-3 h-6 rounded-tl-full rounded-bl-full bg-gray-200 absolute top-2 -right-0 circleShadow "></div>
                  <div className="px-2 ">
                    <p className="text-[14px]   my-2 font-semibold">{item.title}</p>
                    <p className=" text-[10px]  font-medium my-2 "><span className="mx-2 ">{item.date}</span>|<span className="mx-2 ">{item.weekDay}</span>|<span className="mx-2">{item.time}</span> PM</p>
                    <p className="mx-2 text-[10px]">{item.address}</p>
                    <button className="bg-black text-white w-full py-2 mt-3 ">{item.collection}</button>
                  </div>
                </div>
              </div>
            </div>)
        }
        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-10  text-2xl text-indigo-500 px-1 py-3 border-[1px] border-indigo-500 cursor-pointer">
          <SlArrowLeft onClick={previousSlide} size={20} />
        </div>
        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-10  text-2xl text-indigo-500 px-1 py-3 border-[1px] border-indigo-500 cursor-pointer">
          <SlArrowRight onClick={nextSlide} size={20} />
        </div>
      </div>
      <div className="max-w-[1200px] h-[500px] mx-auto  mt-10 relative grid grid-cols-1 lg:hidden ">

        {
          sliderData.slice(startIndex, position).map(item =>
            <div key={item.id}>
              <div className=" w-[257px] shadow-2xl duration-500 mx-auto ">
                <div className="h-[401px] w-[226px] overflow-hidden mx-auto shadow-xl">
                  <Image src={item.url} alt="card image" width={226} height={401} objectFit="contain" />
                </div>
                <div className="text-center p-2 text-xs  my-4 relative">
                  <div className="w-3 h-6 rounded-tr-full circleShadow  rounded-br-full bg-gray-200 absolute top-2 -left-0"></div>
                  <hr className=" border-dashed border-[1px] border-black  my-3" />
                  <div className="w-3 h-6 rounded-tl-full rounded-bl-full bg-gray-200 absolute top-2 -right-0 circleShadow "></div>
                  <div className="px-2">
                    <p className="text-lg my-2 font-semibold">{item.title}</p>
                    <p className=" text-xs font-medium my-2 "><span className="mx-2">{item.date}</span>|<span className="mx-2">{item.weekDay}</span>|<span className="mx-2">{item.time}</span> PM</p>
                    <p className="mx-3">{item.address}</p>
                    <button className="bg-black text-white w-full py-2 mt-3 ">{item.collection}</button>
                  </div>
                </div>
              </div>
            </div>)
        }
        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-10  text-2xl text-indigo-500 px-1 py-3 border-[1px] border-indigo-500 cursor-pointer">
          <SlArrowLeft onClick={previousSlideSm} size={20} />
        </div>
        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-10  text-2xl text-indigo-500 px-1 py-3 border-[1px] border-indigo-500 cursor-pointer">
          <SlArrowRight onClick={nextSlideSm} size={20} />
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
