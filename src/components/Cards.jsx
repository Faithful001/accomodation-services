const Cards = ({cardLists}) => {
    return ( 
        <div className="cards">
            <div className="flex flex-wrap justify-center items-center">
            {cardLists.map((cardList)=>(
                <div className="cards-preview w-1/3 px-2" key={cardList[0].location_id}>
                    <div className="rounded-md h-72 w-96 bg-black m-3.5" ></div>
                    <div className="m-3.5">
                        <b>{cardList[0].name}</b><br/>
                        Stay with Eloy · Entrepreneur<br/>
                        Jul 11 – 16<br/>
                        $32 night
                    </div>
                </div>
                ))}
            </div>
        </div>


        // </div>
     );
}
 
export default Cards;