import { weatherPalette } from "./colors";

export const weatherTheme = {
    weatherPalette,
    colors: {
        foreground: weatherPalette,
        background: weatherPalette
    },
    elementSizes: {
        // === Layout Basics ===
        headerHeight: 60,          // top nav bar (logo, menu, search)
        footerHeight: 50,          // bottom footer (credits, links)
        sidebarWidth: 280,         // if you have a sidebar for links/controls
        
        // === Forecast Cards ===
        forecastCardWidth: 200,    // single-day forecast card width
        forecastCardHeight: 260,   // card height (icon + temp + details)
        forecastGridGap: 16,       // gap between cards in a grid
        
        // === Icon Sizes ===
        iconSmall: 32,             // small weather icons (e.g., humidity, wind)
        iconMedium: 64,            // medium icons (on cards for sun/cloud/rain)
        iconLarge: 100,            // large hero icon (current-condition spotlight)
        
        // === Map & Charts ===
        mapWidth: 600,             // embedded map/container width
        mapHeight: 400,            // map/container height
        chartWidth: 500,           // temperature/precipitation chart width
        chartHeight: 300,          // chart height
        
        // === Widgets & Controls ===
        searchInputWidth: 320,     // width for city-search input field
        searchInputHeight: 40,     // height for that input
        buttonHeight: 42,          // general button height (e.g., “Get Forecast”)
        buttonWidth: 120,          // standard button width
        toggleSwitchWidth: 50,     // unit-toggle (°C/°F) switch
        toggleSwitchHeight: 24,    // height for that toggle
        
        // === Typography & Spacing ===
        baseFontSize: 16,          // root font size (1rem = 16px)
        headingFontSize: 24,       // H1/H2 sizing baseline
        contentMaxWidth: 1024,     // max content area for readability
        sectionPadding: 20,        // vertical padding between sections
        cardPadding: 16,           // padding inside each card/container
    },
    fontSizes: {
        xs: 12,    // extra-small text (captions, labels)
        sm: 14,    // small text (body copy, footnotes)
        md: 16,    // medium text (primary body, paragraphs)
        lg: 20,    // large text (section headings, subheaders)
        xl: 24,    // extra-large text (main headings, hero titles)
        xxl: 32,   // extra-extra-large (page titles, prominent callouts)
    },
      
    spacings: {
        xs: 4,     // tiny gap (between icons/text)
        sm: 8,     // small gap (grid gutters, small paddings)
        md: 16,    // medium gap (standard section padding, card padding)
        lg: 24,    // large gap (between major sections, generous padding)
        xl: 32,    // extra-large gap (wide margins, hero spacing)
        xxl: 40,   // extra-extra-large (full-width breaks, super spaced layouts)
    },
      
    fontWeights: {
        normal: "normal",
        bold: "bold",
    } as const,

}