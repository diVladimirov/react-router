function mapper(array) {
  return array.map(({ backdrop_path, title, id }) => {
    return { backdrop_path, title, id };
  });
}

export default mapper;
