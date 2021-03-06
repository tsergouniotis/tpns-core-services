package com.tpns.article.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import com.tpns.article.repository.CategoryRepository;
import com.tpns.domain.article.Category;

@Service
public class CategoryService {

	@Autowired
	private CategoryRepository categoryRepository;

	public List<String> getCategories() {

		final List<Category> categories = categoryRepository.findAll();

		final List<String> result = new ArrayList<>();

		if (!CollectionUtils.isEmpty(categories)) {
			categories.forEach(category -> result.add(category.getName()));
		}

		return result;
	}
}
