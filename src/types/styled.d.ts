import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      // Neutral colors (light to dark)
      NEUTRAL100: string;
      NEUTRAL150: string;
      NEUTRAL200: string;
      NEUTRAL300: string;
      NEUTRAL400: string;
      NEUTRAL500: string;
      NEUTRAL600: string;
      NEUTRAL700: string;
      NEUTRAL800: string;
      NEUTRAL900: string;
      NEUTRAL100FIXED: string;
      NEUTRAL900FIXED: string;

      // Primary colors
      PRIMARY100: string;
      PRIMARY200: string;
      PRIMARY300: string;
      PRIMARY400: string;
      PRIMARY500: string;
      PRIMARY600: string;
      PRIMARY700: string;
      PRIMARY800: string;

      // Secondary colors
      SECONDARY400: string;
      SECONDARY500: string;
      SECONDARY600: string;

      // Alert colors
      ALERT_RED400: string;
    };
  }
}
