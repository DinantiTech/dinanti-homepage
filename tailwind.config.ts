import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "PRIMARY": "#FDFFF8",
        "SECONDARY": "#EDEFE2",
        "ACCENT": "#D7DCBE",
        "NEUTRAL": "#263C24",
        "MIDNIGHT": "#1D1D1D"
      }
    },
    screens: {
      xxxsss: "200px",
      xxxss: "250px",
      xxss: "300px",
      xxs: "350px",
      xs: "400px",
      sm: "600px",
      md: "700px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    }
  },
  plugins: [ require('daisyui'), ],
  darkMode: 'class',
  daisyui: {
    themes: [
      {
        base: {
          "primary": "#FDFFF8",
          "secondary": "#EDEFE2",
          "accent": "#263C24",
          "neutral": "#263C24",
          "base-100": "#D7DCBE",
        }
      },
      "light",
      "dark"
    ],
  },
}
export default config
