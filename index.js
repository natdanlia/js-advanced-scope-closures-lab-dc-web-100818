function produceDrivingRange(maxBlock) {
  return function (givenBlock1,givenBlock2) {


      givenBlockInt1 = parseInt(givenBlock1.slice(0,givenBlock1.length -2))

      givenBlockInt2 = parseInt(givenBlock2.slice(0,givenBlock2.length -2))

      let editBlock =  givenBlockInt2 - givenBlockInt1

    debugger;
    if (maxBlock > editBlock) {
      return `within range by ${maxBlock - editBlock}`;
    } else {
      return `${editBlock - maxBlock} blocks out of range`;
    }
  };
}


function produceTipCalculator(tipPercent) {
  return function (foodPrice) {
   return (foodPrice * tipPercent)
  };
}

function createDriver() {
  let id = 0
  return class {
    constructor(name) {
      this.name = name
      this.id = ++id
    }
  }

}
