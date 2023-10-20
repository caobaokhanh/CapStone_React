import fetcher from "./fetcher";

export async function getMovieShowtimes(movieId) {
  try {
    const response = await fetcher.get("/QuanLyRap/LayThongTinLichChieuPhim", {
      params: {
        MaPhim: movieId,
      },
    });

    return response.data.content;
  } catch (error) {
    throw error.response.data.content;
  }
}

export async function getCinemas() {
  try {
    const response = await fetcher.get("/QuanLyRap/LayThongTinHeThongRap", {});
    return response.data.content;
  } catch (error) {
    throw error.response.data.content;
  }
}

export async function getLogoCinema(cinemaId) {
  try {
    const response = await fetcher.get("/QuanLyRap/LayThongTinHeThongRap", {
      params: {
        maHeThongRap: cinemaId,
      },
    });

    return response.data.content;
  } catch (error) {
    throw error.response.data.content;
  }
}

export async function getInformationCinemas(cinemaId) {
  try {
    const response = await fetcher.get(
      "/QuanLyRap/LayThongTinCumRapTheoHeThong",
      {
        params: {
          maHeThongRap: cinemaId,
        },
      }
    );
    return response.data.content;
  } catch (error) {
    throw error.response.data.content;
  }
}

export async function getCinemaShowTimes(cinemaId) {
  try {
    const response = await fetcher.get(
      "/QuanLyRap/LayThongTinLichChieuHeThongRap",
      {
        params: {
          maHeThongRap: cinemaId,
          maNhom: "GP09",
        },
      }
    );

    return response.data.content;
  } catch (error) {
    throw error.response.data.content;
  }
}
