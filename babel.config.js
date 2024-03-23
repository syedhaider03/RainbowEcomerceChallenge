module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./src/'],
        alias: {
          assets: './src/assets',
          svgs: './src/assets/svgs',
          images: './src/assets/images',
          lottiefiles: './src/assets/lottiefiles',
          components: './src/components',
          helpers: './src/helpers',
          // redux: './src/redux',
          store: './src/redux/store',
          slices: './src/redux/slices',
          hooks: './src/hooks',
          mock: './src/mock',
          routes: './src/routes',
          screens: './src/screens',
          services: './src/services',
          skeletons: './src/skeletons',
          theme: './src/theme',
          types: './src/types',
          utils: './src/utils',
          network: './src/network',
          molecules: './src/molecules',
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
        blocklist: null,
        allowlist: null,
        blacklist: null, // DEPRECATED
        whitelist: null, // DEPRECATED
        safe: false,
        allowUndefined: true,
        verbose: false,
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
