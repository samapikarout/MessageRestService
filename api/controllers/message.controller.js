    exports.message = (req, res) => {
        const queryData = req['query'];
        const message = queryData['message']
        res.send(message);
    };