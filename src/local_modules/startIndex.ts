interface Data {
  total?: number;
  current: number;
  pageSize: number;
}

// 1 1 - 20
// 2 21 - 40
// 3 41 - 60

export default (current: number, pageSize: number) => {
  return (current - 1) * pageSize;
};
