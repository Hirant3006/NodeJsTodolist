var configValues = require("./config");

module.exports = {
    getDbConnectionString: function () {
        return `mongodb://${ configValues.username}:${ configValues.password }@ds213239.mlab.com:13239/todolist`;
    }
}
