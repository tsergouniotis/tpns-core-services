var Author = Backbone.Model.extend({
    defaults: {
	firstName: '',
	lastName: '',
	personalImage: '',													
    },
    initialize: function () {
	this.on('change', function () {
        });
    }
});
