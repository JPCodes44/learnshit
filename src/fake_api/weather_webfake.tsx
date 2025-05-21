// A fake weather return that waits 5 seconds then returns the random weather from a given list

const randomInteger = (max: number): number => {
    return Math.floor(Math.random() * max)
}

const getRandomWeather = (array: string[]): string => {
    return array[randomInteger(array.length)]
}

const delay = async () => {
    await new Promise((res, rej) => {
        setTimeout(res, 50000)
    })
}

const getWeather = (array: string[]) => {
    delay
    return getRandomWeather(array)
}

export default getWeather