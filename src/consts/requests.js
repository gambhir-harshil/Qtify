const requests = {
  topAlbums: { endpoint: "/albums/top", name: "Top Albums" },
  newAlbums: { endpoint: "/albums/new", name: "New Albums" },
  album: "/album/:slug",
  songs: "/songs",
  genres: "/genres",
};

export default requests;
