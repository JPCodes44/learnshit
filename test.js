
const syncHello = () => {
    setTimeout(() => console.log("sync hello from the future"), 1000)
    console.log("sync hello")
}

const asyncHello = async () => {
    console.log("async hello");
    await new Promise((res, rej) => {
        setTimeout(res, 1000);
    });
    console.log("async hello from the future");
}

asyncHello().catch(console.error);
syncHello();
