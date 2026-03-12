const generateId = () => {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000);
    return `PROD-${timestamp}-${random}`;
};

module.exports = generateId;