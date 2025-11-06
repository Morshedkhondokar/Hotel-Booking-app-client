import Lottie from "lottie-react";
import error404 from "../../../public/images/404.json";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="bg-white h-screen">
      <Lottie
        className="h-screen"
        animationData={error404}
        loop={true}
      />
      <div className="absolute bottom-10 md:bottom-20 lg:-right-60 w-full text-center h-11">
        <Link
          to={"/"}  
        >
          <button  className=" px-4 py-2 rounded-full bg-[#D39F51]
    text-white font-bold cursor-pointer animate__animated animate__jello animate__infinite ">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
