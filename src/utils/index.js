/* eslint-disable */
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === "null") {
      console.log('serialized state is null');
      return false;
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState)
  } catch (err) {
    console.log(err);
  }
}

const defineEndPoint = () => {
  let rtrn = 'http://localhost:9001';
  if (process.env.NODE_ENV === 'production') {
    console.log('production is true: ', process.env.NODE_ENV);
    rtrn = 'https://old-rossy-retirement.herokuapp.com';
  }
  return rtrn;
}

module.exports = {
  saveState,
  loadState,
  defineEndPoint,
}
