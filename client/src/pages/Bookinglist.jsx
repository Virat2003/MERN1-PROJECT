import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListingCard from "../components/ListingCard";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import { setBookingList } from "../redux/state";
import "../styles/Bookinglist.css";

const Bookinglist = () => {
  const [loading, setLoading] = useState(true);
  const userId = useSelector((state) => state.user._id);
  const bookingList = useSelector((state) => state.user.bookingList);

  const dispatch = useDispatch();

  const getBookingList = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/users/${userId}/bookings`,
        {
          method: "GET",
        }
      );

      const data = await response.json();
      dispatch(setBookingList(data));
      setLoading(false);
    } catch (err) {
      console.log("Fetch Trip List failed!", err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getBookingList();
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Navbar />
      <h1 className="title-list">Your Booking List</h1>
      <div className="list">
        {bookingList?.map(
          ({ listingId, hostId, startDate, endDate, totalPrice, booking = true }) => (
            <ListingCard
              _id={listingId._id}
              creator={listingId.creator}
              listingPhotoPaths={listingId.listingPhotoPaths}
              city={listingId.city}
              state={listingId.state}
              country={listingId.country}
              category={listingId.category}
              startDate={startDate}
              endDate={endDate}
              totalPrice={totalPrice}
              booking={booking}
            />
          )
        )}
      </div>
    </>
  );
};

export default Bookinglist;
