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
	featured_option: '--',	
	editors_choice_option: '--',	
	guest_article: '',
	statistics: {
	    unique_visitors: 0,	
	},
	author: {
	    firstName: '',
	    lastName: '',
	    personalImage: '',													
        },
	categories:[],
	tags: [],	
	images: [],	
	audio: [],										
	video: [],										
	comments: 0,	
	status: 'Published'																		
    },
    initialize: function () {
	this.on('change', function () {
        });
    }
});

var Articles = Backbone.Collection.extend({
    model: Article,
    initialize: function () {
	this.on('change', function () {
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
        });
    }
});

var defaultAuthor = new Author();
