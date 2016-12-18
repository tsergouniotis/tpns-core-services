var AllPropertiesDropDownView = Backbone.View.extend({

        groupTemplate: _.template('<li><a href="../<%= dashboard%>"><span><%= group_name%></span><i class="icon tpns-ai-selected"></i></a></li>'),
        propertyListTemplate: _.template('<%properties.each(function(property) { %><li><a href="..<%=property.toJSON().location %>"><span><%=property.toJSON().name %></span><i class="icon tpns-ai-selected"></i></a></li><% }); %>'),


    	render: function () {

		if (!this.model) {
			throw "Model is not set for this view";
		}
		
		var html = "";
                html+='<ul class="admin-global-controllers-tab-list">';
                html+='    '+this.groupTemplate(this.model.toJSON());
                html+='    '+this.propertyListTemplate(this.model.toJSON());
                html+='</ul>>';
		this.$el.html(html);
		return this;
	}

//<% if(property.toJSON().name.includes("News")) { %> class="current"> <% } %>
});

