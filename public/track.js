(function(window, ns, $, undefined){
    var old = window[ns],
        $$ = window[ns] = {},
        page_data = {},
        event_data = [];

    $$.revert = function() {
        window[ns] = old;
        return this;
    };

    $$.version = function() {
        return page_data.version;
    };

    $$.page_data = function(){
        return page_data;
    };

    $$.event_data = function(){
        return event_data;
    };

    $$.set_data = function(d){
        $.extend(page_data,d); 
    };

    $$.add_data = function(d){
        event_data.push(d); 
    };

    $$.set_data({version:"0.0.1"});

    if(google.loader.ClientLocation) {
        $$.set_data({location: google.loader.ClientLocation});
    }
    if(window.document.referrer) {
        $$.set_data({referrer: document.referrer});
    }
    $$.set_data({
        browser: {
            os: window.navigator.oscpu,
            platform: window.navigator.platform,
            language: window.navigator.language,
            user_agent: window.navigator.userAgent
        }
    });
    $$.set_data({
        url: {
            hostname: window.location.hostname,
            port: window.location.port,
            pathname: window.location.pathname,
            query_string: window.location.search,
            anchor: window.location.hash
        }
    });

})(this,"track", jQuery);