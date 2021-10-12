describe("clue1", () => {
  describe("1. stringBreaker Function", () => {
    let stringBreaker = window["stringBreaker"]
    it("returns an array", () => {
      chai.assert.isArray(stringBreaker('Under at the House Down'), "The return type must be an array.")
    })
    it("returns the array with each word as its own index", () => {
      chai.assert.includeOrderedMembers(stringBreaker('Under at the House Down'), ['Under', 'at', 'the', 'House', 'Down'], "Make sure you are splitting on the ' ' character")
    })
  })
  describe("2. rearranger Function", () => {
    let rearranger = window["rearranger"]
    it("returns an array", () => {
      chai.assert.isArray(rearranger([3, 4]), "The return type must be an array.")
    })
    it("returns the array with the elements in the correct positions", () => {
      chai.assert.includeOrderedMembers(rearranger(['Under', 'at', 'the', 'House', 'Down']), ['at', 'the', 'House', 'Down', 'Under'], "Only change the position of the first element. Move it to the end.")
    })
  })
  describe("3. reverseRearranger Function", () => {
    let reverseRearranger = window["reverseRearranger"]
    it("returns an array", () => {
      chai.assert.isArray(reverseRearranger([3, 4]), "The return type must be an array.")
    })
    it("returns the array with the elements in the correct positions", () => {
      chai.assert.includeOrderedMembers(reverseRearranger(['Under', 'at', 'the', 'House', 'Down']), ['Down', 'Under', 'at', 'the', 'House'], "Only change the position of the last element. Move it to the start.")
    })
  })
  describe("4. arrayPortion Function", () => {
    let arrayPortion = window["arrayPortion"]
    it("returns an array", () => {
      chai.assert.isArray(arrayPortion([3, 4]), "The return type must be an array.")
    })
    it("The end is inclusive", () => {
      chai.assert.includeOrderedMembers(arrayPortion(['where', 'the', 'Under', 'at', 'the', 'House', 'Down', 'people', 'sing'], 2, 6), ['Under', 'at', 'the', 'House', 'Down'], "Be sure to include all of the words between the start and end")
    })
  })

  describe("5. arrayToString Function", () => {
    let arrayToString = window["arrayToString"]
    it("returns an string", () => {
      chai.assert.isString(arrayToString(['at', 'the', 'Singing', 'House', 'Down', 'Under']), "The return type must be an string.")
    })
    it("returns the array with only the elements within the range", () => {
      chai.assert.equal(arrayToString(['at', 'the', 'Singing', 'House', 'Down', 'Under']), 'at the Singing House Down Under', "Make sure to add the ' ' character between each word")
    })
  })
})

  // describe("2. largestNum Function", () => {
  //   let largestNum = window["largestNum"]
  //   it("returns the largest number", () => {
  //     chai.assert.strictEqual(largestNum([10, 12, 3, 2, 42]), 42, "Find and return the largesgt number within the array.")
  //   })
  //   it("returns the largest number on all arrays", () => {
  //     chai.assert.strictEqual(largestNum([10, 12, 3, 2]), 10, "Find and return the largesgt number within the array.")
  //   })
  // })
  // describe("3. elemsTimesLength Function", () => {
  //   let elemsTimesLength = window["elemsTimesLength"]
  //   it("returns an array", () => {
  //     chai.assert.isArray(elemsTimesLength([3]), "The return type must be an array.")
  //   })
  //   it("modifies every element correctly", () => {
  //     chai.assert.includeOrderedMembers(elemsTimesLength([4, 2, 1, 7]), [16, 8, 4, 28], "Returns an array containing modified elements of the given array.")
  //   })
  // })
  // describe("4. flightCost Function", () => {
  //   let flightCost = window["flightCost"]
  //   it("Flying coach is a lot cheaper than flying firstClass", () => {
  //     chai.assert.strictEqual(flightCost("LAX", false), 500, "Be sure to return the standard cost if flightClass is set to false")
  //     chai.assert.strictEqual(flightCost("CAN", false), 750)
  //   })

  //   it("Flying to Canada first class can be expensive", () => {
  //     chai.assert.strictEqual(flightCost("SEA", true), 1200, "Be sure to check if firstClass is set to true")
  //     chai.assert.strictEqual(flightCost("CAN", true), 6200)
  //   })
  //   it("Don't be case sensitive!", () => {
  //     chai.assert.strictEqual(flightCost('sea', false), 800)
  //   })
  // })
  // describe("5. findById Function", () => {
  //   let findById = window["findById"]
  //   it("returns an object", () => {
  //     chai.assert.isObject(findById(1), "The return type must be an object.")
  //   })
  //   it("returns the complete user object with the target id", () => {
  //     chai.assert.hasAllKeys(findById(17), { id: 17, name: 'St. MaryLou de la Playa Carmen' }, "Return the complete user object with the matching id.")
  //   })
  //   it("returns an object containing an error message if no matching user", () => {
  //     chai.assert.hasAllKeys(findById(1000), { error: "No user with that id." }, "Return an object with an error message if no user found with the target id.")
  //   })
  // })
  // describe("6. bandMemberDetails Function", () => {
  //   let bandMemberDetails = window["bandMemberDetails"]
  //   it("returns a string", () => {
  //     chai.assert.isString(bandMemberDetails("Kris"), "The return type must be a string.")
  //   })
  //   it("returns a correctly formatted string with details of the correct band member", () => {
  //     chai.assert.strictEqual(bandMemberDetails("Kris"), "Kris is in the band and plays the guitar", "Use string concatenation or interpolation to populate your return string with the correct info.")
  //   })
  //   it("still returns properly if only part of the name is given (case insensitive)", () => {
  //     chai.assert.strictEqual(bandMemberDetails("John"), "Johnny P is in the band and plays the sax", "The .includes() method could help with this challenge.")
  //   })
  // })
