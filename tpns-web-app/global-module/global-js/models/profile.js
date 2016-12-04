var UserProfile = Backbone.Model.extend({
    defaults: {
        first_name: '',
        last_name: '',
	image: '',
        email: '',
        access_level: '',
    },
    initialize: function () {
	this.on('change', function () {
        });
    }
});
