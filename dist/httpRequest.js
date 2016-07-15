'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HttpRequest = function () {
    function HttpRequest(config) {
        _classCallCheck(this, HttpRequest);

        this.defaults = {
            'type': 'GET',
            'url': null,
            'contentType': 'application/x-www-form-urlencoded; charset=UTF-8'
        };

        this.request = new XMLHttpRequest();
        this.options = Object.assign(this.defaults, config);

        this.setupRequest();
    }

    _createClass(HttpRequest, [{
        key: 'setupRequest',
        value: function setupRequest() {
            var _this = this;

            this.request.open(this.options.type, this.options.url, true);
            this.setHeader('Content-Type', this.options.contentType);
            this.request.onreadystatechange = function () {
                if (_this.request.readyState === 4 && _this.request.status === 200) {
                    if (_this.options.hasOwnProperty('success')) {
                        _this.options.success.apply(_this.request, [_this.request.response]);
                    }
                }
            };
        }
    }, {
        key: 'setHeader',
        value: function setHeader(name, content) {
            this.request.setRequestHeader(name, content);
        }
    }, {
        key: 'send',
        value: function send() {
            this.request.send();
        }
    }]);

    return HttpRequest;
}();