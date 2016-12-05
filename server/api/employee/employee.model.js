'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EmployeeSchema = new _mongoose2.default.Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  client: {
    type: [],
    required: true
  },
  skill: {
    type: [],
    required: true
  },
  recruiter: {
    type: String,
    required: true
  },
  placement_type: {
    type: String,
    required: true
  },
  salary: {
    type: Number,
    required: true
  },
  insurance: {
    type: Number,
    required: true
  },
  relocation: {
    type: Number,
    required: true
  },
  immigration: {
    type: Number,
    required: true
  },
  pay_vacation_cost: {
    type: Number,
    required: true
  },
  ksquare_hourly_cost: {
    type: Number,
    required: true
  },
  target_bill_rate: {
    type: Number,
    required: true
  },
  client_bill_pay: {
    type: Number,
    required: true
  },
  activate: {
    type: Boolean,
    required: true
  }
});

exports.default = _mongoose2.default.model('Employee', EmployeeSchema);
//# sourceMappingURL=employee.model.js.map
