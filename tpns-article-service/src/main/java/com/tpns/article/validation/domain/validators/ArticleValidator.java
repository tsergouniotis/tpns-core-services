package com.tpns.article.validation.domain.validators;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.util.CollectionUtils;

import com.tpns.article.repository.CategoryRepository;
import com.tpns.article.validation.domain.constraints.ValidArticle;
import com.tpns.domain.article.Article;
import com.tpns.domain.article.Category;
import com.tpns.domain.article.MediaResource;

@Component
public class ArticleValidator implements ConstraintValidator<ValidArticle, Article> {

	@Autowired
	private CategoryRepository categoryDAO;

	@Override
	public void initialize(final ValidArticle constraintAnnotation) {
	}

	@Override
	public boolean isValid(final Article article, final ConstraintValidatorContext context) {
		if (null == article) {
			return true;
		}

		Set<Category> categories = article.getCategories();
		if (!CollectionUtils.isEmpty(categories)) {
			Set<Category> newCategories = new HashSet<>();
			for (Category category : categories) {
				if (Category.hasValue(category)) {
					final Category c = categoryDAO.findByName(category.getName());
					if (null != c) {
						newCategories.add(c);
					} else {
						context.disableDefaultConstraintViolation();
						context.buildConstraintViolationWithTemplate(context.getDefaultConstraintMessageTemplate()).addPropertyNode("categories").addConstraintViolation();
						return false;
					}
				}
			}

			article.setCategories(newCategories);

		} else {
			context.disableDefaultConstraintViolation();
			context.buildConstraintViolationWithTemplate("At least one category must be specified").addConstraintViolation();
			return false;
		}

		List<MediaResource> newResources = new ArrayList<>();
		List<MediaResource> resources = article.getResources();
		if (!CollectionUtils.isEmpty(resources)) {
			for (MediaResource resource : resources) {
				MediaResource newResource = new MediaResource(resource.getType(), resource.getUrl());
				newResources.add(newResource);
			}
		}
		article.setResources(newResources);

		return true;
	}

}
