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
      }
    },
    screens: {
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
  darkMode: 'class'
}
export default config
