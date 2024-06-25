package com.exam.repositery;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exam.entity.Category;

public interface CategoryRepositery extends JpaRepository<Category, Long>  {

}
