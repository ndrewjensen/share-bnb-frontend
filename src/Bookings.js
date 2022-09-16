import { useState, useEffect } from "react";

import ShareBnbApi from "./api";
import LoadingSpinner from "./common/LoadingSpinner";
import Booking from "./Booking";

/** Bookings Component
 *
 * Props: username
 *
 * State: Bookings, isLoading
 */

function Bookings({ username }) {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getBookings() {
      const bookings = await ShareBnbApi.getBookings(username);
      setBookings(bookings);
      setIsLoading(false);
    }

    getBookings();
  }, [username]);

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="Bookings">
      {bookings.length === 0 && <p>You haven't made any bookings.</p>}
      {bookings.map((b) => (
        <Booking booking={b} key={b.name} />
      ))}
    </div>
  );
}

export default Bookings;
