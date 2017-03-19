var HeadlineView = Backbone.View.extend({
	
	className : "new-article-form-content-container-full-width",

    headlineTextTemplate: _.template('<textarea class="new-article-textbox" name="headlineEditor" id="headlineEditor" maxlength="100" placeholder="Add Headline here..."><%= headline %></textarea>'),

    render: function () {

		if (!this.model) {
			throw "Model is not set for this view";
		}
		var html ='';
		html+= '<div class="new-article-form-content-header">';
		html+= '    <div class="new-article-form-content-header-left">';
		html+= '        <h3><label for="new-article-headline">Headline</label></h3>';
		html+= '    </div>';
		html+= '    <div class="new-article-form-content-header-right">';
		html+= '        <div class="admin-click-menu-container">';
		html+= '            <div class="admin-click-menu-button">';
		html+= '                <p class="admin-click-menu-button-pc-open admin-click-menu-filter-pc"><a class="dropdown" title="More information can be found here">?</a></p>';
		html+= '            </div>';
		html+= '            <div class="dropdown-menu admin-click-menu-content admin-click-menu-content-right hidden">';
		html+= '                <p>The headline (also heading, head or title, or hed in journalism jargon of a story is typically a complete sentence (e.g., "Pilot Flies Below Bridges to Save Divers"), often with auxiliary verbs and articles removed (e.g., "Remains at Colorado camp linked to missing Chicago man"). However, headlines sometimes omit the subject (e.g., "Jumps From Boat, Catches in Wheel") or verb (e.g., "Cat woman lucky").</p>';		
		html+= '            </div>';
		html+= '        </div>';
		html+= '    </div>';		
		html+= '</div>';
		html+= '<div class="new-article-form-content-body">';
		html+= '    '+this.headlineTextTemplate(this.model.toJSON());
		html+= '    <h6 class="limit textr">100</h6>';
		html+= '    <div class="new-article-content-options">';
		html+= '        <p class="admin-global-checkbox"><label><input type="checkbox" name="single-article-checkbox"><span class="admin-global-checkbox-label">Show as Breaking News</span></label></p>';
		html+= '    </div>';
		html+= '</div>';		
		this.$el.html(html);
		return this;
	}
});

var SubheadView = Backbone.View.extend({
	
	className : "new-article-form-content-container-full-width",

    subheadTextTemplate: _.template('<textarea class="new-article-textbox" name="subheadEditor" id="subheadEditor" maxlength="150" placeholder="Add Subhead here..."><%= subhead %></textarea>'),

    render: function () {

		if (!this.model) {
			throw "Model is not set for this view";
		}
		
		var html = '';
		html+= '<div class="new-article-form-content-header">';
		html+= '    <div class="new-article-form-content-header-left">';
		html+= '        <h3><label for="new-article-subhead">Subhead</label></h3>';
		html+= '    </div>';
		html+= '    <div class="new-article-form-content-header-right">';
		html+= '        <div class="admin-click-menu-container">';
		html+= '            <div class="admin-click-menu-button">';
		html+= '                <p class="admin-click-menu-button-pc-open admin-click-menu-filter-pc"><a class="dropdown" title="More information can be found here">?</a></p>';
		html+= '            </div>';
		html+= '            <div class="dropdown-menu admin-click-menu-content admin-click-menu-content-right hidden">';
		html+= '                <p>A subhead (also sub-headline, subheading, subtitle or deck; subhed or dek in journalism jargon) can be either a subordinate title under the main headline, or the heading of a subsection of the article.</p>';
		html+= '                <p>It is a heading that precedes the main text, or a group of paragraphs of the main text. It helps encapsulate the entire piece, or informs the reader of the topic of part of it. Long or complex articles often have more than one subhead. Subheads are thus one type of entry point that help readers make choices, such as where to begin (or continue) reading.</p>';
		html+= '            </div>';
		html+= '        </div>';
		html+= '    </div>';
		html+= '</div>';
		html+= '<div class="new-article-form-content-body">';
		html+= '    '+this.subheadTextTemplate(this.model.toJSON());
		html+= '    <h6 class="limit textr">150</h6>';
		html+= '</div>';		
		this.$el.html(html);
		return this;
	}
});

