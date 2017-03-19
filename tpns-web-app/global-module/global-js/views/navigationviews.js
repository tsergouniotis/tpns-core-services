var AllNavigationLinksDropDownView = Backbone.View.extend({

	render: function(){
            html='<ul id="siteSelectorList" class="admin-global-controllers-tab-list">';
            this.collection.each(function(navLink){
                var navigationLinksDropDownElement = new NavigationLinksDropDownElement({ model: navLink });
                html+=navigationLinksDropDownElement.render().el.innerHTML;
	    }, this);
            html+='</ul>';
	    this.$el.html(html);
	    return this;
	}
	
});

var NavigationLinksDropDownElement = Backbone.View.extend({

        navLinksListTemplate: _.template('<%if(label.valueOf() == selected_site.toJSON().label.valueOf()) { %><li class="current"><% } else { %><li><% }%><a href="..<%=location%>" onclick="updateSelectedSite(\'<%=label%>\')"><span><%=label %></span><i class="icon tpns-ai-selected"></i></a></li>'),

    	render: function () {
                html=this.navLinksListTemplate(this.model.toJSON());
		this.$el.html(html);
		return this;
	}
});

var SelectedNavigationLinkView = Backbone.View.extend({

        selectedTemplate: _.template('<span><%=label %></span>'),

    	render: function () {

		if (!this.model) {
			throw "Model is not set for this view";
		}
		var html='';
		html+='<p class="admin-global-controllers-tab-show">';
		html+='    <a class="dropdown" title="Open the navigation">';
		html+='		 '+this.selectedTemplate(this.model.toJSON());
		html+='		 <i class="icon tpns-ai-arrow-down"></i>';
		html+='		 <i class="icon tpns-ai-close hidden"></i>';
		html+='    </a>';
		html+='</p>';
		this.$el.html(html);
		return this;
	}
});