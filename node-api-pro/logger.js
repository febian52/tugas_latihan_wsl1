const logRequest = (url) => {
    const time = new Date().toISOString();
    console.log(`[${time}] Request masuk ke endpoint: ${url}`);
};

module.exports = { logRequest };
