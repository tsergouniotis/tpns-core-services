var CategoryRowView = Backbone.View.extend({

	tagName: "li", 
	className: "categories-data-inner", 
        
        headerTemplate: _.template('<p class="textn"><%=name%><small class="sub-categories-total-container"> - has <%=subcategories.length %> sub-categories</small></p>'),
        slugTemplate: _.template('<small><%=slug%></small>'),
        subCategoriesTemplate: _.template('<ul class="sub-categories-data-inner-table hidden">'+
                        '<%$.each(subcategories, function(i) { %>' +
		        '    <li class="sub-categories-data-inner">'+            
		        '        <div class="sub-categories-data-items">'+            
		        '            <p class="admin-global-checkbox"><label><input type="checkbox" class="single-article-checkbox sub-cat" name="single-article-checkbox"><span class="admin-global-checkbox-label" checked></span></label></p>'+            
		        '        </div>'+            
		        '        <div class="sub-categories-data-items">'+            
		        '            <p><%= subcategories[i] %></p>'+            
		        '            <div class="categories-table-controllers">'+            
		        '                <div class="article-shortcut-controllers-items">'+            
		        '                    <p class="articles-content-button"><a><i class="icon tpns-ai-edit"></i>Edit</a></p>'+            
		        '                </div>'+                             	
		        '                <div class="article-shortcut-controllers-items">'+            
		        '                    <p class="articles-content-button stop-button"><a><i class="icon tpns-ai-delete"></i>Delete</a></p>'+
		        '                </div>'+            
		        '            </div>'+
		        '        </div>'+            
		        '        <div class="sub-categories-data-items">'+
		        '            <small><%= subcategories[i] %></small>'+
		        '        </div>'+
		        '        <div class="sub-categories-data-items">'+
		        '            <p><a class="sub-reorder-up" title="Move this item one row up"><i class="icon tpns-ai-sort-up"></i></a><a class="sub-reorder-down" title="Move this item one row down"><i class="icon tpns-ai-sort-down"></i></a></p>'+
		        '        </div>'+
		        '    </li>'+
                        '<% }); %>'+
                        '</ul>'),

    	render: function () {

		if (!this.model) {
			throw "Model is not set for this view";
		}
		
		var html ='';
                html += '<div class="categories-data-inner-table">';   
                html += '    <div class="categories-data-items">';  
		html += '        <p class="admin-global-checkbox"><label><input type="checkbox" class="single-article-checkbox" name="single-article-checkbox"><span class="admin-global-checkbox-label" checked ></span></label></p>';         
		html += '    </div>';    
                html += '    <div class="categories-data-items">';
		html += '        '+this.headerTemplate(this.model.toJSON());
                html += '        <div class="categories-table-controllers">';
                html += '            <div class="article-shortcut-controllers-items">';
                html += '                <p class="articles-content-button"><a><i class="icon tpns-ai-edit"></i>Edit</a></p>';
                html += '            </div>';
                html += '            <div class="article-shortcut-controllers-items">';
                html += '                <p class="articles-content-button stop-button"><a><i class="icon tpns-ai-delete"></i>Delete</a></p>';
                html += '            </div>';
                html += '        </div>';
		html += '    </div>'; 
                html += '    <div class="categories-data-items">'; 
		html += '        '+this.slugTemplate(this.model.toJSON());    
		html += '    </div>';
                html += '    <div class="categories-data-items">';     
		html += '        <p class="reorder-categories"><a class="reorder-up" title="Move this item one row up"><i class="icon tpns-ai-sort-up"></i></a><a class="reorder-down" title="Move this item one row down"><i class="icon tpns-ai-sort-down"></i></a></p>';
		html += '    </div>';
		html += '    <div class="categories-data-items show-hide-sub-categories" title="Show/Hide Sub-categories">';
		html += '        <p class="show-sub-categories"><u class="icon tpns-ai-preview-hide hidden" title="Hide the sub-categories below"></u><u class="icon tpns-ai-preview-show" title="Show the sub-categories below"></u></p>';
		html += '    </div>';
		html += '</div>';    
                html += this.subCategoriesTemplate(this.model.toJSON());
		this.$el.html(html);
		return this;
	}
});

var CategoriesInnerListView = Backbone.View.extend({
	tagName: "ul", 
	className: "categories-data-header",

	render: function(){
            
		if (!this.collection) {
		throw "Collection is not set for this view";
		}

		this.collection.each(function(category){
			var categoryRowView = new CategoryRowView({ model: category });
                	this.$el.append(categoryRowView.render().el);
		}, this);

		return this;
	}
});

