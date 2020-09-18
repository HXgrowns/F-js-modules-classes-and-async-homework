const getURL = function (address, port, path) {
    return `${address}:${port}${path}`;
}

export default getURL;