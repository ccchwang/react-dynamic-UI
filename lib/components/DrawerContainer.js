'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _drawer = require('../styles/drawer');

var _drawer2 = _interopRequireDefault(_drawer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import animation from '../animations/jumbotronFadeUp'


var TodoList = function (_React$Component) {
  _inherits(TodoList, _React$Component);

  function TodoList(props) {
    _classCallCheck(this, TodoList);

    var _this = _possibleConstructorReturn(this, (TodoList.__proto__ || Object.getPrototypeOf(TodoList)).call(this, props));

    _this.state = { openDrawer: false };
    _this.toggle = _this.toggle.bind(_this);

    return _this;
  }

  _createClass(TodoList, [{
    key: 'toggle',
    value: function toggle() {
      this.setState({ openDrawer: !this.state.openDrawer });
    }
  }, {
    key: 'render',
    value: function render() {
      // console.log(this.props.children)
      var drawer = void 0;
      var backdrop = void 0;

      if (this.state.openDrawer) {
        drawer = _react2.default.createElement(
          'div',
          { key: 'toggle-drawer', className: 'react-dynamic-drawer' },
          this.props.children
        );

        backdrop = _react2.default.createElement('div', { style: _drawer2.default.backdrop, onClick: this.toggle });
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'button',
          { className: 'btn drawer-btn', onClick: this.toggle },
          'Open Drawer'
        ),
        _react2.default.createElement(
          _reactAddonsCssTransitionGroup2.default,
          {
            transitionName: 'drawer',
            transitionEnterTimeout: 450,
            transitionLeaveTimeout: 450 },
          drawer
        ),
        _react2.default.createElement(
          _reactAddonsCssTransitionGroup2.default,
          {
            transitionName: 'backdrop',
            transitionEnterTimeout: 300,
            transitionLeaveTimeout: 300 },
          backdrop
        )
      );
    }
  }]);

  return TodoList;
}(_react2.default.Component);

exports.default = TodoList;