var CategoriesListView = Backbone.View.extend({

	tagName: "div", 
	className: "categories-main-content-right", 

	render: function(){
            
		if (!this.collection) {
		throw "Collection is not set for this view";
		}

		var html ='';
		html += '<h2><i class="icon tpns-ai-category"></i>All Categories</h2>';
		html += '<div class="categories-data-container">';
		html += '    <ul class="categories-data-header">';
		html += '        <li class="categories-data-header-inner">';
		html += '            <div class="categories-data-header-items" title="Bulk article selection">';
		html += '                <div class="select-all-rows-container">';
		html += '                    <p class="select-all-rows-button-check"><a><u class="icon tpns-ai-unchecked"></u></a></p>';
		html += '                    <p class="select-all-rows-button-uncheck hidden"><a><u class="icon tpns-ai-checked"></u></a></p>';
		html += '                </div>';
		html += '                <div class="admin-click-menu-container admin-articles-bulk-actions-controller hidden">';
		html += '                    <div class="admin-click-menu-button admin-click-menu-new-article-triple">';
		html += '                        <p class="admin-click-menu-button-pc-open admin-click-menu-filter-pc"><a class="dropdown">&nbsp;<span class="admin-click-menu-mobile"><span></span><span class="icon tpns-ai-arrow-down"></span><span class="icon tpns-ai-close hidden"></span></span></a></p>';
		html += '                    </div>';
		html += '                    <div class="dropdown-menu admin-click-menu-content admin-click-menu-content-left hidden">';
		html += '                        <ul class="admin-click-menu-content-list">';
		html += '                            <li><a><span>Permanently Delete selected</span></a></li>';
		html += '                        </ul>';
		html += '                    </div>';
		html += '                </div>';
		html += '            </div>';
		html += '            <div class="categories-data-header-items" title="Category">';
		html += '                <p><i class="icon tpns-ai-category"></i></p>';
		html += '            </div>';
		html += '            <div class="categories-data-header-items" title="Category Slug">';
		html += '                <p><i class="icon tpns-ai-category-slug"></i></p>';
		html += '            </div>';
		html += '            <div class="categories-data-header-items" title="Change the order that the categories appear in the newspaper">';
		html += '                <p><i class="icon tpns-ai-sort"></i></p>';
		html += '            </div>';
		html += '            <div class="categories-data-header-items" title="Show/Hide Sub-categories">';
		html += '            </div>';
		html += '        </li>';
		html += '    </ul>';
		html += '</div>';
		this.$el.html(html);

		var categoriesInnerListView = new CategoriesInnerListView({ collection: this.collection });
        	this.$el.append(categoriesInnerListView.render().el);

		return this;
	}
});   

