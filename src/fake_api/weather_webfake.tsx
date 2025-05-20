// A fake weather return that waits 5 seconds then returns the random weather from a given list

const randomInteger = (max: number): number => {
    return Math.floor(Math.random() * max)
}

const getRandomWeather = (array: string[]): string => {
    return array[randomInteger(array.length)]
}

const getWeather = () => {
    setTimeout(getRandomWeather, 50000)
}

export default getWeather

