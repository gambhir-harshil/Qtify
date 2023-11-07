import {
  Pagination,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useState } from "react";

export default function SongsTable({ songs }) {
  const [currentPage, setCurrentPage] = useState(1);

  const songsPerPage = 10;

  function handlePageChange(e, page) {
    setCurrentPage(page);
  }

  const startIndex = (currentPage - 1) * songsPerPage;
  const endIndex = startIndex + songsPerPage;
  const paginatedSongs = songs.slice(startIndex, endIndex);

  function formatDuration(ms) {
    const totalSeconds = Math.floor(ms / 100);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  }

  return (
    <>
      <div className="flex justify-end">
        <Stack spacing={2} sx={{ justifyContent: "center", marginTop: "20px" }}>
          <Pagination
            count={Math.ceil(songs.length / songsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            sx={{
              "& .Mui-selected": {
                backgroundColor: "#34C94B",
              },
              "& .MuiPaginationItem-page": {
                color: "#34C94B",
                fontSize: "16px",
                fontWeight: "600",
              },
              "& .MuiPaginationItem-page.Mui-selected": {
                background: "#34C94B",
                color: "white",
              },
              "& .MuiPaginationItem-ellipsis": {
                color: "#34C94B",
                fontSize: "16px",
                fontWeight: "600",
              },
              "& .MuiPaginationItem-icon": {
                color: "#34C94B",
              },
            }}
          />
        </Stack>
      </div>

      <TableContainer component={Paper} sx={{ backgroundColor: "#121212" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{ color: "white", fontWeight: "600", fontSize: "24px" }}
              >
                Title
              </TableCell>
              <TableCell
                sx={{ color: "white", fontWeight: "600", fontSize: "24px" }}
              >
                Artist
              </TableCell>
              <TableCell
                sx={{ color: "white", fontWeight: "600", fontSize: "24px" }}
              >
                Duration
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedSongs.map((song) => (
              <TableRow key={song.title}>
                <TableCell sx={{ color: "white" }}>
                  <div className="flex items-center gap-8 font-semibold">
                    <div className="w-16 h-16 overflow-hidden bg-cover">
                      <img src={song.image} alt={song.title} />
                    </div>
                    <span className="max-w-[10rem]">{song.title}</span>
                  </div>
                </TableCell>
                <TableCell>
                  {song.artists.map((artist, idx) => (
                    <span className="font-semibold text-gray-300" key={artist}>
                      {artist}
                      {idx < song.artists?.length - 1 && ", "}
                    </span>
                  ))}
                </TableCell>
                <TableCell>
                  <span className="font-bold text-white">
                    {formatDuration(song.durationInMs)}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
