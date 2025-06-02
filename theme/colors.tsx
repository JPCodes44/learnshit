export const weatherPalette = {
    // === Core Backgrounds ===
    skyDay: "#AEE1F9",        // light, airy blue for daytime skies
    skyNight: "#0D1B2A",      // deep navy for nighttime background
    cloudBase: "#D8D8D8",     // neutral light grey for cloudy sections
    cloudDeep: "#A3A3A3",     // darker grey for thicker cloud overlays
  
    // === Primary UI Elements ===
    sunAccent: "#FFD23F",     // vibrant yellow for sun icons or highlights
    rainAccent: "#4A90E2",    // cool blue for raindrops, progress bars, etc.
    stormAccent: "#2F3C7E",   // indigo/steel blue for storms and thunder
    snowAccent: "#FFFFFF",    // crisp white for snowflakes or frost elements
    fogAccent: "#B0BEC5",     // light slate grey for fog overlays or backgrounds
  
    // === Text & Foreground ===
    textPrimary: "#1A1A1A",   // dark charcoal for main text on light backgrounds
    textSecondary: "#4F4F4F", // mid-grey for secondary text/details
    textNight: "#E0E0E0",     // light grey for text on dark/night backgrounds
  
    // === Interactive / Accent Colors ===
    btnPrimary: "#155C81",    // deep blue (carried from your `blue`) for primary buttons
    btnSecondary: "#7CC576",  // calm green (your `green`) for secondary actions
    linkHighlight: "#00A1C1", // dynamic lightBlue for links or focuss states
  
    // === Alerts & Warnings ===
    alertWarning: "#FFD700",  // yellow for mild alerts (UV index, wind advisory)
    alertSevere: "#DE5054",   // red for severe weather (tornado, hurricane)
    alertInfo: "#00A1C1",     // cyan for informational alerts (humidity, pollen)
  
    // === Miscellaneous ===
    divider: "#E0E0E0",       // super-light grey for dividing lines/sections
    cardBg: "#F4F7FC",        // off-white (your `lightGrey`) for cards/panels
    radarOverlay: "rgba(124, 197, 118, 0.3)",  // semi-transparent green for radar
};

export type PaletteKey = keyof typeof weatherPalette;
