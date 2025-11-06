import { useState,  useRef } from "react";
import gsap from "gsap";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import { useGSAP } from "@gsap/react";
import toast from "react-hot-toast";

const Home = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);

  
  //   Create references for animated elements
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const badgesRef = useRef(null);
  const searchBoxRef = useRef(null);

    //   GSAP Animations (Runs when component loads)
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Title animation
    tl.from(titleRef.current, {
      opacity: 0,
      y: -40, 
      duration: 0.8
    })

      // Subtitle animation (starts a little earlier)
      .from(subtitleRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.7,
      },"-=0.3"
      )

      // Trust badges animation
      .from(badgesRef.current, {
          opacity: 0,
          scale: 0.5,
          duration: 0.6,
        },"-=0.3"
      )

      // Search box animation
      .from( searchBoxRef.current,{
          opacity: 0,
          y: 40,
          duration: 0.8,
        },"-=0.2"
      );
  }, []);


    //-- Check Availability Logic
  const handleCheck = () => {
    // If dates missing
    if (!checkIn ) {
      toast.error("Please select check-in and dates.");
      return;
    } else if(!checkOut){
      toast.error("Please select check-out dates.");
      return;
    }
    

    const inDate = new Date(checkIn);
    const outDate = new Date(checkOut);

    // If checkout earlier than check-in
    if (inDate > outDate) {
      toast.error("Checkout date cannot be earlier than check-in date!");
      setCheckOut(""); // reset wrong input
      return;
    }

    console.log({
      checkIn,
      checkOut,
      guests,
    });
  };

  return (
    <section className="relative h-screen bg-[url('/images/hero4.jpg')] bg-cover bg-left">

      {/*  Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/70 to-black/20"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 text-white">

        {/*  Title with GSAP ref */}
        <h1
          ref={titleRef}
          className="text-5xl md:text-6xl font-extrabold drop-shadow-lg"
        >
          StayDream <span className="text-xl">House</span>
        </h1>

        {/* Subtitle with GSAP ref */}
        <p
          ref={subtitleRef}
          className="mt-4 opacity-90 text-sm md:text-xl"
        >
          Your dream escape begins here — reserve your stay today.
        </p>

        {/* Trust Badges with GSAP ref */}
        <p
          ref={badgesRef}
          className="mt-6 text-lg opacity-90 flex flex-wrap justify-center gap-3"
        >
          <span className="bg-white/20 text-xs px-3 py-2 md:text-xl rounded-full backdrop-blur-sm">
            Best Price Guarantee
          </span>
          <span className="bg-white/20 text-xs px-3 py-2 md:text-xl rounded-full backdrop-blur-sm">
            Beachfront View
          </span>
          <span className="bg-white/20 text-xs px-3 py-2 md:text-xl rounded-full backdrop-blur-sm">
            Secure & Safe Booking
          </span>
        </p>

        {/* Search Box Section with GSAP ref */}
        <div
          ref={searchBoxRef}
          className="mt-10 bg-white/20 backdrop-blur-xl p-3 rounded-2xl hidden md:flex flex-col md:flex-row gap-4 w-full max-w-3xl shadow-2xl"
        >
          {/* Check-in */}
          <div className="flex-1">
            <label className="text-white font-medium mb-1 block">Check In ⇩</label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full cursor-pointer px-4 py-3 rounded-lg text-black font-semibold mt-1 focus:outline-none focus:ring-2 focus:ring-[#D39F51]"
            />
          </div>

          {/* Check-out */}
          <div className="flex-1">
            <label className="text-white font-medium mb-1 block">Check Out ⇩</label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full cursor-pointer px-4 py-3 rounded-lg text-black font-semibold mt-1 focus:outline-none focus:ring-2 focus:ring-[#D39F51]"
            />
          </div>

          {/* Guests */}
          <div className="flex-1">
            <label className="text-white font-medium mb-1 block">Guests ⇩</label>

            <div className="flex justify-center items-center gap-3 mt-1 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full shadow-lg w-full max-w-[150px] mx-auto">

              {/* Decrement */}
              <button
                onClick={() => setGuests((prev) => (prev > 1 ? prev - 1 : 1))}
                className="p-1 bg-[#585753]/20 hover:bg-[#585753]/40 text-[#585753] rounded-full cursor-pointer"
              >
                <FaCircleMinus className="text-lg" />
              </button>

              {/* Count */}
              <span className="text-black font-semibold bg-amber-100 px-3 py-1 rounded-md text-sm shadow-inner">
                {guests}
              </span>

              {/* Increment */}
              <button
                onClick={() => setGuests((prev) => prev + 1)}
                className="p-1 bg-[#585753]/20 hover:bg-[#585753]/40 text-[#585753] rounded-full cursor-pointer"
              >
                <FaCirclePlus className="text-lg" />
              </button>
            </div>
          </div>

          {/* Button */}
          <div className="flex items-center">
            <button
              onClick={handleCheck}
              className="px-4 py-3 bg-[#D39F51] hover:bg-[#bc8a47] rounded-lg font-semibold shadow-lg transition-all duration-200 hover:scale-105 text-sm cursor-pointer"
            >
              Book Now
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;
