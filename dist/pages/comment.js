'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _comment_list = require('./../components/comment_list.js');

var _comment_list2 = _interopRequireDefault(_comment_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var goodsComment = function (_wepy$page) {
  _inherits(goodsComment, _wepy$page);

  function goodsComment() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, goodsComment);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = goodsComment.__proto__ || Object.getPrototypeOf(goodsComment)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '商品评论'
    }, _this.data = {
      commentList: [{
        url: "../images/icon_nav_01_new.png",
        name: "浪子天涯",
        time: "2017-10-01 10:10",
        content: "东西收到,很满意!!真的是超级好的卖家,解答疑问不厌其烦,细致认真,关键是东西好,而且货物发得超快,包装仔细,值得信赖!",
        start: 4.5,
        children: [{
          content: "跟你交易次次都这么成功和开心的．．希望我们以后有更多的交易吧．．．哈哈"
        }]

      }, {
        url: "../images/icon_nav_02_new.png",
        name: "勇闯天下",
        time: "2017-10-01 10:10",
        content: "太感谢了，衣服很漂亮，朋友很喜欢，最主要的是买家太好了~~~大大的赞一个。。。 衣服，很合身",
        start: 4,
        children: []

      }]
    }, _this.$repeat = {}, _this.$props = { "commentList": { "xmlns:v-bind": "", "v-bind:list.sync": "commentList" } }, _this.$events = {}, _this.components = {
      commentList: _comment_list2.default
    }, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(goodsComment, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return goodsComment;
}(_wepy2.default.page);

exports.default = goodsComment;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnQuanMiXSwibmFtZXMiOlsiZ29vZHNDb21tZW50IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJjb21tZW50TGlzdCIsInVybCIsIm5hbWUiLCJ0aW1lIiwiY29udGVudCIsInN0YXJ0IiwiY2hpbGRyZW4iLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJldmVudHMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLFk7Ozs7Ozs7Ozs7Ozs7O2tNQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxtQkFBYSxDQUFDO0FBQ1ZDLGFBQUssK0JBREs7QUFFVkMsY0FBTSxNQUZJO0FBR1ZDLGNBQU0sa0JBSEk7QUFJVkMsaUJBQVMsOERBSkM7QUFLVkMsZUFBTyxHQUxHO0FBTVZDLGtCQUFVLENBQUM7QUFDVEYsbUJBQVM7QUFEQSxTQUFEOztBQU5BLE9BQUQsRUFXWDtBQUNFSCxhQUFLLCtCQURQO0FBRUVDLGNBQU0sTUFGUjtBQUdFQyxjQUFNLGtCQUhSO0FBSUVDLGlCQUFTLGdEQUpYO0FBS0VDLGVBQU8sQ0FMVDtBQU1FQyxrQkFBVTs7QUFOWixPQVhXO0FBRFIsSyxRQTRCUkMsTyxHQUFVLEUsUUFDWEMsTSxHQUFTLEVBQUMsZUFBYyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLG9CQUFtQixhQUF0QyxFQUFmLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1ZWO0FBRFUsSyxRQUdaVyxRLEdBQVcsRSxRQUNYQyxPLEdBQVUsRSxRQUNWQyxNLEdBQVMsRTs7Ozs7NkJBWEEsQ0FFUjs7OztFQS9CdUMsZUFBS0MsSTs7a0JBQTFCbEIsWSIsImZpbGUiOiJjb21tZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCBDb21tZW50TGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9jb21tZW50X2xpc3RcIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZ29vZHNDb21tZW50IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfllYblk4Hor4TorronLFxuICB9XG4gIGRhdGEgPSB7XG4gICAgY29tbWVudExpc3Q6IFt7XG4gICAgICAgIHVybDogXCIuLi9pbWFnZXMvaWNvbl9uYXZfMDFfbmV3LnBuZ1wiLFxuICAgICAgICBuYW1lOiBcIua1quWtkOWkqea2r1wiLFxuICAgICAgICB0aW1lOiBcIjIwMTctMTAtMDEgMTA6MTBcIixcbiAgICAgICAgY29udGVudDogXCLkuJzopb/mlLbliLAs5b6I5ruh5oSPISHnnJ/nmoTmmK/otoXnuqflpb3nmoTljZblrrYs6Kej562U55aR6Zeu5LiN5Y6M5YW254OmLOe7huiHtOiupOecnyzlhbPplK7mmK/kuJzopb/lpb0s6ICM5LiU6LSn54mp5Y+R5b6X6LaF5b+rLOWMheijheS7lOe7hizlgLzlvpfkv6HotZYhXCIsXG4gICAgICAgIHN0YXJ0OiA0LjUsXG4gICAgICAgIGNoaWxkcmVuOiBbe1xuICAgICAgICAgIGNvbnRlbnQ6IFwi6Lef5L2g5Lqk5piT5qyh5qyh6YO96L+Z5LmI5oiQ5Yqf5ZKM5byA5b+D55qE77yO77yO5biM5pyb5oiR5Lus5Lul5ZCO5pyJ5pu05aSa55qE5Lqk5piT5ZCn77yO77yO77yO5ZOI5ZOIXCJcbiAgICAgICAgfV0sXG5cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHVybDogXCIuLi9pbWFnZXMvaWNvbl9uYXZfMDJfbmV3LnBuZ1wiLFxuICAgICAgICBuYW1lOiBcIuWLh+mXr+WkqeS4i1wiLFxuICAgICAgICB0aW1lOiBcIjIwMTctMTAtMDEgMTA6MTBcIixcbiAgICAgICAgY29udGVudDogXCLlpKrmhJ/osKLkuobvvIzooaPmnI3lvojmvILkuq7vvIzmnIvlj4vlvojllpzmrKLvvIzmnIDkuLvopoHnmoTmmK/kubDlrrblpKrlpb3kuoZ+fn7lpKflpKfnmoTotZ7kuIDkuKrjgILjgILjgIIg6KGj5pyN77yM5b6I5ZCI6LqrXCIsXG4gICAgICAgIHN0YXJ0OiA0LFxuICAgICAgICBjaGlsZHJlbjogW10sXG5cbiAgICAgIH1cblxuXG4gICAgXSxcbiAgfVxuICBvbkxvYWQoKSB7XG5cbiAgfVxuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiY29tbWVudExpc3RcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmxpc3Quc3luY1wiOlwiY29tbWVudExpc3RcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgIGNvbW1lbnRMaXN0OiBDb21tZW50TGlzdFxuICB9XG4gIGNvbXB1dGVkID0ge31cbiAgbWV0aG9kcyA9IHt9XG4gIGV2ZW50cyA9IHt9XG59XG5cbiJdfQ==