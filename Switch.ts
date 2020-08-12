class DynamicSwitch {
  private conditions: (boolean | (() => void))[][] = [];

  add(condition: boolean, callback: () => void): void {
    this.conditions.push([condition, callback]);
  }

  isValid(): boolean {
    let areConditionsValid: boolean = true;
    this.conditions.forEach((condition) => {
      if (condition[0]) {
        condition[1]();
        areConditionsValid = false;
      }
    });
    this.conditions = [];
    return areConditionsValid;
  }
}

const Test = new DynamicSwitch();

Test.add(true, () => {
  console.log("true");
});
Test.add(false, () => {
  console.log("false");
});

console.log(Test.isValid());

module.exports = DynamicSwitch;
