module.exports = {
  env: {
    production: {
      plugins: [
        [
          "transform-react-remove-prop-types",
          {
            ignoreFilenames: ["node_modules"],
          },
        ],
      ],
    },
  },
  presets: [
    [
      "@babel/preset-env",
    ],
    "@babel/preset-react",
  ],
};