var SoftleadView = Backbone.View.extend({
	
	className : "new-article-form-content-container-half-width new-article-form-content-container-half-left",

    softleadTextTemplate: _.template('<textarea class="new-article-textbox" name="softLeadEditor" id="softLeadEditor" rows="10" cols="80" placeholder="Add Soft-lead Sentence here..."><%= softlead %></textarea>'),
        
    render: function () {

		if (!this.model) {
			throw "Model is not set for this view";
		}
		
		var html = '';
		html+= '<div class="new-article-form-content-header">';
		html+= '    <div class="new-article-form-content-header-left">';
		html+= '        <h3>Soft-Lead</h3>';
		html+= '    </div>';
		html+= '    <div class="new-article-form-content-header-right">';
		html+= '        <div class="admin-click-menu-container">';
		html+= '            <div class="admin-click-menu-button">';
		html+= '                <p class="admin-click-menu-button-pc-open admin-click-menu-filter-pc"><a class="dropdown" title="More information can be found here">?</a></p>';
		html+= '            </div>';
		html+= '            <div class="dropdown-menu admin-click-menu-content admin-click-menu-content-right hidden">';
		html+= '                <p>The most important structural element of a story is the lead (also intro or lede in journalism jargon), including the story\'s first, or leading, sentence or two, which may or may not form its own paragraph. The Soft Lead is usually the first sentence, or in some cases the first two sentences, and is ideally 20–25 words in length.</p>';
		html+= '                <p>e.g.: Humans will be going to the moon again. The NASA announcement came as the agency requested ten billion dollars of appropriations for the project.</p>';
		html+= '            </div>';
		html+= '        </div>';
		html+= '    </div>';
		html+= '</div>';
		html+= '<div class="new-article-form-content-body">';
		html+= '    '+this.softleadTextTemplate(this.model.toJSON());
		html+= '</div>';

	    this.$el.html(html);

		return this;
	}
});

var HardleadView = Backbone.View.extend({
	
	className : "new-article-form-content-container-half-width",

    hardleadTextTemplate: _.template('<textarea class="new-article-textbox" name="hardLeadEditor" id="hardLeadEditor" rows="10" cols="80" placeholder="Add Hard-lead Paragraph here..."><%= hardlead %></textarea>'),

    render: function () {

		if (!this.model) {
			throw "Model is not set for this view";
		}
		
		var html = '';
		html+= '<div class="new-article-form-content-header">';
		html+= '    <div class="new-article-form-content-header-left">';
		html+= '        <h3>Hard-Lead</h3>';
		html+= '    </div>';
		html+= '    <div class="new-article-form-content-header-right">';
		html+= '        <div class="admin-click-menu-container">';
		html+= '            <div class="admin-click-menu-button">';
		html+= '                <p class="admin-click-menu-button-pc-open admin-click-menu-filter-pc"><a class="dropdown" title="More information can be found here">?</a></p>';
		html+= '            </div>';
		html+= '            <div class="dropdown-menu admin-click-menu-content admin-click-menu-content-right hidden">';
		html+= '                <p>The most important structural element of a story is the lead (also intro or lede in journalism jargon), including the story\'s first, or leading, sentence or two, which may or may not form its own paragraph. The Hard Lead is usually the first paragragh and is ideally 50-75 words in length.</p>';
		html+= '                <p>e.g.: NASA is proposing another space project. The agency\'s budget request, announced today, included a plan to send another mission to the moon. This time the agency hopes to establish a long-term facility as a jumping-off point for other space adventures. The budget requests approximately ten billion dollars for the project.</p>';
		html+= '            </div>';
		html+= '        </div>';
		html+= '    </div>';
		html+= '</div>';
		html+= '<div class="new-article-form-content-body">';
		html+= '    '+this.hardleadTextTemplate(this.model.toJSON());
		html+= '</div>';

		this.$el.html(html);
		return this;
	}
});

