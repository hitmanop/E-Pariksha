package com.exam.service;

import java.util.Set;

import com.exam.entity.Category;

public interface CategoryService {
	public Category addCategory(Category category);
	public Category updateCategory (Category category);
	public Set<Category> getCategories();
	public Category getCategory(long categoryId);
	public void deleteCategory (long categoryId);
}
