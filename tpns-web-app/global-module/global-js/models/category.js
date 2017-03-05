var SubCategory = Backbone.Model.extend({
    defaults: {
        name: '',
        slug: '',
    },
    initialize: function () {
	this.on('change', function () {
        });
    }
});


var Category = Backbone.Model.extend({
    defaults: {
        name: '',
        slug: '',
	subcategories: [],
    },
    initialize: function () {
	this.on('change', function () {
        });
    }
});

var Categories = Backbone.Collection.extend({
    model: Category,
    initialize: function () {
	this.on('change', function () {
        });
    }
});



