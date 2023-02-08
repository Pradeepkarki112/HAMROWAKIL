import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import pic1 from "../assets/pic-1.png";
import pic2 from "../assets/pic-2.png";
import pic3 from "../assets/pic-3.png";
import pic4 from "../assets/pic-4.png";
import pic5 from "../assets/pic-5.png";
import pic6 from "../assets/pic-6.png";

const Review = () => {
  const Data = [
    {
      id: 1,
      photo: pic1,
      description:
        "The platform's ability to search for lawyers by specialty, name, and address, combined with the convenience of appointment scheduling and video calls, made the process of finding legal help stress.",
      name: "Balkrishna Dhungel",
      rating: (
        <div>
          {" "}
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />{" "}
        </div>
      ),
    },
    {
      id: 2,
      photo: pic2,
      description:
        "I was skeptical about using an online platform for legal services, but Hamrowakil exceeded my expectations.",
      name: "Anuradha Koirala",
      rating: (
        <div>
          {" "}
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarHalfIcon />{" "}
        </div>
      ),
    },
    {
      id: 3,
      photo: pic3,
      description:
        "Hamrowakil has made finding and communicating with lawyers a breeze.",
      name: "Chandra Kala Sharma",
      rating: (
        <div>
          {" "}
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarBorderIcon />{" "}
        </div>
      ),
    },
    {
      id: 4,
      photo: pic4,
      description:
        "The platform's appointment scheduling, video calls, and chat feature make for a convenient and efficient experience. Highly recommend it!",
      name: "Ganga Maya Adhikari",
      rating: (
        <div>
          {" "}
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarBorderIcon />{" "}
        </div>
      ),
    },
    {
      id: 5,
      photo: pic5,
      description:
        "The ease of scheduling appointments, video calls, and the chat feature during the call made for a seamless and productive experience.",
      name: "Janak Raj Joshi",
      rating: (
        <div>
          {" "}
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarHalfIcon />
          <StarBorderIcon />{" "}
        </div>
      ),
    },
    {
      id: 6,
      photo: pic6,
      description: "Using Hamrowakil was a fantastic experience.",
      name: "Sita Devi Shah",
      rating: (
        <div>
          {" "}
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarHalfIcon />{" "}
        </div>
      ),
    },
  ];

  return (
    <div className="bg-white">
      <section className="reviews" id="reviews">
        <h1 className="text-center text-7xl pb-[7rem]"> Client's Review </h1>
            {Data.map((item) => (
              <>
              <div
                key={item.id}
                className=" shadow-xl bg-[#00FFFF] flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300"
              >
                <img
                  className="w-20 rounded-full mx-auto mt-[-3rem] bg-transparent"
                  src={item.photo}
                  alt="/"
                />
                <p className="text-center text-4xl mb-5 font-bold">
                  {item.name}
                </p>
                <h2 className="text-xl text-center">{item.description}</h2>
                <div className="flex justify-center  my-6">{item.rating}</div>
              </div>
              <div className="pb-[5rem]" />
              </>
            ))}
      </section>
    </div>
  );
};

export default Review;