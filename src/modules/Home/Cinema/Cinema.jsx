import React from "react";
import { getCinemas, getInformationCinemas } from "../../../apis/movieAPI";
import { useQuery } from "@tanstack/react-query";

export default function Cinema() {
  const { data = [], isLoading } = useQuery({
    queryKey: ["cinemas"],
    queryFn: getCinemas,
  });
  return (
    <div className="container">
      <div>
        {data.map((cinema) => {
          return (
            <div className="d-flex">
              <img src={cinema.logo} alt="logo" />;
            </div>
          );
        })}
      </div>
    </div>
  );
}
