const fetchHandle = (url) => (
  fetch(url)
    .then(res => res.json())
    .catch(e => console.log('Error!!! ', e))
);

export {
  fetchHandle
};