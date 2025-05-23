// Default types to import in each tsx page

// =========== COMMON PROPS ===========
// Allows for additional types to be passed through <{}> using <P extends object = {}> = P & ....

type CommonProps<P extends object = {}> = P & React.PropsWithChildren<{}>

// type CommonPropsWithStyle<P extends object = {}> = P & CommonProps<{
//     style?: React.CSSProperties
// }>

// ============ SPECIFIC PROPS ===========
// You can enter additional types in <{}> based on your components needs

export type PaddingProps = CommonProps<{}>

export type ContentProps = CommonProps<{}>

export type ULProps = CommonProps<{}>

export type BodyPaddingProps = CommonProps<{}>

export type ButtonProps = CommonProps<{
    onClick?: void
  }>

export type NavProps = CommonProps<{}>

export type ListProps = CommonProps<{
    text?: string
    href?: string
}>

// ============ SPECIFIC CONSTANTS ===========

export const ListOfWeathers: string[] = [
    "Sunny",
    "Mostly Sunny",
    "Partly Cloudy",
    "Cloudy",
    "Overcast",
    "Light Rain",
    "Rain",
    "Heavy Rain",
    "Thunderstorms",
    "Snow",
    "Sleet",
    "Hail",
    "Freezing Rain",
    "Fog",
    "Mist",
    "Windy",
    "Breezy",
    "Drizzle",
    "Clear Night",
    "Mostly Clear Night",
    "Partly Cloudy Night",
    "Hot",
    "Cold",
    "Humid",
    "Dry",
    "Blizzard"
  ];
  