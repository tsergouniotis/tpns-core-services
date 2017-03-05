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

var CategoriesListView = Backbone.View.extend({

	tagName: "ul", 
	className: "categories-data", 

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
                        

