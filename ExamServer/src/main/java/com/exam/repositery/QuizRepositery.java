package com.exam.repositery;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exam.entity.Category;
import com.exam.entity.Quiz;

public interface QuizRepositery extends JpaRepository<Quiz, Long> {

	Set<Quiz> findBycategory(Category category);
	Set<Quiz> findByActive(boolean b);
	Set<Quiz> findBycategoryAndActive(Category category,boolean b);
}
