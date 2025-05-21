// A fake weather return that waits 5 seconds then returns the random weather from a given list

const randomInteger = (max) => {
    return Math.floor(Math.random() * max)
}

const getRandomWeather = (array) => {
    return array[randomInteger(array.length)]
}

const delay = (t) => {
    return new Promise((res) => setTimeout(res, t))
}

const getWeather = async (array, t) => {
    await delay(t)
    return getRandomWeather(array)
}


module.exports = { randomInteger, getRandomWeather, delay, getWeather }
