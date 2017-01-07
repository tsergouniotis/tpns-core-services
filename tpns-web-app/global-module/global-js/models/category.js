var SubCategory = Backbone.Model.extend({
    defaults: {
        name: ''
    },
    initialize: function () {
	this.on('change', function () {
        });
    }
});

var Category = Backbone.Model.extend({
    defaults: {
        name: '',
	subcategories: []
    },
    initialize: function () {
	this.on('change', function () {
        });
    }
});
