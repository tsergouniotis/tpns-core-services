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
      }
});
