package com.exam.service;

import java.util.Set;

import com.exam.entity.Questions;
import com.exam.entity.Quiz;

public interface QuestionsService {
	public Questions addQuestion (Questions question);
	public Questions updateQuestion (Questions question);
	public Set<Questions> getQuestions();
	public Questions getQuestion (long questionId);
	public Set<Questions> getQuestionsOfQuiz(Quiz quiz);
	public void deleteQuestion(long questionId); 
}
