export const comment = [
  {
    css: "/* body { color: black; } */",
    ast: {
      type: "stylesheet",
      stylesheet: {
        rules: [{
          type: "comment",
          text: " body { color: black; } ",
        }],
      },
    },
  },
];
