var ProfileSummaryView = Backbone.View.extend({

        imageTemplate: _.template('<img src="<%= image%>" alt="<%= first_name %> <%= last_name %>"/>'),
        fullNameTemplate: _.template('<h5><%= first_name %> <%= last_name %></h5>'),
        emailTemplate: _.template('<small><%= email %></small>'),

    	render: function () {

		if (!this.model) {
			throw "Model is not set for this view";
		}
		
		var html = "";
                html+='<div class="global-table-row">';
                html+='    <div class="global-table-cell">';
                html+='        <div class="admin-user-profile-preview-content-image">';
                html+='            '+this.imageTemplate(this.model.toJSON());
                html+='        </div>';
                html+='    </div>';
                html+='    <div class="global-table-cell">';
                html+='        <div class="admin-user-profile-preview-content-username">';
                html+='            '+this.fullNameTemplate(this.model.toJSON());
                html+='        </div>';
                html+='        <div class="admin-user-profile-preview-content-email">';
                html+='            '+this.emailTemplate(this.model.toJSON());
                html+='        </div>';
                html+='        <div class="admin-global-controllers-button">';
                html+='            <h6 class="textc"><a href="../user-module/user-profile.html">View Profile</a></h6>';
                html+='        </div>';
                html+='    </div>';
                html+='</div>';
		this.$el.html(html);
		return this;
	}
});


