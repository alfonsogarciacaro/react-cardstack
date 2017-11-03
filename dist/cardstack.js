'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var equalsZero = function equalsZero(num) {
	return num === 0;
};
var errorMessage = 'CardStack component must have at least two child Card components. Please check the children of this CardStack instance.';

var CardStack = function (_React$Component) {
	_inherits(CardStack, _React$Component);

	function CardStack(props) {
		_classCallCheck(this, CardStack);

		var _this = _possibleConstructorReturn(this, (CardStack.__proto__ || Object.getPrototypeOf(CardStack)).call(this, props));

		var childrenLength = props.children.length || 1;
		var headerHeight = props.height / childrenLength;

		if (childrenLength <= 1) throw new Error(errorMessage);

		_this.initialTopOffsets = props.children.map(function (child, i) {
			return equalsZero(i) ? 0 : headerHeight * i;
		});

		_this.state = {
			topOffsets: _this.initialTopOffsets,
			cardSelected: false
		};
		return _this;
	}

	_createClass(CardStack, [{
		key: 'handleCardClick',
		value: function handleCardClick(id, cb) {
			var _this2 = this;

			var initialState = {
				topOffsets: [],
				cardSelected: true
			};
			var cardSelected = this.state.cardSelected;


			var nextState = function nextState(prev, offset, index) {
				var newOffset = index === id ? 0 : _this2.props.height;
				return {
					cardSelected: cardSelected ? false : true,
					topOffsets: [].concat(_toConsumableArray(prev.topOffsets), [cardSelected ? _this2.initialTopOffsets[index] : newOffset])
				};
			};

			this.setState(this.state.topOffsets.reduce(nextState, initialState));

			if (cb) cb(this.state.cardSelected, id);
		}
	}, {
		key: 'renderCards',
		value: function renderCards() {
			var _this3 = this;

			var cloneCard = function cloneCard(child, i) {
				return _react2.default.cloneElement(child, {
					key: i,
					cardId: i,
					hoverOffset: _this3.props.hoverOffset,
					cardSelected: _this3.state.cardSelected,
					height: _this3.props.height,
					topOffset: _this3.state.topOffsets[i],
					onClick: _this3.handleCardClick.bind(_this3)
				});
			};

			return this.props.children.map(cloneCard);
		}
	}, {
		key: 'render',
		value: function render() {
			var stackStyles = _extends({}, styles, {
				background: this.props.background,
				height: this.props.height,
				width: this.props.width
			});
			return _react2.default.createElement(
				'ul',
				{ style: stackStyles },
				this.renderCards()
			);
		}
	}]);

	return CardStack;
}(_react2.default.Component);

var styles = {
	display: 'flex',
	flexDirection: 'column',
	position: 'relative',
	overflow: 'hidden',
	padding: 0,
	margin: 0
};

// CardStack.propTypes = {
// 	background: React.PropTypes.string,
// 	height: React.PropTypes.number,
// 	hoverOffset: React.PropTypes.number,
// 	width: React.PropTypes.number,
// };

CardStack.defaultProps = {
	width: 350,
	height: 600,
	bgColor: 'f8f8f8',
	hoverOffset: 30
};

exports.default = CardStack;