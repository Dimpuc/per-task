export const paginationHelper = (pages: number) => {
  if (pages > 6 || pages === 6) {
    return [1, 2, 3, 4, 5, 6];
  }
  if (pages === 5) {
    return [1, 2, 3, 4, 5];
  }
  if (pages === 4) {
    return [1, 2, 3, 4];
  }
  if (pages === 3) {
    return [1, 2, 3];
  }
  if (pages === 2) {
    return [1, 2];
  }
};