var ContentView = Backbone.View.extend({
	
	className : "new-article-form-content-container-full-width",

    contentTextTemplate: _.template('<textarea class="new-article-textbox" name="articleEditor" id="articleEditor" rows="10" cols="80" placeholder="Add New Article here..."><%= content %></textarea>'),

    render: function () {

		if (!this.model) {
			throw "Model is not set for this view";
		}
		
		var html = '';
		html+= '<div class="new-article-form-content-header">';
		html+= '    <div class="new-article-form-content-header-left">';
		html+= '        <h3><label for="new-article-subhead">Article</label></h3>';
		html+= '    </div>';
		html+= '    <div class="new-article-form-content-header-right">';
		html+= '        <div class="admin-click-menu-container">';
		html+= '            <div class="admin-click-menu-button">';
		html+= '                <p class="admin-click-menu-button-pc-open admin-click-menu-filter-pc"><a class="dropdown" title="More information can be found here">?</a></p>';
		html+= '            </div>';
		html+= '            <div class="dropdown-menu admin-click-menu-content admin-click-menu-content-right hidden">';
		html+= '                <p>Journalists usually describe the organization or structure of a news story as an inverted pyramid. The essential and most interesting elements of a story are put at the beginning, with supporting information following in order of diminishing importance.</p>';
		html+= '                <p>This structure enables readers to stop reading at any point and still come away with the essence of a story. It allows people to explore a topic to only the depth that their curiosity takes them, and without the imposition of details or nuances that they could consider irrelevant, but still making that information available to more interested readers.</p>';
		html+= '                <p>The inverted pyramid structure also enables articles to be trimmed to any arbitrary length during layout, to fit in the space available.</p>';
		html+= '            </div>';
		html+= '        </div>';
		html+= '    </div>';
		html+= '</div>';
		html+= '<div class="new-article-form-content-body">';
		html+= '    '+this.contentTextTemplate(this.model.toJSON());
		html+= '</div>';
		
		this.$el.html(html);
		return this;
	}
});

var KickerView = Backbone.View.extend({
	
	className : "new-article-form-content-container-full-width",

    kickerTextTemplate: _.template('<textarea class="new-article-textbox" name="kickerEditor" id="kickerEditor" maxlength="50" placeholder="Add Kicker here..."><%= kicker %></textarea>'),

    render: function () {

		if (!this.model) {
			throw "Model is not set for this view";
		}
		
		var html ='';
		html+= '<div class="new-article-form-content-header">';
		html+= '    <div class="new-article-form-content-header-left">';
		html+= '        <h3><label for="new-article-kicker">Kicker</label></h3>';
		html+= '    </div>';
		html+= '    <div class="new-article-form-content-header-right">';
		html+= '        <div class="admin-click-menu-container">';
		html+= '            <div class="admin-click-menu-button">';
		html+= '                <p class="admin-click-menu-button-pc-open admin-click-menu-filter-pc"><a class="dropdown" title="More information can be found here">?</a></p>';
		html+= '            </div>';
		html+= '            <div class="dropdown-menu admin-click-menu-content admin-click-menu-content-right hidden">';
		html+= '                <p>A short, catchy word or phrase which takes priority over a major headline.</p>';	
		html+= '                <p>In the mobile internet the Kicker has had a new lease of life and is used to show a custom version of the Headline usually on top of an image, where the Headline is too long to be used in these situations.</p>';		
		html+= '            </div>';
		html+= '        </div>';
		html+= '    </div>';		
		html+= '</div>';		
		html+= '<div class="new-article-form-content-body">';
		html+= '    '+this.kickerTextTemplate(this.model.toJSON());
		html+= '    <h6 class="limit textr">50</h6>';
		html+= '    <div class="image-upload-container">';
		html+= '        <h5>Kicker Image</h5>';
		html+= '        <div id="kickerUploader"></div>';
		html+= '    </div>';
		html+= '    <div class="new-article-content-options">';
		html+= '        <p class="admin-global-checkbox"><label><input type="checkbox" name="single-article-checkbox"><span class="admin-global-checkbox-label">Use Soft-lead Text</span></label></p>';
		html+= '    </div>';
		html+= '</div>';
		
		this.$el.html(html);
		return this;
	}
});

