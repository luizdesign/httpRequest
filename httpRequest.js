class HttpRequest {
    defaults = {
        'type': 'GET',
        'url': null,
        'contentType': 'application/x-www-form-urlencoded; charset=UTF-8'
    };

    constructor (config) {
        this.request = new XMLHttpRequest();
        this.options = Object.assign(this.defaults, config);

        this.setupRequest();
    };

    setupRequest () {
        this.request.open(
            this.options.type,
            this.options.url,
            true
        );
        this.setHeader(
            'Content-Type',
            this.options.contentType
        );
        this.request.onreadystatechange = () => {
            if (
                this.request.readyState === 4
                && this.request.status === 200
            ) {
                if (this.options.hasOwnProperty('success')) {
                    this.options.success.apply(
                        this.request,
                        [this.request.response]
                    );
                }
            }
        };
    }

    setHeader (name, content) {
        this.request.setRequestHeader(name, content);
    }

    send () {
        this.request.send();
    }
}
