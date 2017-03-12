'use strict';

var _Drawer = require('../Components/Drawer');

var _Drawer2 = _interopRequireDefault(_Drawer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toggleDrawer = function toggleDrawer() {
  _Drawer2.default.setState({ openDrawer: !this.state.openDrawer }).bind(_Drawer2.default);
};