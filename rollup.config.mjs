import peerDepsExternal from "rollup-plugin-peer-deps-external";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import tsconfigPaths from "rollup-plugin-tsconfig-paths";

export default {
    input: "src/index.tsx",
    output: [
        {
            file: "dist/index.cjs.js",
            format: "cjs",
            sourcemap: true,
            inlineDynamicImports: true
        },
        {
            file: "dist/index.esm.js",
            format: "esm",
            sourcemap: true,
            inlineDynamicImports: true
        }
    ],
    external: ["react", "dayjs"],
    plugins: [
        peerDepsExternal(),
        tsconfigPaths(),
        resolve(),
        commonjs(),
        typescript({
            tsconfig: "./tsconfig.rollup.json",
            noForceEmit: false
        })
    ]
};
