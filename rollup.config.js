import typescript from 'rollup-plugin-typescript2';

export default [
  {
    input: 'src/aurelia-ui-virtualization.ts',
    output: {
      file: 'dist/es2015/aurelia-ui-virtualization.js',
      format: 'esm'
    },
    plugins: [
      typescript({
        cacheRoot: '.rollupcache',
        tsconfigOverride: {
          compilerOptions: {
          }
        }
      })
    ]
  },
  {
    input: 'src/aurelia-ui-virtualization.ts',
    output: {
      file: 'dist/es2015/aurelia-ui-virtualization.js',
      format: 'esm'
    },
    plugins: [
      typescript({
        cacheRoot: '.rollupcache',
        tsconfigOverride: {
          compilerOptions: {
            target: 'es2017'
          }
        }
      })
    ]
  },
  {
    input: 'src/aurelia-ui-virtualization.ts',
    output: [
      { file: 'dist/amd/aurelia-ui-virtualization.js', format: 'amd', id: 'aurelia-ui-virtualization' },
      { file: 'dist/commonjs/aurelia-ui-virtualization.js', format: 'cjs' },
      { file: 'dist/system/aurelia-ui-virtualization.js', format: 'system' },
      { file: 'dist/native-modules/aurelia-ui-virtualization.js', format: 'esm' },
    ],
    plugins: [
      typescript({
        cacheRoot: '.rollupcache',
        tsconfigOverride: {
          compilerOptions: {
            target: 'es5'
          }
        }
      })
    ]
  },
  {
    input: 'src/aurelia-ui-virtualization.ts',
    output: {
      file: 'dist/umd/aurelia-ui-virtualization.js',
      format: 'umd',
      name: 'au.uiVirtualization',
      globals: {
        'aurelia-binding': 'au',
        'aurelia-dependency-injection': 'au',
        'aurelia-pal': 'au',
        'aurelia-templating': 'au',
        'aurelia-templating-resources': 'au',
      }
    },
    plugins: [
      typescript({
        cacheRoot: '.rollupcache',
        tsconfigOverride: {
          compilerOptions: {
          }
        }
      })
    ]
  },
]
