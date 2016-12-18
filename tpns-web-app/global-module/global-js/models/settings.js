var Settings = Backbone.Model.extend({
    defaults: {
        groupName: 'TPNS',
        sites: ['Astrology','Lifestyle', 'News', 'Sports']
    },
    initialize: function () {
	this.on('change', function () {
        });
    }
});
