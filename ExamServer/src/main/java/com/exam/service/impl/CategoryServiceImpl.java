package com.exam.service.impl;

import java.util.LinkedHashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exam.entity.Category;
import com.exam.repositery.CategoryRepositery;
import com.exam.service.CategoryService;
@Service
public class CategoryServiceImpl implements CategoryService {
	
	
	@Autowired
	private CategoryRepositery categoryRepositery;

	@Override
	public Category addCategory(Category category) {
	
		return categoryRepositery.save(category);
	}

	@Override
	public Category updateCategory(Category category) {
		
		return categoryRepositery.save(category);
	}

	@Override
	public Set<Category> getCategories() {
		
		return  new LinkedHashSet<>(categoryRepositery.findAll());
	}

	@Override
	public Category getCategory(long categoryId) {
		
		return categoryRepositery.findById(categoryId).get();
	}

	@Override
	public void deleteCategory(long categoryId) {
		this.categoryRepositery.deleteById(categoryId);
		
	}

}
