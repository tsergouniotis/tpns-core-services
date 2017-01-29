var ArticleRowView = Backbone.View.extend({

	//TEMPLATES
        featuredTemplate: _.template(
	    '<div class="new-article-form-content-related-info articles-form-content-featured-info">'
           +'    <div class="admin-click-menu-container">'
	   +'        <div class="admin-click-menu-button admin-click-menu-articles-table">'
	   +'            <p class="admin-click-menu-button-pc-open admin-click-menu-filter-pc textn"><a class="dropdown"><span class="selected-admin-bi-reporter-image"><i class="icon tpns-ai-favourite"></i></span><span class="admin-click-menu-mobile"><span class="selected-admin-bi-date-filter"><%=featured_option %></span></span><span class="icon tpns-ai-arrow-down"></span><span class="icon tpns-ai-close hidden"></span></a></p>'
           +'        </div>'
           +'        <div class="dropdown-menu admin-click-menu-content admin-click-menu-content-left hidden">'
           +'            <ul class="admin-click-menu-content-list">'
           +'                <li class="current"><a><u class="icon tpns-ai-favourite"></u><span>--</span><i class="icon tpns-ai-selected"></i></a></li>'
           +'                <% for (i = 1; i < 10; i++) { %><li><a><u class="icon tpns-ai-favourite-active"></u><span><%=i %></span><i class="icon tpns-ai-selected"></i></a></li><% } %>'
           +'            </ul>'
	   +'        </div>'
	   +'    </div>'
           +'</div>'),

        editorsChoiceTemplate: _.template(
	    '<div class="new-article-form-content-related-info articles-form-content-featured-info">'
           +'    <div class="admin-click-menu-container">'
	   +'        <div class="admin-click-menu-button admin-click-menu-articles-table">'
	   +'            <p class="admin-click-menu-button-pc-open admin-click-menu-filter-pc textn"><a class="dropdown"><span class="selected-admin-bi-reporter-image"><i class="icon tpns-ai-editors-choice"></i></span><span class="admin-click-menu-mobile"><span class="selected-admin-bi-date-filter"><%=editors_choice_option %></span></span><span class="icon tpns-ai-arrow-down"></span><span class="icon tpns-ai-close hidden"></span></a></p>'
           +'        </div>'
           +'        <div class="dropdown-menu admin-click-menu-content admin-click-menu-content-left hidden">'
           +'            <ul class="admin-click-menu-content-list">'
           +'                <li class="current"><a><u class="icon tpns-ai-editors-choice"></u><span>--</span><i class="icon tpns-ai-selected"></i></a></li>'
           +'                <% for (i = 1; i < 10; i++) { %><li><a><u class="icon tpns-ai-editors-choice-selected"></u><span><%=i %></span><i class="icon tpns-ai-selected"></i></a></li><% } %>'
           +'            </ul>'
	   +'        </div>'
	   +'    </div>'
           +'</div>'),

	uniqueVisitorsTemplate: _.template('<p class="admin-decimals"><%= unique_visitors %></p>'),

	contentTemplate: _.template(
	   '<p><%= content %></p>'
	   +'<div class="article-shortcut-controllers">'
           +'    <div class="article-shortcut-controllers-items"><p class="articles-content-button"><a><i class="icon tpns-ai-edit"></i>Edit</a></p></div>' 
           +'    <div class="article-shortcut-controllers-items"><p class="articles-content-button"><a><i class="icon tpns-ai-preview-show"></i>View</a></p></p></div>' 
           +'    <div class="article-shortcut-controllers-items"><p class="articles-content-button yellow-button"><a><i class="icon tpns-ai-cloud-upload"></i>Publish</a></p></div>' 
           +'    <div class="admin-local-controllers-right-items admin-article-search-container"><p class="articles-content-button stop-button"><a><i class="icon tpns-ai-cloud-download"></i>Unpublish</a></p></div>'
	   +'    <div class="article-shortcut-controllers-items"><p class="articles-content-button warning-button"><a><i class="icon tpns-ai-trash"></i>Trash</a></p></div>'
	   +'</div>'),

	authorTemplate: _.template('     <p><u><img src="<%=author.image%>" alt="" /></u><span><%=author.first_name%> <%=author.last_name%></span></p>'),

	categoriesTemplate: _.template('<ul><%$.each(categories, function(i) { %><li><p><%=categories[i]%></p></li><% }); %></ul>'),

	tagsTemplate: _.template('<% if(tags && tags.length) { %><p><%=tags.length%></p><% } else { %><p>--</p><% } %>'),

	imagesTemplate: _.template('<% if(images && images.length) { %><p><%=images.length%></p><% } else { %><p>--</p><% } %>'),

	audioTemplate: _.template('<% if(audio && audio.length) { %><p><%=audio.length%></p><% } else { %><p>--</p><% } %>'),

	videoTemplate: _.template('<% if(video && video.length) { %><p><%=video.length%></p><% } else { %><p>--</p><% } %>'),

	commentsTemplate: _.template('<p><%=comments%></p>'),

	statusTemplate: _.template(
	    '<% if(status && status=="Draft") { %><p class="article-draft">Draft</p><%}%>'
	   +'<% if(status && status=="Published") { %><p class="article-published">Published</p><%}%>'),

	// RENDER
    	render: function () {

		if (!this.model) {
			throw "Model is not set for this view";
		}
		
		var html= '';
html+='                    <div class="global-table-row">';
html+='                        <div class="global-table-cell">';
html+='                            <p class="admin-global-checkbox">';
html+='                                <label>';
html+='                                    <input type="checkbox" class="single-article-checkbox" name="single-article-checkbox">';
html+='                                    <span class="admin-global-checkbox-label" checked></span>';
html+='                                </label>';
html+='                            </p>';
html+='                        </div>';
html+='                        <div class="global-table-cell">';
html+='                        '+this.featuredTemplate(this.model.toJSON());
html+='                        '+this.editorsChoiceTemplate(this.model.toJSON());
html+='                        </div>';
html+='                        <div class="global-table-cell">';
html+='                        '+this.uniqueVisitorsTemplate(this.model.toJSON());
html+='                        </div>';
html+='                        <div class="global-table-cell">';
html+='			       '+this.contentTemplate(this.model.toJSON());
html+='                        </div>';
html+='                        <div class="global-table-cell">';
html+='                        '+this.authorTemplate(this.model.toJSON());
html+='                        </div>';
html+='                        <div class="global-table-cell">';
html+='                            <ul>';
html+='                                <li><p><span class="icon tpns-nti-news-website"></span></p></li>';
html+='                                <li><p><span class="icon tpns-nti-sports-website"></span></p></li>';
html+='                                <li><p><span class="icon tpns-nti-astrology-website"></span></p></li>';
html+='                                <li><p><span class="icon tpns-nti-lifestyle-website"></span></p></li>';
html+='                            </ul>';
html+='                        </div>';
html+='                        <div class="global-table-cell">';
html+='                        '+this.categoriesTemplate(this.model.toJSON());
html+='                        </div>';
html+='                        <div class="global-table-cell">';
html+='                        '+this.tagsTemplate(this.model.toJSON());
html+='                        </div>';
html+='                        <div class="global-table-cell">';
html+='                        '+this.imagesTemplate(this.model.toJSON());
html+='                        </div>';
html+='                        <div class="global-table-cell">';
html+='                        '+this.audioTemplate(this.model.toJSON());
html+='                        </div>';
html+='                        <div class="global-table-cell">';
html+='                        '+this.videoTemplate(this.model.toJSON());
html+='                        </div>';
html+='                        <div class="global-table-cell">';
html+='                        '+this.commentsTemplate(this.model.toJSON());
html+='                        </div>';
html+='                        <div class="global-table-cell">';
html+='                        '+this.statusTemplate(this.model.toJSON());
html+='                        </div>';
html+='                    </div>';
		this.$el.html(html);
		return this;
	}
});

