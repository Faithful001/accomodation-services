import axios from "axios";
import { useEffect, useState } from "react";
import Cards from "./Cards";
const Home = () => {
    const [cardLists, setCardLists] = useState([]);

    const options = {
      method: 'GET',
      url: 'https://apidojo-booking-v1.p.rapidapi.com/properties/list-by-map',
      params: {
        arrival_date: '<REQUIRED>',
        departure_date: '<REQUIRED>',
        room_qty: '1',
        guest_qty: '1',
        bbox: '14.291283,14.948423,120.755688,121.136864',
        search_id: 'none',
        children_age: '11,5',
        price_filter_currencycode: 'USD',
        categories_filter: 'class::1,class::2,class::3',
        languagecode: 'en-us',
        travel_purpose: 'leisure',
        children_qty: '2',
        order_by: 'popularity'
      },
      headers: {
        'X-RapidAPI-Key': 'cd4eb179edmsh3066c02c1ed48dfp16e583jsn3e2fed882a56',
        'X-RapidAPI-Host': 'apidojo-booking-v1.p.rapidapi.com'
      }
    };

      useEffect(()=>{
      axios.request(options)
      .then(res=>setCardLists(res.data))
      .catch(err=>console.log(err));
      // console.log(res);
    }, [])
    return ( 
        <div className="home">
                
            {cardLists && <Cards cardLists={cardLists}/>}
                
        </div>
     );
}
 
export default Home;