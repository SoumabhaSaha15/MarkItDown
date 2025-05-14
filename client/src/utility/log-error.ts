export default (error: string, ...errorPoint: any[]) => {
  console.log('%c'+error, 'color: red; font-weight: bold; font-size: 16px;');
  for (const point of errorPoint) console.log(point);
};
