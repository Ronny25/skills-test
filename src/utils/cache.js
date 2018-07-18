const cache = {
  set: (key, value) => this[key] = value,
  get: (key) => this[key] || null,
  remove: key => delete this[key]
};

export default cache;
