var ProfileStats = Backbone.Model.extend({
    defaults: {
        notifications: 0,
        messages: 0,
	schedules_articles: 0
    },
    initialize: function () {
	this.on('change', function () {
        });
    }
});

var UserProfile = Backbone.Model.extend({
    defaults: {
        first_name: '',
        last_name: '',
	image: '',
        email: '',
        access_level: '', 
	stats: null
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
