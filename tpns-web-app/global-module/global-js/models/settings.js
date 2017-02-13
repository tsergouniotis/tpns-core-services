var Settings = Backbone.Model.extend({
    defaults: {
        group_name: '',
        dashboard: '',
        properties: new Properties()
    },
    initialize: function () {
	this.on('change', function () {
        });
    }
});
