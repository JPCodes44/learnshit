// A fake weather return that waits 5 seconds then returns the random weather from a given list

const randomInteger = (max) => {
    return Math.floor(Math.random() * max)
}

const getRandomWeather = (array) => {
    return array[randomInteger(array.length)]
}

const delay = async () => {
    await new Promise((res, rej) => {
        setTimeout(res, 50000)
    })
}

const getWeather = () => {
    delay
    return getRandomWeather(["1", "2"])
}

console.log(getWeather())

