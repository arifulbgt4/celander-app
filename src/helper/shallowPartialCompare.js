export default (obj, partialObj) =>
  Object.keys(partialObj).every(
    key => obj.hasOwnProperty(key) && obj[key] === partialObj[key]
  );
