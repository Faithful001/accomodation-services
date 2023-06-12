
import {useState} from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

const Calendar = ({editableDateInputs, onChange, moveRangeOnFirstSelection, ranges}) => {
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: null,
          key: 'selection'
        }
      ]);
    return ( 
        <div className="">

        </div>
     );
}
 
export default Calendar;