import AboutStayDream from "../../components/AboutStayDream/AboutStayDream";
import GallerySection from "../../components/gallery/GallerySection";
import Hero from "./Hero";
import RoomsView from "./RoomsView";

const Home = () => {
  return <div>
    <Hero/>
    <RoomsView/>
   <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-8 px-4  ">
        {/* Gallery */}
        <div className="w-full md:w-6/12">
          <GallerySection />
        </div>

        {/* Hotel Information */}
        <div className="w-full md:w-6/12">
          <AboutStayDream />
        </div>
      </div>
  </div>;
};

export default Home;
