
import CollectionCardDark from "./collectionCardDark";


const CollectionDark = () => {
    return (
        <div className="lg:px-6 bg-[#18282A] py-24 lg:w-[1000px] mx-auto">
             <h1 className="text-center font-bold text-4xl text-white my-4 ">Collection Spotlight</h1>
             <h1 className="text-center font-medium text-sm my-6 w-[325px] md:w-[525px] lg:w-[910px] text-white mx-auto mb-8 ">Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</h1>
             <CollectionCardDark></CollectionCardDark>
        </div>
    );
};

export default CollectionDark;