var NutshellView = Backbone.View.extend({

	className : "new-article-form-content-container-half-width new-article-form-content-container-half-left",

    nutshellTextTemplate: _.template('<textarea class="new-article-textbox" name="nutshellEditor" id="nutshellEditor" rows="10" cols="80" placeholder="Add Nutshell text here..."><%= nutshell %></textarea>'),

 	render: function () {

		if (!this.model) {
			throw "Model is not set for this view";
		}
		

		var html ='';
		html+= '<div class="new-article-form-content-header">';
		html+= '    <div class="new-article-form-content-header-left">';
		html+= '        <h3>Nutshell</h3>';
		html+= '    </div>';
		html+= '    <div class="new-article-form-content-header-right">';
		html+= '        <div class="admin-click-menu-container">';
		html+= '            <div class="admin-click-menu-button">';
		html+= '                <p class="admin-click-menu-button-pc-open admin-click-menu-filter-pc"><a class="dropdown" title="More information can be found here">?</a></p>';
		html+= '            </div>';
		html+= '            <div class="dropdown-menu admin-click-menu-content admin-click-menu-content-right hidden">';
		html+= '                <p>A nutshell paragraph (also simply nutshell, or nut \'graph, nut graf, nutgraf, etc., in journalism jargon) is a brief paragraph (occasionally there can be more than one) that summarizes the news value of the story, sometimes bullet-pointed and/or set off in a box. Nut-shell paragraphs are used particularly in feature stories.</p>';	
		html+= '            </div>';
		html+= '        </div>';
		html+= '    </div>';		
		html+= '</div>';		
		html+= '<div class="new-article-form-content-body">';
		html+= '    '+this.nutshellTextTemplate(this.model.toJSON());
		html+= '    <div class="image-upload-container">';
		html+= '        <h5>Nutshell Image</h5>';
		html+= '        <div id="nutshellUploader"></div>';
		html+= '    </div>';
		html+= '    <div class="new-article-content-options">';
		html+= '        <p class="admin-global-checkbox"><label><input type="checkbox" name="single-article-checkbox"><span class="admin-global-checkbox-label">Use Kicker Image</span></label></p>';
		html+= '    </div>';
		html+= '</div>';
		
		this.$el.html(html);
		return this;
	}
});

var BillboardView = Backbone.View.extend({
	
	className : "new-article-form-content-container-half-width",

    billboardTextTemplate: _.template('<textarea class="new-article-textbox" name="billboardEditor" id="billboardEditor" rows="10" cols="80" placeholder="Add Billboard text here..."><%= billboard %></textarea>'),

   	render: function () {

		if (!this.model) {
			throw "Model is not set for this view";
		}
		
		var html ='';
		html+= '<div class="new-article-form-content-header">';
		html+= '    <div class="new-article-form-content-header-left">';
		html+= '        <h3>Billboard</h3>';
		html+= '    </div>';
		html+= '    <div class="new-article-form-content-header-right">';
		html+= '        <div class="admin-click-menu-container">';
		html+= '            <div class="admin-click-menu-button">';
		html+= '                <p class="admin-click-menu-button-pc-open admin-click-menu-filter-pc"><a class="dropdown" title="More information can be found here">?</a></p>';
		html+= '            </div>';
		html+= '            <div class="dropdown-menu admin-click-menu-content admin-click-menu-content-right hidden">';
		html+= '                <p>An article billboard is capsule summary text, often just one sentence or fragment, which is put into a sidebar or text box (reminiscent of an outdoor billboard) on the same page to grab the reader\'s attention as they are flipping through the pages to encourage them to stop and read that article.</p>';
		html+= '            </div>';
		html+= '        </div>';
		html+= '    </div>';		
		html+= '</div>';
		html+= '<div class="new-article-form-content-body">';
		html+= '    '+ this.billboardTextTemplate(this.model.toJSON());
		html+= '    <div class="image-upload-container">';
		html+= '        <h5>Billboard Image</h5>';
		html+= '        <div id="billboardUploader"></div>';
		html+= '    </div>';
		html+= '    <div class="new-article-content-options">';
		html+= '       <p class="admin-global-checkbox"><label><input type="checkbox" name="single-article-checkbox"><span class="admin-global-checkbox-label">Use Kicker Image</span></label></p>';
		html+= '    </div>';
		html+= '</div>';
		this.$el.html(html);
		return this;
	}
});

