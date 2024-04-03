import CollectionCard from "./collectionCard";


const Collection = () => {
    return (
        <div className="lg:px-6  py-32">
             <h1 className="text-center font-bold text-4xl   my-4 ">Collection Spotlight</h1>
             <h1 className="text-center font-medium text-sm my-6 w-[325px] md:w-[525px] lg:w-[910px] mx-auto mb-8 ">Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</h1>
             <CollectionCard></CollectionCard>
        </div>
    );
};

export default Collection;