var ArticlesListView = Backbone.View.extend({
	render: function(){
            this.collection.each(function(article){
                var articleView = new ArticleRowView({ model: article });
                this.$el.append(articleView.render().el.childNodes);
	     }, this);
	     return this;
	}
});


var CategoriesListView = Backbone.View.extend({

        categoryTemplate: _.template('<li class="<%=slug %>"><a><span><%=name %></span><i class="icon tpns-ai-selected"></i></a></li>'),

    	render: function () {

		if (!this.collection) {
			throw "Collection is not set for this view";
		}

                var html = '';
                html+= '<div class="admin-click-menu-button">';
                html+= '    <p class="admin-click-menu-button-pc-open admin-click-menu-filter-pc"><a class="dropdown" title="Open the Category Filter"><i class="icon tpns-ai-category"></i><span class="admin-click-menu-mobile"><span class="selected-admin-bi-date-filter">All Categories</span><span class="icon tpns-ai-arrow-down"></span><span class="icon tpns-ai-close hidden"></span></span></a></p>';
                html+= '</div>';
                html+= '<div class=" dropdown-menu admin-click-menu-content admin-click-menu-content-left hidden">';
                html+= '    <ul class="admin-click-menu-content-list admin-bi-category-list">';
                html+= '        <li class="all-categories current"><a><span>All Categories</span><i class="icon tpns-ai-selected"></i></a></li>';
                this.collection.each(function(category){
                    html += '        '+this.categoryTemplate(category.toJSON());
	        }, this);
                html+='    </ul>';
                html+= '</div>';


		this.$el.html(html);
		return this;
	}
});         


