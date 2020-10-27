export const comment = [
  // Test with comments
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
  // Test with no comments
  {
    css: "body { color: black; }",
    ast: {
      type: "stylesheet",
      stylesheet: {
        rules: [{
          type: "rule",
          selectors: ["body"],
          declarations: [
            {
              name: "color",
              type: "property",
            },
          ],
        }],
      },
    },
  },
];
