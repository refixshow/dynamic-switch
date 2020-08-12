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

module.exports = DynamicSwitch;
