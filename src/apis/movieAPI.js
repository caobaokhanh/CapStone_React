import fetcher from "./fetcher";

export async function getBanners() {
  try {
    const response = await fetcher.get("/QuanLyPhim/LayDanhSachBanner");
    return response.data.content;
  } catch (error) {
    throw error.response.data.content;
  }
}

export async function getMovies() {
  try {
    const response = await fetcher.get("/QuanLyPhim/LayDanhSachPhim", {
      params: {
        maNhom: "GP09",
      },
    });
    return response.data.content;
  } catch (error) {
    throw error.response.data.content;
  }
}

export async function getMovieDetails(movieId) {
  try {
    const response = await fetcher.get("/QuanLyPhim/LayThongTinPhim", {
      params: {
        MaPhim: movieId,
      },
    });
    return response.data.content;
  } catch (error) {
    throw error.response.data.content;
  }
}

export async function addMovie(movie) {
  try {
    const response = await fetcher.post(
      "/QuanLyPhim/ThemPhimUploadHinh",
      movie
    );
    return response.data?.content;
  } catch (error) {
    throw error.response.data?.content;
  }
}

export async function getCinemas(cinema) {
  try {
    const response = await fetcher.get("/QuanLyRap/LayThongTinHeThongRap", {
      params: {
        maHeThongRap: cinema,
      },
    });
    return response.data.content;
  } catch (error) {
    throw error.response.data.content;
  }
}

// export async function getInformationCinemas(cinema) {
//   try {
//     const response = await fetcher.get(
//       "/QuanLyRap/LayThongTinCumRapTheoHeThong",
//       {
//         params: {
//           maHeThongRap: cinema,
//         },
//       }
//     );
//     return response.data.content;
//   } catch (error) {
//     throw error.response.data.content;
//   }
// }
