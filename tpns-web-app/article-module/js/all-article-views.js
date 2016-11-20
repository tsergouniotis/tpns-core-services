var ArticleRowView = Backbone.View.extend({

        contentTemplate: _.template('<p><%= content %></p>'),

    	render: function () {

		if (!this.model) {
			throw "Model is not set for this view";
		}
		
		var html= '';
html+='                    <div class="global-table-row">';
html+='                        <div class="global-table-cell">';
html+='                            <p class="admin-global-checkbox"><label><input type="checkbox" class="single-article-checkbox" name="single-article-checkbox"><span class="admin-global-checkbox-label" checked ></span></label></p>';
html+='                        </div>';
html+='                        <div class="global-table-cell">';
html+='                        	<div class="new-article-form-content-related-info articles-form-content-featured-info">';
html+='                                <div class="admin-click-menu-container">';
html+='                                    <div class="admin-click-menu-button admin-click-menu-articles-table">';
html+='                                        <p class="admin-click-menu-button-pc-open admin-click-menu-filter-pc textn"><a class="dropdown"><span class="selected-admin-bi-reporter-image"><i class="icon tpns-ai-favourite"></i></span><span class="admin-click-menu-mobile"><span class="selected-admin-bi-date-filter">--</span></span><span class="icon tpns-ai-arrow-down"></span><span class="icon tpns-ai-close hidden"></span></a></p>';
html+='                                    </div>';
html+='                                    <div class="dropdown-menu admin-click-menu-content admin-click-menu-content-left hidden">';
html+='                                        <ul class="admin-click-menu-content-list">';
html+='                                            <li class="current"><a><u class="icon tpns-ai-favourite"></u><span>--</span><i class="icon tpns-ai-selected"></i></a></li>';
html+='                                            <li><a><u class="icon tpns-ai-favourite-active"></u><span>1</span><i class="icon tpns-ai-selected"></i></a></li>';
html+='                                            <li><a><u class="icon tpns-ai-favourite-active"></u><span>2</span><i class="icon tpns-ai-selected"></i></a></li>';
html+='                                            <li><a><u class="icon tpns-ai-favourite-active"></u><span>3</span><i class="icon tpns-ai-selected"></i></a></li>';
html+='                                            <li><a><u class="icon tpns-ai-favourite-active"></u><span>4</span><i class="icon tpns-ai-selected"></i></a></li>';
html+='                                            <li><a><u class="icon tpns-ai-favourite-active"></u><span>5</span><i class="icon tpns-ai-selected"></i></a></li>';
html+='                                            <li><a><u class="icon tpns-ai-favourite-active"></u><span>6</span><i class="icon tpns-ai-selected"></i></a></li>';
html+='                                            <li><a><u class="icon tpns-ai-favourite-active"></u><span>7</span><i class="icon tpns-ai-selected"></i></a></li>';
html+='                                            <li><a><u class="icon tpns-ai-favourite-active"></u><span>8</span><i class="icon tpns-ai-selected"></i></a></li>';
html+='                                            <li><a><u class="icon tpns-ai-favourite-active"></u><span>9</span><i class="icon tpns-ai-selected"></i></a></li>';
html+='                                            <li><a><u class="icon tpns-ai-favourite-active"></u><span>10</span><i class="icon tpns-ai-selected"></i></a></li>';
html+='                                        </ul>';
html+='                                    </div>';
html+='                                </div>';
html+='                            </div>';
html+='                            <div class="new-article-form-content-related-info articles-form-content-featured-info">';
html+='                                <div class="admin-click-menu-container">';
html+='                                    <div class="admin-click-menu-button admin-click-menu-articles-table">';
html+='                                        <p class="admin-click-menu-button-pc-open admin-click-menu-filter-pc textn"><a class="dropdown"><span class="selected-admin-bi-reporter-image"><i class="icon tpns-ai-editors-choice"></i></span><span class="admin-click-menu-mobile"><span class="selected-admin-bi-date-filter">--</span></span><span class="icon tpns-ai-arrow-down"></span><span class="icon tpns-ai-close hidden"></span></a></p>';
html+='                                    </div>';
html+='                                    <div class="dropdown-menu admin-click-menu-content admin-click-menu-content-left hidden">';
html+='                                        <ul class="admin-click-menu-content-list">';
html+='                                            <li class="current"><a><u class="icon tpns-ai-editors-choice"></u><span>--</span><i class="icon tpns-ai-selected"></i></a></li>';
html+='                                            <li><a><u class="icon tpns-ai-editors-choice-selected"></u><span>1</span><i class="icon tpns-ai-selected"></i></a></li>';
html+='                                            <li><a><u class="icon tpns-ai-editors-choice-selected"></u><span>2</span><i class="icon tpns-ai-selected"></i></a></li>';
html+='                                            <li><a><u class="icon tpns-ai-editors-choice-selected"></u><span>3</span><i class="icon tpns-ai-selected"></i></a></li>';
html+='                                            <li><a><u class="icon tpns-ai-editors-choice-selected"></u><span>4</span><i class="icon tpns-ai-selected"></i></a></li>';
html+='                                            <li><a><u class="icon tpns-ai-editors-choice-selected"></u><span>5</span><i class="icon tpns-ai-selected"></i></a></li>';
html+='                                            <li><a><u class="icon tpns-ai-editors-choice-selected"></u><span>6</span><i class="icon tpns-ai-selected"></i></a></li>';
html+='                                            <li><a><u class="icon tpns-ai-editors-choice-selected"></u><span>7</span><i class="icon tpns-ai-selected"></i></a></li>';
html+='                                            <li><a><u class="icon tpns-ai-editors-choice-selected"></u><span>8</span><i class="icon tpns-ai-selected"></i></a></li>';
html+='                                            <li><a><u class="icon tpns-ai-editors-choice-selected"></u><span>9</span><i class="icon tpns-ai-selected"></i></a></li>';
html+='                                            <li><a><u class="icon tpns-ai-editors-choice-selected"></u><span>10</span><i class="icon tpns-ai-selected"></i></a></li>';
html+='                                        </ul>';
html+='                                    </div>';
html+='                                </div>';
html+='                            </div>';
html+='                        </div>';
html+='                        <div class="global-table-cell">';
html+='                        	<p class="admin-decimals">36789</p>';
html+='                        </div>';
html+='                        <div class="global-table-cell">';
html+=this.contentTemplate(this.model.toJSON());
html+='                            <div class="article-shortcut-controllers">';
html+='                                <div class="article-shortcut-controllers-items">';
html+='                                    <p class="articles-content-button"><a><i class="icon tpns-ai-edit"></i>Edit</a></p>';
html+='                                </div>';
html+='                                <div class="article-shortcut-controllers-items">';
html+='                                    <p class="articles-content-button"><a><i class="icon tpns-ai-preview-show"></i>View</a></p>';
html+='                                </div>';
html+='                                <div class="article-shortcut-controllers-items">';
html+='                                    <p class="articles-content-button yellow-button"><a><i class="icon tpns-ai-cloud-upload"></i>Publish</a></p>';
html+='                                </div>';
html+='                                <div class="admin-local-controllers-right-items admin-article-search-container">';
html+='                                    <p class="articles-content-button stop-button"><a><i class="icon tpns-ai-cloud-download"></i>Unpublish</a></p>';
html+='                                </div>';
html+='                                <div class="article-shortcut-controllers-items">';
html+='                                    <p class="articles-content-button warning-button"><a><i class="icon tpns-ai-trash"></i>Trash</a></p>';
html+='                                </div>';
html+='                            </div>';
html+='                        </div>';
html+='                        <div class="global-table-cell">';
html+='                        	<p><u><img src="../staff-module/staff-images-50x50/staff1-50x50.jpg" alt="" /></u><span>Αθανάσιος Σεργουνιώτης</span></p>';
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
html+='                            <ul>';
html+='                                <li><p>Πολιτική</p></li>';
html+='                                <li><p>Ελλάδα</p></li>';
html+='                                <li><p>Αποκαλύψεις</p></li>';
html+='                                <li><p>Αποκαλύψεις</p></li>';
html+='                            </ul>';
html+='                        </div>';
html+='                        <div class="global-table-cell">';
html+='                        	<p>7</p>';
html+='                        </div>';
html+='                        <div class="global-table-cell">';
html+='                        	<p>4</p>';
html+='                        </div>';
html+='                        <div class="global-table-cell">';
html+='                        	<p>--</p>';
html+='                        </div>';
html+='                        <div class="global-table-cell">';
html+='                        	<p>1</p>';
html+='                        </div>';
html+='                        <div class="global-table-cell">';
html+='                        	<p>534</p>';
html+='                        </div>';
html+='                        <div class="global-table-cell">';
html+='                        	<p class="article-draft">Draft</p>';
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

