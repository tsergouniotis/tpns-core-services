var Article = Backbone.Model.extend({
    defaults: {
        headline: '',
        breakingnews: 0, 
	subhead: '',		
	softlead: '',		
	hardlead: '',	
	content: '',	
	kicker: '',	
	kicker_img: '',	
        kicker_usesoftleadtext: 0, 	
	billboard: '',	
	billboard_img: '',	
        billboard_usekickerimage: 0, 	
        billboard_imagepos: 0, 	
	nutshell: '',	
	nutshell_img: '',	
        nutshell_usekickerimage: 0, 	
        nutshell_imagepos: 0,
	guest_article: '',	
	tags: [],													
    },
    initialize: function () {
	this.on('change', function () {
	   console.log('Article collection changed!');
        });
    }
});

var Articles = Backbone.Collection.extend({
    model: Article,
    initialize: function () {
	this.on('change', function () {
	   console.log('Articles collection changed!');
        });
    }
});

var Author = Backbone.Model.extend({
    defaults: {
	firstName: '',
	lastName: '',
	personalImage: '',													
    },
    initialize: function () {
	this.on('change', function () {
	   console.log('Author collection changed!');
        });
    }
});
