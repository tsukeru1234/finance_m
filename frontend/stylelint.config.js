export default {
  extends: ["stylelint-config-standard"],
  plugins: ["stylelint-declaration-strict-value"],
  rules: {
    "scale-unlimited/declaration-strict-value": [
      ["/color/", "font-size", "padding", "margin", "gap"],
      {
        "ignoreValues": [
          "inherit", 
          "initial", 
          "transparent", 
          "none",
          "0"
        ]
      }
    ]
  }
};
