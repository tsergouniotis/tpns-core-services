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

var UserProfiles = Backbone.Collection.extend({
    model: UserProfile,
    initialize: function () {
	this.on('change', function () {
        });
    }
});
