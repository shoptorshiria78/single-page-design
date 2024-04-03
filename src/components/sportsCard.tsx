// generate sports card data

import Image from "next/image";



function createData(
    id: number,
    img: string,
    title: string,
    events: number,
    sports: string
) {
    return { id, img, title, events, sports }
}

const sportsData = [
    createData(1, "https://i.ibb.co/wg16w0K/sport-Card-1.png", "Sacramento River Cats", 48, "Baseball"),
    createData(2, "https://i.ibb.co/bmNb79Y/sport-Card-2-4.png", "Las Vegas Aviators", 28, "Baseball"),
    createData(3, "https://i.ibb.co/bLvDKTB/sport-Card-3.png", "New Jersey devils", 15, "Ice Hockey"),
    createData(4, "https://i.ibb.co/bmNb79Y/sport-Card-2-4.png", "Las Vegas Aviators", 28, "Baseball"),
]

const SportsCard = () => {
    return (
        <div className="p-6">
            <h1 className="text-start font-bold text-lg border-b-2 w-14 border-blue-600 mb-6 ">Sports</h1>
         
            <div className="flex flex-col md:flex-row  gap-2">
                <div className="grid grid-cols-1  lg:grid-cols-4 gap-3">
                    {
                        sportsData.map(item =>
                            <div key={item.id}>
                                <div className="bg-white w-[190px] mx-auto p-2 shadow-lg">
                                    <div className="h-[285px] w-[173px] overflow-hidden ">
                                        <Image src={item.img} alt="person" width={247} height={100} />
                                    </div>
                                    <p className="font-semibold text-sm my-4">{item.title}</p>
                                    <div className="flex justify-between items-center bg-[#F7F7F8] p-2 rounded">
                                        <div>
                                            <p className="text-xs text-gray-600">Total Events</p>
                                            <p className="text-xs font-semibold">{item.events} Events</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-600">Sport</p>
                                            <p className="text-sm font-semibold">{item.sports}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="bg-white w-[190px] mx-auto  md:mx-0 p-2 shadow-lg">
                    <div className="relative">
                        <div className="h-[174px] w-[176px] overflow-hidden pr-[1px] ">
                            <Image src="https://i.ibb.co/yWBf7RX/add-1.png" alt="person" width={247} height={100} objectFit="cover" />

                        </div>
                        <div className="bg-black px-3 py-1 absolute top-0 right-0">
                            <p className="text-white text-xs">Ad</p>
                        </div>
                    </div>
                    <div className="border-[1px] border-gray-400 h-[215px] ">
                        <p className="font-semibold my-2 text-[14px] mt-3 text-center">Advertisement title</p>

                        <p className="text-xs text-gray-600 px-2 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>


                </div>
            </div>
            <div className="w-full flex flex-col justify-center">
                <button className="bg-[#2C9CF0] text-white px-5 py-3 rounded-sm my-10 text-sm w-28 mx-auto"> See More</button>
            </div>

        </div>
    );
};

export default SportsCard;