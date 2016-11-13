var HeadlineView = Backbone.View.extend({

        headlineTextTemplate: _.template('<textarea class="new-article-textbox" id="new-article-headline" maxlength="100" placeholder="Add Headline here..."><%= headline %></textarea>'),

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

        subheadTextTemplate: _.template('<textarea class="new-article-textbox" id="new-article-subhead" maxlength="150" placeholder="Add Subhead here..."><%= subhead %></textarea>'),

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
