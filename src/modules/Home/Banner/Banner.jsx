import React from "react";
// import Carousel from "react-bootstrap/Carousel";
// import style from "./banner.module.scss";
import { useQuery } from "@tanstack/react-query";
import { getBanners, getCinemas, getMovies } from "../../../apis/movieAPI";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { Navigation, Autoplay } from "swiper/modules";
import { Box } from "@mui/material";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Banner() {
  const { data: banners = [], isLoading } = useQuery({
    queryKey: ["banners"],
    queryFn: getBanners,
  });

  // const navigate = useNavigate();

  // const { data: movies = [] } = useQuery({
  //   queryKey: ["movies"],
  //   queryFn: getMovies,
  // });

  // const { data: cinemas = [] } = useQuery({
  //   queryKey: ["cinemas"],
  //   queryFn: getCinemas,
  // });

  if (isLoading) {
    // return <Loading />f
    return <h1>Loading...</h1>;
  }

  return (
    // <div className={style.banner}>
    //   <Carousel>
    //     {banners.map((banner) => {
    //       return (
    //         <Carousel.Item>
    //           <img
    //             key={banner.maBanner}
    //             height={600}
    //             src={banner.hinhAnh}
    //             alt=""
    //             className={style.banner_img}
    //           />
    //         </Carousel.Item>
    //       );
    //     })}
    //   </Carousel>

    //   <div className="container">
    //     <div className="d-flex p-4">
    //       <Form.Select aria-label="Default select example">
    //         <option>Tìm phim ...</option>
    //         {movies.map((movie) => {
    //           return <option>{movie.tenPhim}</option>;
    //         })}
    //       </Form.Select>
    //       <Form.Select aria-label="Default select example">
    //         <option>Rạp</option>
    //         {cinemas.map((cinema) => {
    //           return <option>{cinema.tenHeThongRap}</option>;
    //         })}
    //       </Form.Select>

    //       <Form.Select aria-label="Default select example">
    //         <option>Ngày xem</option>
    //         {movies.map((movie) => {
    //           return <option>{movie.ngayKhoiChieu}</option>;
    //         })}
    //       </Form.Select>

    //       <Form.Select aria-label="Default select example">
    //         <option>Suất chiếu</option>
    //         {movies.map((movie) => {
    //           return <option>{movie.ngayKhoiChieu}</option>;
    //         })}
    //       </Form.Select>
    //       <div className="m-lg-1">
    //         <button className="btn btn-danger">MUA VÉ NGAY</button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <Swiper
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      centeredSlides={true}
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Navigation, Autoplay]}
      className="mySwiper"
    >
      {banners.map((banner) => {
        return (
          <SwiperSlide key={banner.maBanner}>
            <img width="100%" height="600px" src={banner.hinhAnh} alt="" />
            <Box
              sx={{
                backgroundColor: "#000000a7",
                color: "#fff",
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                zIndex: "1201",
                opacity: "0",
                borderRadius: "10px",
                cursor: "pointer",

                transition: "all 0.5s",

                "&:hover": {
                  opacity: 1,
                },
              }}
            >
              <PlayCircleOutlineIcon
                fontSize="large"
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: "100px",
                  height: "100px",
                  transform: "translate(-50%, -50%)",
                  transition: "all 0.5s",
                  "&:hover": {
                    color: "#ffffff81",
                  },
                }}
              />
            </Box>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
