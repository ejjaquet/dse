module.exports = {
  moduleFileExtensions: ['js', 'vue'],
  transform: {
      ".*\\.(vue)$": "vue-jest",
      "^.+\\.js$": "<rootDir>/node_modules/babel-jest"
  }
};