var GuestArticleView = Backbone.View.extend({
	
	className : "new-article-form-content-container-full-width",

    guestArticleTextTemplate: _.template('<textarea class="new-article-textbox" name="guestArticleEditor" id="guestArticleEditor" rows="10" cols="80" placeholder="Add Guest Article content here..."><%= guest_article %></textarea>'),

    render: function () {

		if (!this.model) {
			throw "Model is not set for this view";
		}
		
		var html ='';
		html+= '<div class="new-article-form-content-header">';
		html+= '    <div class="new-article-form-content-header-left">';
		html+= '        <h3>Guest Article</h3>';
		html+= '    </div>';
		html+= '    <div class="new-article-form-content-header-right">';
		html+= '        <div class="admin-click-menu-container">';
		html+= '            <div class="admin-click-menu-button">';
		html+= '                <p class="admin-click-menu-button-pc-open admin-click-menu-filter-pc"><a class="dropdown" title="More information can be found here">?</a></p>';
		html+= '            </div>';
		html+= '            <div class="dropdown-menu admin-click-menu-content admin-click-menu-content-right hidden">';
		html+= '                <p>An introduction to the article which is to be used in a secondary newspaper. It is written in such a way as to entice the reader to switch from the guest article page and to read the complete article which is to be found in the primary newspaper.</p>';
		html+= '                <p>The text text found within this introduction does not normally exceed 500 characters</p>';
		html+= '            </div>';
		html+= '        </div>';
		html+= '    </div>';		
		html+= '</div>';
		html+= '<div class="new-article-form-content-body">';
		html+= '    '+this.guestArticleTextTemplate(this.model.toJSON());
		html+= '    <div class="image-upload-container">';
		html+= '        <h5>Guest Article Image</h5>';
		html+= '        <div id="guestArticleUploader"></div>';
		html+= '    </div>';
		html+= '    <div class="new-article-content-options">';
		html+= '        <p class="admin-global-checkbox"><label><input type="checkbox" name="single-article-checkbox"><span class="admin-global-checkbox-label">Use Billboard Image</span></label></p>';
		html+= '    </div>';
		html+= '</div>';

		this.$el.html(html);
		return this;
	}
});

var NewArticleInputView = Backbone.View.extend({
	
 	render: function () {

 		if (!this.model) {
 			throw "Model is not set for this view";
		} 		
 		
 		var headlineView = new HeadlineView({
 			model : this.model
 		});
 		
 		var subheadView = new SubheadView({
 			model : this.model
 		});
 		
 		var softleadView = new SoftleadView({
 			model : this.model
 		});
 		
 		var hardleadView = new HardleadView({
 			model : this.model
 		});
 		
 		var contentView = new ContentView({
 			model : this.model
 		});
 		
 		var kickerView = new KickerView({
 			model : this.model
 		});
 		
 		var nutshellView = new NutshellView({
 			model : this.model
 		});
 		
 		var billboardView = new BillboardView({
 			model : this.model
 		});
 		
 		var guestArticleView = new GuestArticleView({
 			model : this.model
 		});
 		
 		var clearFixView = new ClearFixView({
 		});
 		
 		this.$el.append(headlineView.render().el);
 		this.$el.append(subheadView.render().el);
 		this.$el.append(softleadView.render().el);
 		this.$el.append(hardleadView.render().el);
 		this.$el.append(contentView.render().el);
 		this.$el.append(kickerView.render().el);
 		this.$el.append(nutshellView.render().el);
 		this.$el.append(billboardView.render().el);
 		this.$el.append(guestArticleView.render().el);
 		this.$el.append(clearFixView.render().el);
		return this;
 	}

});              