var CategoryAddView = Backbone.View.extend({

	tagName: 'div',
	className: 'categories-main-content-left',

	events:{
		"click #add-book":"addBook"
	},

	addBook:function(e){
		e.preventDefault();

		var title = this.$el.find("#title").val();
		var image = this.$el.find("#image").val();
		var bookModel = new app.Book({title:"title",image:'image'});    
	},

	render: function () {
		var html ='';
                html += '<h2><i class="icon tpns-ai-category"></i>Add New Category</h2>';   
                html += '<form id="addCategory" action="#">';
                html += '    <div class="new-article-form-content-container-full-width">';
                html += '        <div class="new-article-form-content-header">';
                html += '            <div class="new-article-form-content-header-left">';
                html += '                <h3><label for="new-article-category-name">Category Name</label></h3>';
                html += '            </div>';
                html += '            <div class="new-article-form-content-header-right">';
                html += '                <div class="admin-click-menu-container">';
                html += '                    <div class="admin-click-menu-button">';
                html += '                        <p class="admin-click-menu-button-pc-open admin-click-menu-filter-pc"><a class="dropdown" title="More information can be found here">?</a></p>';
                html += '                    </div>';
                html += '                    <div class="dropdown-menu admin-click-menu-content admin-click-menu-content-right hidden">';
                html += '                        <p>The name is how it appears on the <span class="newspaper-name">TPNS One</span> Newspaper.</p>';
                html += '                    </div>';
                html += '                </div>';
                html += '            </div>';
                html += '        </div>';
                html += '        <div class="new-article-form-content-body">';
                html += '            <input type="text" id="new-article-category-name" placeholder="Add new category or sub-category here..." />';
                html += '        </div>';
                html += '    </div>';
                html += '    <div class="new-article-form-content-container-full-width">';
                html += '        <div class="new-article-form-content-header">';
                html += '            <div class="new-article-form-content-header-left">';
                html += '                <h3><label for="new-article-category-slug">Category Slug</label></h3>';
                html += '            </div>';
                html += '            <div class="new-article-form-content-header-right">';
                html += '                <div class="admin-click-menu-container">';
                html += '                    <div class="admin-click-menu-button">';
                html += '                        <p class="admin-click-menu-button-pc-open admin-click-menu-filter-pc"><a class="dropdown" title="More information can be found here">?</a></p>';
                html += '                    </div>';
                html += '                    <div class="dropdown-menu admin-click-menu-content admin-click-menu-content-right hidden">';
                html += '                        <p>The “slug” is the URL-friendly version of the name. It is all lowercase LATIN characters and contains only letters, numbers, and hyphens.</p>';
                html += '                        <p><span class="textb">Important!</span> Do not leave any spaces between words, seperate them using a hyphen</p>';
                html += '                    </div>';
                html += '                </div>';
                html += '            </div>';
                html += '        </div>';
                html += '        <div class="new-article-form-content-body">';
                html += '            <input type="text" id="new-article-category-slug" placeholder="Add the Slug here..." />';
                html += '        </div>';
                html += '    </div>';
                html += '    <div class="new-article-form-content-container-full-width">';
                html += '        <div class="new-article-form-content-header">';
                html += '            <div class="new-article-form-content-header-left">';
                html += '                <h3>Sub-category&#39;s Parent</h3>';
                html += '            </div>';
                html += '            <div class="new-article-form-content-header-right">';
                html += '                <div class="admin-click-menu-container">';
                html += '                    <div class="admin-click-menu-button">';
                html += '               <p class="admin-click-menu-button-pc-open admin-click-menu-filter-pc"><a class="dropdown" title="More information can be found here">?</a></p>';
                html += '                    </div>';
                html += '                    <div class="dropdown-menu admin-click-menu-content admin-click-menu-content-right hidden">';
                html += '                        <p>Categories have a hierarchy. You might have a &quot;Politics&quot; category, and under that have children categories for &quot;Elections&quot; and &quot;Local Government&quot;, and as you can imagine children categories are totally optional.</p>';
                html += '                    </div>';
                html += '                </div>';
                html += '            </div>';
                html += '        </div>';
                html += '        <div class="new-article-form-content-body">';
                html += '            <div class="new-article-form-content-category-info">';
                html += '                <div class="admin-click-menu-container">';
                html += '                    <div class="admin-click-menu-button admin-click-menu-articles-table">';
                html += '                        <p class="admin-click-menu-button-pc-open admin-click-menu-filter-pc textn"><a class="dropdown"><span class="selected-admin-bi-reporter-image"></span><span class="admin-click-menu-mobile"><span class="selected-admin-bi-date-filter">No Parent</span></span><span class="icon tpns-ai-arrow-down"></span><span class="icon tpns-ai-close hidden"></span></a></p>';
                html += '                    </div>';
                html += '                    <div class="dropdown-menu admin-click-menu-content admin-click-menu-content-right hidden">';
                html += '                        <ul class="admin-click-menu-content-list">';
                html += '                            <li class="no-parent current"><a><span>No Parent</span><i class="icon tpns-ai-selected"></i></a></li>';
                html += '                            <li class="ellada"><a><span>Ελλάδα</span><i class="icon tpns-ai-selected"></i></a></li>';
                html += '                            <li class="politikh"><a><span>Πολιτική</span><i class="icon tpns-ai-selected"></i></a></li>';
                html += '                            <li class="oikonomia"><a><span>Οικονομία</span><i class="icon tpns-ai-selected"></i></a></li>';
                html += '                            <li class="ygeia"><a><span>Υγεία</span><i class="icon tpns-ai-selected"></i></a></li>';
                html += '                            <li class="kosmos"><a><span>Κόσμος</span><i class="icon tpns-ai-selected"></i></a></li>';
                html += '                            <li class="athlitika"><a><span>Αθλητικά</span><i class="icon tpns-ai-selected"></i></a></li>';
                html += '                            <li class="media"><a><span>Media</span><i class="icon tpns-ai-selected"></i></a></li>';
                html += '                            <li class="kairos"><a><span>Καιρός</span><i class="icon tpns-ai-selected"></i></a></li>';
                html += '                            <li class="kypros"><a><span>Κύπρος</span><i class="icon tpns-ai-selected"></i></a></li>';
                html += '                        </ul>';
                html += '                    </div>';
                html += '                </div>';
                html += '            </div>';
                html += '        </div>';
                html += '    </div';
                html += '    <p class="articles-content-button textr"><button type="submit">Add New Category</button></p>';
                html += '</form>';
		this.$el.html(html);
		return this;
	}
});                   

   

