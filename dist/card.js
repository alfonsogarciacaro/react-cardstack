'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Card = function (_React$Component) {
	_inherits(Card, _React$Component);

	function Card(props) {
		_classCallCheck(this, Card);

		var _this = _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this, props));

		_this.state = {
			hover: false
		};
		return _this;
	}

	_createClass(Card, [{
		key: 'handleClick',
		value: function handleClick() {
			var _props = this.props,
			    cardId = _props.cardId,
			    cardClicked = _props.cardClicked;

			this.props.onClick(cardId, cardClicked);
			this.setState({ hover: false });
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props2 = this.props,
			    cardId = _props2.cardId,
			    cardSelected = _props2.cardSelected,
			    topOffset = _props2.topOffset,
			    hoverOffset = _props2.hoverOffset;

			var offset = cardId !== 0 && this.state.hover && !cardSelected ? hoverOffset : 0;
			var transform = 'translate3d(0,' + (topOffset - offset) + 'px,0)';
			var cardStyles = _extends({}, styles, {
				background: this.props.background,
				transform: transform,
				WebkitTransform: transform,
				height: this.props.height
			});
			return _react2.default.createElement(
				'li',
				{
					style: cardStyles,
					onClick: this.handleClick.bind(this),
					onMouseEnter: function onMouseEnter() {
						return _this2.setState({ hover: true });
					},
					onMouseLeave: function onMouseLeave() {
						return _this2.setState({ hover: false });
					} },
				this.props.children
			);
		}
	}]);

	return Card;
}(_react2.default.Component);

var styles = {
	position: 'absolute',
	top: 0,
	width: '100%',
	cursor: 'pointer',
	transition: '0.5s transform ease',
	WebkitTransition: '-webkit-transform 0.5s ease'
};

exports.default = Card;