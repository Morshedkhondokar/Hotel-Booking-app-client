import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import roomsData from "../../data/roomsData.json";

const RoomsList = () => {
  useGSAP(() => {
    gsap.from(".category-title", {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
    });
  });

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">Our Rooms</h2>

      {roomsData.map((category, index) => (
        <div key={index} className="mb-16">
          
          {/* Category Name */}
          <h3 className="category-title text-3xl font-semibold mb-6">
            {category.category}
          </h3>

          {/* Room Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {category.rooms.map((room) => (
              <div
                key={room.id}
                className="room-card bg-white rounded-xl shadow-xl overflow-hidden hover:scale-[1.03] transition duration-300"
              >
                <img
                  src={room.image}
                  alt={room.category}
                  className="w-full h-56 object-cover"
                />

                <div className="p-5">

                  <div className="flex justify-between">
                    <p className="text-gray-600 text-sm mb-2">
                    <strong>${room.price}</strong> / night
                  </p>

                  <p className="text-sm text-gray-700 mb-2">
                    Beds: {room.beds} | Guests: {room.guests}
                  </p>
                  </div>

                 <div className="flex  justify-between items-center">
                     {/* Amenities */}
                  <div className="mt-3">
                    <p className="font-semibold">Amenities:</p>
                    <ul className="list-disc list-inside text-sm text-gray-600">
                      {room.amenities.map((a, i) => (
                        <li key={i}>{a}</li>
                      ))}
                    </ul>
                  </div>
                  {/* book now */}
                  <button  className="px-6 py-3 bg-[#D39F51] rounded-lg text-white font-semibold hover:bg-[#bc8a47] hover:scale-90 transition cursor-pointer">Book now</button>
                 </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      ))}
    </section>
  );
};

export default RoomsList;
