// import { DateRange } from 'react-date-range';
import {useState} from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import Home from './Home';


const NavBar = ({cardLists}) => {
    // const [date, setDate] = useState([
    //     {
    //       startDate: new Date(),
    //       endDate: null,
    //       key: 'selection'
    //     }
    //   ]);

    const [query, setQuery] = useState("");

    const search = (data)=>{
        return data.filter(card => card.listing.title.toLowerCase().includes(query));
    }

    return ( 
        <div className="navbar">
            <div className="section">
                <div className="bg-blue-700 flex py-4 items-center justify-between px-5">
                    <p className="text-white">AS</p>
                <form>   
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative top-2.5">
                    {/* <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    </div> */}
                    <input type="search" onChange={(e)=>setQuery(e.target.value)} id="default-search" className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by location" required/>
                        <button type="submit">
                        <svg aria-hidden="true" className="absolute right-2.5 top-4 w-6 h-6 text-white rounded-md p-1 bg-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </button>
                    {/* <button type="submit" className="text-white absolute right-2.5 bottom-2.5 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
                </div>
                 </form>
                {/* <button  type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Choose Range</button> */}
                
                {/* <DateRange
                editableDateInputs={true}
                onChange={item => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                /> */}

                    <div className="bg-white rounded-md p-1">
                    <span className="material-symbols-outlined">
                    shopping_cart
                    </span>
                    </div>
                </div>
            </div>
            {/* <Home data={search(cardLists)}/> */}

        </div>
     );
}
 
export default NavBar;