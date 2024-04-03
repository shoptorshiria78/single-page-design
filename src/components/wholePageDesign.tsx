/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */

"use client"

import React, { useState } from 'react';
import SportsCard from './sportsCard';
import Collection from './collection';
import SportsCardDark from './sportsCardDark';
import CollectionDark from './collectionDark';
import { FiSun, FiMoon } from "react-icons/fi"

const WholePageDesign = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [dark, setDark] = useState(false)

    const handleDarkMode = () => {
        setDark(true)
    }
    const handleLightMode = () => {
        setDark(false)
    }

    return (
        <div>
            {
                dark ? <>
                    <FiMoon className='w-full h-16 bg-white py-4 text-center' onClick={handleLightMode} />
                    <div>
                        <SportsCard></SportsCard>
                        <Collection></Collection>
                    </div></>
                    : <>
                        <FiSun className='w-full h-16 bg-black text-white py-4 text-center' onClick={handleDarkMode} />

                        <div className="bg-[#292B32]">
                            <SportsCardDark></SportsCardDark>
                            <CollectionDark></CollectionDark>
                        </div>
                    </>

            }




        </div>
    );
};

export default WholePageDesign;