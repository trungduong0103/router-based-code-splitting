import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import { swc } from "rollup-plugin-swc3";

export default {
  input: "src/index.js",
  output: {
    // the following config will not allow code-splitting
    // file: "main.js",
    // the following config will allow code-splitting
    dir: "dist",
    entryFileNames: "[name].js",
    format: "es",
    // optional: to split libraries into their own chunks
    manualChunks: {
      reactVendor: ["react", "react-dom"],
      reactRouterVendor: ["react-router-dom"],
    },
  },
  plugins: [
    resolve(),
    // ignore src/ folder because we're compiling it to esm anyways
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
