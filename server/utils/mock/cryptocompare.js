var q = require('q');

module.exports = {
    priceHistorical: function (crypto, currencies, timeStamp) {
        var deferred = q.defer();
        setTimeout(function () {
            deferred.resolve({
                USD: 2,
                EUR: 1
            });
        });
        return deferred.promise;
    }
};
