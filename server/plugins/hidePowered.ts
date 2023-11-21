export default defineNitroPlugin((app) => {
    app.hooks.hook('render:response', function(res) {
        if(res?.headers?.["x-powered-by"])
            delete res.headers['x-powered-by'];
    });
});