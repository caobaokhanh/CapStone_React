import React from "react";
import { ButtonMovie } from "../../../../components/ButtonMovie";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../../../../apis/movieAPI";
import { getMovieShowtimes } from "../../../../apis/cinemaAPI";

export default function ShowingSelect() {
  const [movie, setMovie] = React.useState("");

  const { data: movies = [], isLoading } = useQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
  });

  const handleChangeMovie = (evt) => {
    // console.log(evt.target.value);
    setMovie(evt.target.value);
  };
  return (
    <Paper
      style={{
        position: "absolute",
        width: "100%",
        height: "80px",
        zIndex: "1000",
        top: "-40px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <FormControl sx={{ m: 1, minWidth: 80, width: 1 / 4 }} color="warning">
          <InputLabel id="demo-simple-select-autowidth-label">Phim</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={movie}
            onChange={handleChangeMovie}
          >
            <MenuItem value="">
              <em>Chọn Phim</em>
            </MenuItem>

            {movies.map((movie) => {
              return <MenuItem>{movie.tenPhim}</MenuItem>;
            })}
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 80, width: 1 / 4 }} color="warning">
          <InputLabel id="demo-simple-select-autowidth-label">Rạp</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            // value={age}
            // label="Age"
            // onChange={handleChange}
          >
            <MenuItem value="">
              <em>Chọn Rạp</em>
            </MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 80, width: 1 / 4 }} color="warning">
          <InputLabel id="demo-simple-select-autowidth-label">
            Ngày giờ chiếu
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            // value={age}
            // label="Age"
            // onChange={handleChange}
          >
            <MenuItem value="">
              <em>Chọn ngày giờ chiếu</em>
            </MenuItem>
          </Select>
        </FormControl>

        <ButtonMovie height="55px">MUA VÉ NGAY</ButtonMovie>
      </Box>
    </Paper>
  );
}
