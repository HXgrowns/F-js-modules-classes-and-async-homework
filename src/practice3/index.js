function handleResp() {
    return fetch("https://v1.jinrishici.com/all.json")
        .then(resp => {
            if (resp.ok) {
                return Promise.resolve(resp.json());
            }
            return Promise.reject();
        });
}

function handleData(data) {
    return [data.origin, data.author, data.content];
}

async function getResultByAsync() {
    const data = await handleResp();
    const result = await handleData(data);
    return result;
}

function getResultByPromise() {
    return handleResp().then(data => handleData(data))
        .catch(err => {
            console.log(err);
        })
}


export const getPoetry = function () {
    // return getResultByAsync();
    return getResultByPromise();
}