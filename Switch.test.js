const DynamicSwitch = require("./Switch");

const Switch = new DynamicSwitch();
const cb = jest.fn();

it("checks if conditions are added", () => {
  Switch.add(true, cb);
  Switch.add(false, cb);
  Switch.add(true, cb);
  Switch.add(false, cb);
  expect(Switch.conditions).toHaveLength(4);
});

it("checks if cb is called when condition is true", () => {
  Switch.isValid();
  expect(cb).toHaveBeenCalledTimes(2);
});

it("checks if conditions are empty after isValid call", () => {
  expect(Switch.conditions).toHaveLength(0);
});

it("checks if isValid returns false when at least one condition is true", () => {
  Switch.add(true, cb);
  Switch.add(false, cb);
  Switch.add(true, cb);
  Switch.add(false, cb);
  expect(Switch.isValid()).toBe(false);
});

it("checks if isValid returs true when all conditions are false", () => {
  Switch.add(false, cb);
  Switch.add(false, cb);
  Switch.add(false, cb);
  Switch.add(false, cb);
  expect(Switch.isValid()).toBe(true);
});
