const Cards = ({data}) => {
    return ( 
        <div className="cards">
            <div className="flex flex-wrap justify-center items-center">
            {data.map((data)=>(
                <div className="cards-preview w-1/3 px-2" key={data.listing.id}>
                                      
                    <div className="rounded-md h-72 w-96 m-3.5" >
                        <img className="rounded-md h-72 w-96 m-3.5" src={data.listing.contextualPictures[data.listing.contextualPictures.length - 1].picture} alt="" />
                    </div>
                    <div className="m-3.5">
                    <p className="ml-2.5">{data.listing.title}</p>
                    <p className="ml-2.5">{data.pricingQuote.structuredStayDisplayPrice.primaryLine.accessibilityLabel}</p>
                    </div>
                    
                </div>
                ))}
            </div>
        </div>


        // </div>
     );
}
 
export default Cards;