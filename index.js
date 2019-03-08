function produceDrivingRange(delta) {
  return function (blockA, blockB) {
    let A = parseInt(blockA.slice(0,-2))
    let B = parseInt(blockB.slice(0,-2))
    if ((B-A) > delta) {
      return `${(B-A) - delta } blocks out of range`
    } else {
      return `within range by ${delta - (B - A)}`
    }
  }
}


function produceTipCalculator(percent) {
  return price => price * percent
}

function createDriver() {
  let driverId = 0
  // debugger
  return class Driver{
    constructor(name) {
      this.name = name
      this.id = driverId ++
    }
  }
}
