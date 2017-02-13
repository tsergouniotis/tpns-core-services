var HeadlineView = Backbone.View.extend({

        headlineTextTemplate: _.template('<textarea class="new-article-textbox" name="headlineEditor" id="headlineEditor" maxlength="100" placeholder="Add Headline here..."><%= headline %></textarea>'),

    	render: function () {

		if (!this.model) {
			throw "Model is not set for this view";
		}
		
		var html = this.headlineTextTemplate(this.model.toJSON());
		html+='<h6 class="limit textr">100</h6>';
		html+='<div class="new-article-content-options">';
		html+='<p class="admin-global-checkbox"><label><input type="checkbox" name="single-article-checkbox"><span class="admin-global-checkbox-label">Show as Breaking News</span></label></p>';
		html+='</div>';
		this.$el.html(html);
		return this;
	}
});

var SubheadView = Backbone.View.extend({

        subheadTextTemplate: _.template('<textarea class="new-article-textbox" name="subheadEditor" id="subheadEditor" maxlength="150" placeholder="Add Subhead here..."><%= subhead %></textarea>'),

    	render: function () {

		if (!this.model) {
			throw "Model is not set for this view";
		}
		
		var html = this.subheadTextTemplate(this.model.toJSON());
		html+='<h6 class="limit textr">150</h6>';
		this.$el.html(html);
		return this;
	}
});

var SoftleadView = Backbone.View.extend({

        softleadTextTemplate: _.template('<textarea class="new-article-textbox" name="softLeadEditor" id="softLeadEditor" rows="10" cols="80" placeholder="Add Soft-lead Sentence here..."><%= softlead %></textarea>'),

    	render: function () {

		if (!this.model) {
			throw "Model is not set for this view";
		}
		
		var html = this.softleadTextTemplate(this.model.toJSON());
		this.$el.html(html);
		return this;
	}
});

var HardleadView = Backbone.View.extend({

        hardleadTextTemplate: _.template('<textarea class="new-article-textbox" name="hardLeadEditor" id="hardLeadEditor" rows="10" cols="80" placeholder="Add Hard-lead Paragraph here..."><%= hardlead %></textarea>'),

    	render: function () {

		if (!this.model) {
			throw "Model is not set for this view";
		}
		
		var html = this.hardleadTextTemplate(this.model.toJSON());
		this.$el.html(html);
		return this;
	}
});

var ContentView = Backbone.View.extend({

        contentTextTemplate: _.template('<textarea class="new-article-textbox" name="articleEditor" id="articleEditor" rows="10" cols="80" placeholder="Add New Article here..."><%= content %></textarea>'),

    	render: function () {

		if (!this.model) {
			throw "Model is not set for this view";
		}
		
		var html = this.contentTextTemplate(this.model.toJSON());
		this.$el.html(html);
		return this;
	}
});

var KickerView = Backbone.View.extend({

        kickerTextTemplate: _.template('<textarea class="new-article-textbox" name="kickerEditor" id="kickerEditor" maxlength="50" placeholder="Add Kicker here..."><%= kicker %></textarea>'),

    	render: function () {

		if (!this.model) {
			throw "Model is not set for this view";
		}
		
		var html = this.kickerTextTemplate(this.model.toJSON());
		html+='<h6 class="limit textr">50</h6>';
		html+='<div class="image-upload-container">';
		html+='<h5>Kicker Image</h5>';
		html+='<div id="kickerUploader"></div>';
		html+='</div>';
		html+='<div class="new-article-content-options">';
		html+='<p class="admin-global-checkbox"><label><input type="checkbox" name="single-article-checkbox"><span class="admin-global-checkbox-label">Use Soft-lead Text</span></label></p>';
		html+='</div>';
		this.$el.html(html);
		return this;
	}
});

var NutshellView = Backbone.View.extend({

        nutshellTextTemplate: _.template('<textarea class="new-article-textbox" name="nutshellEditor" id="nutshellEditor" rows="10" cols="80" placeholder="Add Nutshell text here..."><%= nutshell %></textarea>'),

    	render: function () {

		if (!this.model) {
			throw "Model is not set for this view";
		}
		
		var html = this.nutshellTextTemplate(this.model.toJSON());
		html+='<div class="image-upload-container">';
		html+='<h5>Nutshell Image</h5>';
		html+='<div id="nutshellUploader"></div>';
		html+='</div>';
		html+='<div class="new-article-content-options">';
		html+='<p class="admin-global-checkbox"><label><input type="checkbox" name="single-article-checkbox"><span class="admin-global-checkbox-label">Use Kicker Image</span></label></p>';
		html+='</div>';
		this.$el.html(html);
		return this;
	}
});

var BillboardView = Backbone.View.extend({

        billboardTextTemplate: _.template('<textarea class="new-article-textbox" name="billboardEditor" id="billboardEditor" rows="10" cols="80" placeholder="Add Billboard text here..."><%= billboard %></textarea>'),

    	render: function () {

		if (!this.model) {
			throw "Model is not set for this view";
		}
		
		var html = this.billboardTextTemplate(this.model.toJSON());
		html+='<div class="image-upload-container">';
		html+='<h5>Billboard Image</h5>';
		html+='<div id="billboardUploader"></div>';
		html+='</div>';
		html+='<div class="new-article-content-options">';
		html+='<p class="admin-global-checkbox"><label><input type="checkbox" name="single-article-checkbox"><span class="admin-global-checkbox-label">Use Kicker Image</span></label></p>';
		html+='</div>';
		this.$el.html(html);
		return this;
	}
});


var GuestArticleView = Backbone.View.extend({

        guestArticleTextTemplate: _.template('<textarea class="new-article-textbox" name="guestArticleEditor" id="guestArticleEditor" rows="10" cols="80" placeholder="Add Guest Article content here..."><%= guest_article %></textarea>'),

    	render: function () {

		if (!this.model) {
			throw "Model is not set for this view";
		}
		
		var html = this.guestArticleTextTemplate(this.model.toJSON());
		html+='<div class="image-upload-container">';
		html+='<h5>Guest Article Image</h5>';
		html+='<div id="guestArticleUploader"></div>';
		html+='</div>';
		html+='<div class="new-article-content-options">';
		html+='<p class="admin-global-checkbox"><label><input type="checkbox" name="single-article-checkbox"><span class="admin-global-checkbox-label">Use Billboard Image</span></label></p>';
		html+='</div>';
		this.$el.html(html);
		return this;
	}
});
                                                          