var SubCategoriesListView = Backbone.View.extend({

        categoryTemplate: _.template('<div class="admin-bi-date-filter-selected-<%=slug %> hidden">'),

    	render: function () {

		if (!this.collection) {
			throw "Collection is not set for this view";
		}

                var html = '<div class="admin-bi-date-filter-selected-all-categories"></div>';
                this.collection.each(function(category){

                    html += this.categoryTemplate(category.toJSON());
                    html += '    <div class="admin-bi-date-filter-items">';
                    html += '        <div class="admin-click-sub-menu-container">';
                    html += '            <div class="admin-click-sub-menu-button">';
                    html += '                <p class="admin-click-sub-menu-button-pc-open admin-click-menu-filter-pc"><a class="dropdown" title="Open the Sub Category Filter"><i class="icon tpns-ai-sub-category"></i><span class="admin-click-menu-mobile"><span class="selected-admin-bi-date-filter">All Sub Categories</span><span class="icon tpns-ai-arrow-down"></span><span class="icon tpns-ai-close hidden"></span></span></a></p>';
                    html += '            </div>';
                    html += '            <div class="dropdown-menu admin-click-sub-menu-content admin-click-sub-menu-content-left hidden">';
                    html += '                <ul class="admin-click-menu-content-list admin-bi-sub-category-list">';
                    html += '                    <li class="current"><a><span>All Sub Categories</span><i class="icon tpns-ai-selected"></i></a></li>';
                    for (var i in category.toJSON().subcategories) {
                    	html += '                    <li><a><span>'+category.toJSON().subcategories[i]+'</span><i class="icon tpns-ai-selected"></i></a></li>';
                    }
                    html += '                </ul>';
                    html += '            </div>';
                    html += '        </div>';
                    html += '    </div>';
                    html += '</div>';
	        }, this);
		this.$el.html(html);
		return this;
	}
});      

var AuthorsListView = Backbone.View.extend({

        authorsTemplate: _.template('<li><a><u><img src="<%=image %>" alt="" /></u><span><%=first_name%> <%=last_name%></span><i class="icon tpns-ai-selected"></i></a></li>'),

    	render: function () {

		if (!this.collection) {
			throw "Collection is not set for this view";
		}

                var html = '';
                html+= '<div class="admin-click-menu-button">';
                html+= '<p class="admin-click-menu-button-pc-open admin-click-menu-filter-pc"><a class="dropdown" title="Open the Reporters Filter"><span class="selected-admin-bi-reporter-image"><i class="icon tpns-ai-staff"></i></span><span class="admin-click-menu-mobile"><span class="selected-admin-bi-date-filter">All Reporters</span><span class="icon tpns-ai-arrow-down"></span><span class="icon tpns-ai-close hidden"></span></span></a></p>';
                html+= '</div>';
                html+= '<div class=" dropdown-menu admin-click-menu-content admin-click-menu-content-left hidden">';
                html+= '    <ul class="admin-click-menu-content-list admin-bi-reporter-list">';
                html+= '        <li class="current"><a><u class="icon tpns-ai-staff"></u><span>All Reporters</span><i class="icon tpns-ai-selected"></i></a></li>';
                this.collection.each(function(author){
                    html += '        '+this.authorsTemplate(author.toJSON());
	        }, this);
                html+='    </ul>';
                html+='</div>';
		this.$el.html(html);
		return this;
	}
});     
     
