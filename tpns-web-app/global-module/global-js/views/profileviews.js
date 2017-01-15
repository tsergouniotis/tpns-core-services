var ProfileSummaryView = Backbone.View.extend({

        imageTemplate: _.template('<img src="<%= image%>" alt="<%= first_name %> <%= last_name %>"/>'),
        fullNameTemplate1: _.template('<h5><%= first_name %> <%= last_name %></h5>'),
        fullNameTemplate2: _.template('<span class="username"><span class="username-inner"><%= first_name %> <%= last_name %></span><i class="icon tpns-ai-arrow-down"></i><i class="icon tpns-ai-close hidden"></i></span>'),
        emailTemplate: _.template('<small><%= email %></small>'),

    	render: function () {

		if (!this.model) {
			throw "Model is not set for this view";
		}
		
		var html = "";
                html+='<div class="admin-global-controllers-tab-container">';
                html+='    <div class="admin-global-controllers-tab-button">';
                html+='        <a title="Preview your profile options">';
                html+='            <p class="dropdown admin-global-controllers-tab-show">';
                html+='                <span class="admin-user-profile-preview-nav-img-container">';
                html+='                    '+this.imageTemplate(this.model.toJSON());
                html+='                    <span class="admin-user-information-mobile-has-notifications"></span>';
                html+='                </span>';
                html+='                '+this.fullNameTemplate2(this.model.toJSON());
                html+='            </p>';
                html+='        </a>';
                html+='    </div>';
                html+='    <div class="dropdown-menu admin-global-controllers-tab-content admin-global-controllers-tab-content-right hidden textl">';
		html+='        <div class="allArticlesProfileSummaryContainer global-table admin-user-profile-preview-content-details">';
                html+='            <div class="global-table-row">';
                html+='                <div class="global-table-cell">';
                html+='                    <div class="admin-user-profile-preview-content-image">';
                html+='                        '+this.imageTemplate(this.model.toJSON());
                html+='                    </div>';
                html+='                </div>';
                html+='                <div class="global-table-cell">';
                html+='                    <div class="admin-user-profile-preview-content-username">';
                html+='                        '+this.fullNameTemplate1(this.model.toJSON());
                html+='                    </div>';
                html+='                    <div class="admin-user-profile-preview-content-email">';
                html+='                        '+this.emailTemplate(this.model.toJSON());
                html+='                    </div>';
                html+='                    <div class="admin-global-controllers-button">';
                html+='                        <h6 class="textc"><a href="../user-module/user-profile.html">View Profile</a></h6>';
                html+='                    </div>';
                html+='                </div>';
                html+='            </div>';
                html+='        </div>';
                html+='        <div class="global-table admin-user-profile-preview-content-access-level">';
                html+='            <div class="global-table-row">';
                html+='                <div class="global-table-cell">';
                html+='                    <p>Access Level</p>';
                html+='                </div>';
                html+='                <div class="global-table-cell">';
                html+='                    <p>Editor</p>';
                html+='                </div>';
                html+='            </div>';
                html+='            <div class="global-table-row">';
                html+='                <div class="global-table-cell">';
                html+='                    <p>Newspaper Access</p>';
                html+='                </div>';
                html+='                <div class="global-table-cell">';
                html+='                    <ul class="access-level-newspapers">';
                html+='                        <li><p><a href="../newspaper-dashboard-module/newspaper-bi-dashboard.html"><span class="icon tpns-nti-news-website"></span></a></p></li>';
                html+='                        <li><p><a href="../newspaper-dashboard-module/newspaper-bi-dashboard.html"><span class="icon tpns-nti-sports-website"></span></a></p></li>';
                html+='                        <li><p><a href="../newspaper-dashboard-module/newspaper-bi-dashboard.html"><span class="icon tpns-nti-astrology-website"></span></a></p></li>';
                html+='                        <li><p><a href="../newspaper-dashboard-module/newspaper-bi-dashboard.html"><span class="icon tpns-nti-lifestyle-website"></span></a></p></li>';
                html+='                    </ul>';
                html+='                </div>';
                html+='            </div>';
                html+='        </div>';
                html+='        <div class="admin-global-controllers-button admin-global-controllers-transparent-button">';
                html+='            <h6 class="textc"><a href="../access-module/access.html">Exit Account</a></h6>';
                html+='        </div>';
                html+='    </div>';
                html+='</div>';
		this.$el.html(html);
		return this;
	}
});                                    	

var ProfileNotificationsView = Backbone.View.extend({

        notificationsTemplate: _.template('            <small><%=notifications %></small>'),

    	render: function () {

		if (!this.model) {
			throw "Model is not set for this view";
		}

                var html = '<div class="admin-global-controllers-admin-info-container">';
                html += '    <p><a href="../notifications-module/notifications.html" title="Preview your latest notifications"><i class="icon tpns-ai-notifications"></i>';
                html += '        <span class="admin-global-controllers-totals">';
                html += this.notificationsTemplate(this.model.toJSON().stats.toJSON());
                html += '        </span>';
                html += '    </a></p>';
                html += '</div>';
		this.$el.html(html);
		return this;
	}
});   

var ProfileMessagesView = Backbone.View.extend({

        messagesTemplate: _.template('            <small><%=messages %></small>'),

    	render: function () {

		if (!this.model) {
			throw "Model is not set for this view";
		}

                var html = '<div class="admin-global-controllers-admin-info-container">';
                html += '    <p><a href="../messages-module/inbox.html" title="Preview your latest messages"><i class="icon tpns-ai-email-open"></i>';
                html += '        <span class="admin-global-controllers-totals">';
                html += this.messagesTemplate(this.model.toJSON().stats.toJSON());
                html += '        </span>';
                html += '    </a></p>';
                html += '</div>';
		this.$el.html(html);
		return this;
	}
}); 


var ProfileSelectedArticlesView = Backbone.View.extend({

        sceduledArticelsTemplate: _.template('            <small><%=schedules_articles %></small>'),

    	render: function () {

		if (!this.model) {
			throw "Model is not set for this view";
		}
                var html = '<div class="admin-global-controllers-admin-info-container">';
                html += '    <p><a href="../calendar-module/calendar.html" title="Preview your scheduled articles"><i class="icon tpns-ai-calendar-month-number"></i>';
                html += '        <span class="admin-global-controllers-totals">';
                html += this.sceduledArticelsTemplate(this.model.toJSON().stats.toJSON());
                html += '        </span>';
                html += '    </a></p>';
                html += '</div>';
		this.$el.html(html);
		return this;
	}
});  


