module.exports = {
  content: ["./pages/**/*.{js,jsx}",
  "./components/**/*.{js,jsx}",
  "./node_modules/flowbite/**/*.js",
],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
]

}
