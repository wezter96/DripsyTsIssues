import { DripsyProvider, makeTheme } from 'dripsy';
import { useColorScheme } from 'react-native';

const darkColors = {
  $text: 'white',
  $text2: 'white',
  $background: 'black',
  $background2: '#1D1D1D',
  $background3: '#444444',

  $primary: '#0070f3',
  $secondary: '#ff4081',
  $tertiary: '#ff4081',
};

const fontName = 'arial';

export type Color = keyof typeof darkColors;

const space = {
  // recommended: set 0 first, then double for consistent nested spacing
  $0: 0,
  $1: 2,
  $2: 4,
  $3: 8,
  $4: 16,
  $5: 32,
  $6: 64,
  $7: 128,
};

const fontSizes = {
  $0: 10,
  $1: 12,
  $2: 14,
  $3: 16,
  $4: 18,
  $5: 24,
  $6: 32,
};

const darkTheme = makeTheme({
  space,
  fontSizes,
  customFonts: {
    [fontName]: {
      // I recommend setting every weight here
      bold: 'arialBold',
      default: fontName,
      normal: fontName,
      400: fontName,
      500: 'arialMedium',
      600: 'arialBold',
      700: 'arialBold',
      800: 'arialBold',
      900: 'arialBlack',
    },
  },
  fonts: {
    root: fontName, // <- this string must match the key you set in custom fonts above!
  },
  types: {
    reactNativeTypesOnly: true,
    onlyAllowThemeValues: 'always',
    // {
    //   space: 'always',
    //   colors: 'always',
    //   fontSizes: 'always',
    //   text: 'always',
    // },
  },
  colors: darkColors,
  h1: {
    color: '$text',
  },
  h2: {
    color: '$text',
    my: '$0',
  },
  h3: {
    color: '$text',
    my: '$0',
  },
  p: {
    color: '$text',
  },
  view: {
    backgroundColor: '$background',
  },
  box: {
    backgroundColor: '$background',
    borderRadius: '0.5rem',
  },
  linearGradients: {
    fade: ['$background', 'rgba(0, 0, 0, 0)'],
  },
});

type MyTheme = typeof darkTheme;
declare module 'dripsy' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DripsyCustomTheme extends MyTheme {}
}

const lightColors: typeof darkColors = {
  $text: 'black',
  $text2: '#222',
  $background: 'white',
  $background2: '#fafafa',
  $background3: '#fafafa',

  $primary: 'blue',
  $secondary: 'red',
  $tertiary: 'red',
};

const lightTheme = {
  ...darkTheme,
  colors: lightColors,
};

export function Dripsy({ children }: { children: React.ReactNode }) {
  const colorMode = useColorScheme();
  console.log('colorMode: ', colorMode);

  return <DripsyProvider theme={colorMode == 'dark' ? darkTheme : lightTheme}>{children}</DripsyProvider>;
}
