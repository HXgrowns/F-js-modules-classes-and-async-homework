
function handleData(data) {
    return [data.origin, data.author, data.content];
}

function getResultByPromise() {
    return fetch("https://v1.jinrishici.com/all.json")
        .then(resp => resp.json())
        .then(data => handleData(data))
        .catch(err => {
            console.log(err);
        });
}

async function getResultByAsync() {
    try {
        const response = await fetch("https://v1.jinrishici.com/all.json");
        const data = await response.json();
        const result = handleData(data);
        return result;
    } catch (err) {
        return e;
    }
}


export const getPoetry = function () {
    // return getResultByAsync();
    return getResultByPromise();
}