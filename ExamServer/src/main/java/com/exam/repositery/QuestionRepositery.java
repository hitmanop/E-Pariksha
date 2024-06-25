package com.exam.repositery;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exam.entity.Questions;
import com.exam.entity.Quiz;

public interface QuestionRepositery extends JpaRepository<Questions, Long>  {

	Set<Questions> findByQuiz(Quiz quiz);

}
