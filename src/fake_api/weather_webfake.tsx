// A fake weather return that waits 5 seconds then returns the random weather from a given list

const randomInteger = (max: number): number => {
    return Math.floor(Math.random() * max)
}

const getRandomWeather = (array: string[]): string => {
    return array[randomInteger(array.length)]
}

const delay = async (t: number) => {
    await new Promise((res, rej) => {
        setTimeout(res, t)
    })
}

const getWeather = async (array: string[]): Promise<string> => {
    await delay(500)
    const weather = getRandomWeather(array)
    return weather
}

export default getWeather