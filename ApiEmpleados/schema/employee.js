const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    identity: {type: String, unique: true, required: true, minlength: 5  }, //type String,
    name: {type: String, required: true, minlength: 2  },
    dateinit: {type :Date , required: true  },
    dateend: {type :Date , required: true  },
    salary: {type: Number, required: true  },
    dayworked: {type: Number, required: true  },
    severance: {type: Number, required: true  },
    interestAmounts: {type: Number, required: true  },

});

module.exports = mongoose.model('Employee', employeeSchema, "employee")