package com.exam.service.impl;

import java.util.LinkedHashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exam.entity.Questions;
import com.exam.entity.Quiz;
import com.exam.repositery.QuestionRepositery;
import com.exam.service.QuestionsService;
@Service
public class QuestionServiceImpl implements QuestionsService {
	
	@Autowired
	private QuestionRepositery questionRepositery;

	@Override
	public Questions addQuestion(Questions question) {
		
		return questionRepositery.save(question);
	}

	@Override
	public Questions updateQuestion(Questions question) {
		return questionRepositery.save(question);
	}

	@Override
	public Set<Questions> getQuestions() {
		return new LinkedHashSet<>( questionRepositery.findAll());
	}

	@Override
	public Questions getQuestion(long questionId) {
		return questionRepositery.findById(questionId).get();
	}

	@Override
	public Set<Questions> getQuestionsOfQuiz(Quiz quiz) {
		return questionRepositery.findByQuiz(quiz);
		
		
	}


	@Override
	public void deleteQuestion(long questionId) {
		this.questionRepositery.deleteById(questionId);
		
	}




}
