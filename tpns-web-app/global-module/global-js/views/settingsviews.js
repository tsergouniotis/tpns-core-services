var AllPropertiesDropDownView = Backbone.View.extend({

        groupTemplate: _.template('<li><a href="../<%= dashboard%>"><span><%= group_name%></span><i class="icon tpns-ai-selected"></i></a></li>'),
        propertyListTemplate: _.template('<%properties.each(function(property) { if(property.toJSON().name.valueOf() == selected_site.valueOf()) { %><li class="current"><% } else { %><li><% }%><a href="..<%=property.toJSON().location%>" onclick="updateSelectedSite(\'<%=property.toJSON().name%>\')"><span><%=property.toJSON().name %></span><i class="icon tpns-ai-selected"></i></a></li> <% }); %>'),

    	render: function () {

		if (!this.model) {
			throw "Model is not set for this view";
		}
		
		var html = "";
                html+='<ul id="siteSelectorList" class="admin-global-controllers-tab-list">';
                html+='    '+this.groupTemplate(this.model.toJSON());
                html+='    '+this.propertyListTemplate(this.model.toJSON());
                html+='</ul>';
		this.$el.html(html);
		return this;
	}
});
