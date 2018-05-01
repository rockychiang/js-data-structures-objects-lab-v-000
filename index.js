const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  const newDriver = Object.assign({}, driver, {key: value});
  return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  return driver[key] = value;
}