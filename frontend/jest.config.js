module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  "jest": {
    "testMatch ": {
      "default": [
        "**/tests/**/*.spec.[jt]s?(x)",
        "**/__tests__/*.[jt]s?(x)"
      ]
    }
  }
}
