package com.exam.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.exam.entity.Category;
import com.exam.service.CategoryService;

@RestController
@RequestMapping("/category")
@CrossOrigin("*")
public class CategoryController {
    @Autowired
	private CategoryService categoryService;

	@PostMapping("/create")
	public ResponseEntity<?> addCategory(@RequestBody Category category) {
		Category cat = categoryService.addCategory(category);
		return ResponseEntity.ok(cat);
	}

	@GetMapping("/{categoryId}")
	public Category getCategory(@PathVariable("categoryId") long categoryId) {
		return this.categoryService.getCategory(categoryId);

	}
	
	@GetMapping("/")
	public ResponseEntity<?> getCategories(){
		return ResponseEntity.ok(categoryService.getCategories());
	}
  
	@PutMapping("/")
	public ResponseEntity<?> updateCategory(@RequestBody Category category){
		Category cat=categoryService.updateCategory(category);
		return ResponseEntity.ok(cat);
	}
	
	@DeleteMapping("/{categoryId}")
	public void deleteCategory(@PathVariable("categoryId") long categoryId ) {
		categoryService.deleteCategory(categoryId);
	}
}
