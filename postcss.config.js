module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px2rem-exclude": {
      remUnit: 36,
      exclude: /node_modules|folder_name/i
    }
  }
};