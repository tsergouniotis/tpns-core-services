var Property = Backbone.Model.extend({
    defaults: {
        name: '',
	location: '',
	icon: ''
    },
    initialize: function () {
	this.on('change', function () {
        });
    }
});

var Properties = Backbone.Collection.extend({
    model: Property,
    initialize: function () {
	this.on('change', function () {
        });
    }
});
