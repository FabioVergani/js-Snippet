// simulateAsyncData
const fullfilledPromise = (value, min, max) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(value);
        }, Math.floor(Math.random() * (max - min)) + min);
    });
};


const getData = () => {
    return fullfilledPromise(
        {
            status: 200,//everything is fine
            data: []
        },
        0,
        2
    );
};
