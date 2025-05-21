const {
    randomInteger, getRandomWeather, delay, getWeather,
} = require("./test.js")

const array = ["1", "2"]


test("can get a weather string", async () => {
    const idx = await getWeather(array, 5) - 1
    const arrayval = array[idx]
    
    expect(array).toContain(arrayval)
})

test('get a random integer between 1-10', async () => {
    const validvalues = [...Array(array.length).keys()]
    console.log(validvalues)
    expect(validvalues).toContain(randomInteger(array.length))
})

test('check delay', async () => {
    expect(await delay(5)).toBeDefined
})



