import roomsData from "../../data/roomsData.json";
import { Link } from "react-router";

const RoomsView = () => {
  // all rooms 
  const allRooms = roomsData.flatMap(category =>
    category.rooms.map(room => ({ ...room, category: category.category}))
  );
  console.log(allRooms)

  // show frist room 
  const previewRooms = allRooms.slice(0, 3);

  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Our Rooms</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {previewRooms.map(room => (
          <div key={room.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={room.image} alt="" className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="font-bold text-xl mb-2">{room.category}</h3>
             <div className="flex justify-between">
                 <p>Beds: {room.beds} | Guests: {room.guests}</p>
              <p className="text-[#D39F51] font-semibold">${room.price} / night</p>
             </div>
              <button className="text-[#D39F51]   mt-2 cursor-pointer">
                View Details → 
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link
          to="/rooms"
          className="px-6 py-3 bg-[#D39F51] rounded-lg text-white font-semibold hover:bg-[#bc8a47] transition"
        >
          View All Rooms
        </Link>
      </div>
    </section>
  );
};

export default RoomsView;
