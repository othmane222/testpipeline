module.exports = {
  // Other Jest configurations...
  reporters: [
    "default",
    ["jest-junit", {
      outputDirectory: "./my-custom-test-results",
      outputName: "TEST-results.xml"
    }]
  ]
};
