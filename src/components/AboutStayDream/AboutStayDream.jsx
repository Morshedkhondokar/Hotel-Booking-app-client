const AboutStayDream = () => {
  return (
    <section className="bg-white shadow-xl rounded-2xl p-8 sticky top-24">
      <h2 className="text-3xl font-bold mb-4 text-[#D39F51]">
        About StayDream House
      </h2>

      <p className="text-gray-600 leading-relaxed mb-4">
        Experience comfort, luxury, and peace at <span className="font-semibold">StayDream House</span>.
        Located beside the tranquil beachfront, our hotel offers modern rooms,
        elegant interiors, and world-class hospitality.
      </p>

      <ul className="space-y-3 text-gray-700 text-[15px]">
        <li className="flex items-start gap-2">
          • <span>Luxury rooms with private balconies & premium furniture.</span>
        </li>

        <li className="flex items-start gap-2">
          • <span>High-speed WiFi, 24/7 service, and clean environment.</span>
        </li>

        <li className="flex items-start gap-2">
          • <span>Beachfront view that ensures a calm and relaxing stay.</span>
        </li>

        <li className="flex items-start gap-2">
          • <span>Affordable pricing with seasonal discounts.</span>
        </li>
      </ul>

      <button className="mt-6 px-6 py-3 bg-[#D39F51] text-white rounded-lg font-semibold hover:bg-[#bc8a47] duration-300">
        Learn More
      </button>
    </section>
  );
};

export default AboutStayDream;
