package com.exam.service;

import java.util.Set;

import com.exam.entity.Category;
import com.exam.entity.Quiz;

public interface QuizService {

	public Quiz addQuiz(Quiz quiz);
	public Quiz updateQuiz(Quiz quiz);
	public Set<Quiz> getQuizzes();
	public Quiz getQuiz (long quizId);
	public void deleteQuiz(long quizId);
	public Set<Quiz> getQuizByCategory(Category category);
	public Set<Quiz> getActiveQuiz();
	public Set<Quiz> getQuizByCategoryandActive(Category category);
}
