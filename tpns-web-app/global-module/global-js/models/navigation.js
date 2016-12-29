var NavigationDestination = Backbone.Model.extend({
    defaults: {
        label: '',
	location: '',
    },
    initialize: function () {
	this.on('change', function () {
        });
    }
});

var NavigationDestinations = Backbone.Collection.extend({
    model: NavigationDestination,
    initialize: function () {
	this.on('change', function () {
        });
    }
});
