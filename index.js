const sleep = (time) => {
  new Promise(resolve => setTimeout(() => resolve('Delayed print'), time))
}
export default sleep;
