import profileImage from "../../assets/images/profilephoto.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

const Testimonials = () => {
  const testi_info = [
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur et dolores non magni debitis iusto rationerecusandae in ullam deleniti fugiat odio doloribus, dolorem amet quibusdam assumenda, ipsam voluptas reiciendis.",
      image: <img src={profileImage} />,
      clientName: "Sabiran Shah",
      designation: "Teacher",
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur et dolores non magni debitis iusto rationerecusandae in ullam deleniti fugiat odio doloribus, dolorem amet quibusdam assumenda, ipsam voluptas reiciendis.",
      image: <img src={profileImage} />,
      clientName: "Sabiran Shah",
      designation: "Teacher",
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur et dolores non magni debitis iusto rationerecusandae in ullam deleniti fugiat odio doloribus, dolorem amet quibusdam assumenda, ipsam voluptas reiciendis.",
      image: <img src={profileImage} />,
      clientName: "Sabiran Shah",
      designation: "Teacher",
    },
  ];

  return (
    <div className="testimonial_page">
      <div className="container">
        <div className="testimonial_wrapper">
          <div className="title">
            <h3 className="head_title">Testimonials</h3>
            <h2 className="sub_title">Clients Feedback</h2>
          </div>
          <Swiper
            className="testimonial_client"
            slidesPerView={2}
            modules={[Autoplay]}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
          >
            {testi_info.map((items) => {
              return (
                <SwiperSlide className="testimonial_client_wrapper">
                  <div className="description">
                    <p className="para">{items.description}</p>
                  </div>
                  <div className="client_info">
                    <div className="image">{items.image}</div>
                    <div className="clent_intro">
                      <h4>{items.clientName}</h4>
                      <p className="para">{items.designation}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
