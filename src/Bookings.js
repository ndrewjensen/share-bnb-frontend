import {useState, useEffect} from "react";
import {NavLink} from "react-router-dom";
import ShareBnbApi from "./api";
import LoadingSpinner from "./common/LoadingSpinner";
import Booking from "./Booking";



/** Bookings Component
 *
 * Props:
 * -Bookings {id, userId, photo, price, details}
 *
 * State: None
 */

function Bookings ({username}) {
  const [Bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getBookings() {
      const Bookings = await ShareBnbApi.getBookings(username);

      setBookings(Bookings);
      setIsLoading(false);
    }

    getBookings()
  },[username])

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="Bookings">
      {Bookings.map(b => <Booking booking={b} key={b.name}/>)}
    </div>

  )
}

export default Bookings