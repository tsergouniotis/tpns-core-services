var CategoryRowView = Backbone.View.extend({

        headlineTextTemplate: _.template('<textarea class="new-article-textbox" name="headlineEditor" id="headlineEditor" maxlength="100" placeholder="Add Headline here..."><%= headline %></textarea>'),

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
		html += '        <p class="textn">Ελλάδα<small class="sub-categories-total-container"> - has <span class="sub-categories-total-number"></span> sub-categories</small></p>';
                html += '        <div class="categories-table-controllers">
                html += '            <div class="article-shortcut-controllers-items">
                html += '                <p class="articles-content-button"><a><i class="icon tpns-ai-edit"></i>Edit</a></p>
                html += '            </div>
                html += '            <div class="article-shortcut-controllers-items">
                html += '                <p class="articles-content-button stop-button"><a><i class="icon tpns-ai-delete"></i>Delete</a></p>
                html += '            </div>
                html += '        </div>
		html += '    </div>'; 
                html += '    <div class="categories-data-items">'; 
		html += '        <small>ellada</small>';    
		html += '    </div>';
                html += '    <div class="categories-data-items">';     
		html += '        <p class="reorder-categories"><a class="reorder-up" title="Move this item one row up"><i class="icon tpns-ai-sort-up"></i></a><a class="reorder-down" title="Move this item one row down"><i class="icon tpns-ai-sort-down"></i></a></p>';
		html += '    </div>';
		html += '    <div class="categories-data-items show-hide-sub-categories" title="Show/Hide Sub-categories">';
		html += '        <p class="show-sub-categories"><u class="icon tpns-ai-preview-hide hidden" title="Hide the sub-categories below"></u><u class="icon tpns-ai-preview-show" title="Show the sub-categories below"></u></p>';
		html += '    </div>';
		html += '</div>';    
		html += '<ul class="sub-categories-data-inner-table hidden">';            
		html += '    <li class="sub-categories-data-inner">';            
		html += '        <div class="sub-categories-data-items">';            
		html += '            <p class="admin-global-checkbox"><label><input type="checkbox" class="single-article-checkbox sub-cat" name="single-article-checkbox"><span class="admin-global-checkbox-label" checked ></span></label></p>';            
		html += '        </div>';            
		html += '        <div class="sub-categories-data-items">';            
		html += '            <p>Ειδήσεις</p>';            
		html += '            <div class="categories-table-controllers">';            
		html += '                <div class="article-shortcut-controllers-items">';            
		html += '                    <p class="articles-content-button"><a><i class="icon tpns-ai-edit"></i>Edit</a></p>';            
		html += '                </div>';                             	
		html += '                <div class="article-shortcut-controllers-items">';            
		html += '                    <p class="articles-content-button stop-button"><a><i class="icon tpns-ai-delete"></i>Delete</a></p>';
		html += '                </div>';            
		html += '            </div>';
		html += '        </div>';            
		html += '        <div class="sub-categories-data-items">';
		html += '            <small>eidhseis</small>';
		html += '        </div>';
		html += '        <div class="sub-categories-data-items">';
		html += '            <p><a class="sub-reorder-up" title="Move this item one row up"><i class="icon tpns-ai-sort-up"></i></a><a class="sub-reorder-down" title="Move this item one row down"><i class="icon tpns-ai-sort-down"></i></a></p>';
		html += '        </div>';
		html += '    </li>';
		html += '</ul>';
		this.$el.html(html);
		return this;
	}
});

var CategoriesListView = Backbone.View.extend({

	render: function(){

            var html = '';
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
	    html += '    <ul class="categories-data">';
	    this.collection.each(function(category){
		html += '        <li class="categories-data-inner">';
                html += '            '+this.categoryTemplate(category.toJSON());
		html += '        </li>';
	    }, this);
	    html += '    </ul>';
	    html += '</div>';
	    this.$el.html(html);

	    return this;
	}
});                   
                        

