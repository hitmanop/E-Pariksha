package com.exam.service.impl;

import java.util.LinkedHashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exam.entity.Category;
import com.exam.entity.Quiz;
import com.exam.repositery.QuizRepositery;
import com.exam.service.QuizService;

@Service
public class QuizServiceImpl implements QuizService {
	
	
	@Autowired
	private QuizRepositery quizRepositery;

	@Override
	public Quiz addQuiz(Quiz quiz) {
		return quizRepositery.save(quiz);
	}

	@Override
	public Quiz updateQuiz(Quiz quiz) {
		return quizRepositery.save(quiz);
	}

	@Override
	public Set<Quiz> getQuizzes() {
		return new LinkedHashSet<>(quizRepositery.findAll());
	}

	@Override
	public Quiz getQuiz(long quizId) {
		return quizRepositery.findById(quizId).get();
	}

	@Override
	public void deleteQuiz(long quizId) {
		 this.quizRepositery.deleteById(quizId);
		
	}

	@Override
	public Set<Quiz> getQuizByCategory(Category category) {
		return quizRepositery.findBycategory(category);
	}

	@Override
	public Set<Quiz> getActiveQuiz() {
		return quizRepositery.findByActive(true);
		
	}

	@Override
	public Set<Quiz> getQuizByCategoryandActive(Category category) {
	
		return quizRepositery.findBycategoryAndActive(category, true);
	}

}
