import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import { swc } from "rollup-plugin-swc3";

export default {
  preserveEntrySignatures: true,
  input: "src/index.js",
  output: {
    dir: "dist",
    entryFileNames: "[name].js",
    // file: "main.js", <-- this will not allow rollup to split chunk
    format: "es",

    manualChunks: {
      reactVendor: ["react", "react-dom"],
      reactRouterVendor: ["react-router-dom"],
    },
  },
  plugins: [
    resolve(),
    commonjs({ exclude: /src/ }),
    swc({
      include: [/\.[jt]sx?$/],
      exclude: /node_modules/,
      jsc: {
        parser: {
          syntax: "ecmascript",
          jsx: true,
          // preserveAllComments: false,
        },
        transform: null,
        target: "es2015",
        loose: false,
        externalHelpers: false,
      },
    }),
  ],
};
