module.exports = {
  // Other Jest configurations...
  reporters: [
    "default",
    ["jest-junit", {
      outputDirectory: "/home",
      outputName: "TEST-results.xml"
    }]
  ]
};
