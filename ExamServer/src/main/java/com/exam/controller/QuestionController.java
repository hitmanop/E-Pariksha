package com.exam.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

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

import com.exam.entity.Questions;
import com.exam.entity.Quiz;
import com.exam.service.QuestionsService;
import com.exam.service.QuizService;


@RestController
@RequestMapping("/question")
@CrossOrigin("*")
public class QuestionController {
	
	@Autowired
	private QuestionsService questionService;
	@Autowired
	private QuizService quizService;
	
	@PostMapping("/create")
	public ResponseEntity<?> addQuestion(@RequestBody Questions question){
		return ResponseEntity.ok(questionService.addQuestion(question));
	}
   
	@PutMapping("/")
	public ResponseEntity<?> updateQuestion(@RequestBody Questions question){
		return ResponseEntity.ok(questionService.updateQuestion(question));
	}
	
	@GetMapping("/")
	public ResponseEntity<?> getQuestions(){
		return ResponseEntity.ok(questionService.getQuestions());
	}
	@GetMapping("/{questionId}")
	public ResponseEntity<?> getQuestion(@PathVariable("questionId") long questionId){
		return ResponseEntity.ok(questionService.getQuestion(questionId));
	}
	@DeleteMapping("/{questionId}")
	public void deleteQuestion(@PathVariable("questionId") long questionId){
		this.questionService.deleteQuestion(questionId);
	}
	
	
	@GetMapping("/quiz/{quizId}")
	public ResponseEntity<?> getQuestionsOfQuiz(@PathVariable("quizId") long quizId){
		Quiz quiz=this.quizService.getQuiz(quizId);
		Set<Questions> questions=quiz.getQuestions();
		ArrayList<Questions> list=new ArrayList<Questions>(questions);
		return ResponseEntity.ok(list);
	}
	
	@PostMapping("/evalquiz")
	public ResponseEntity<?> evalQuiz(@RequestBody List<Questions> questions){
		  class Evaluation {
		        int marksGot = 0;
		        int correctAnswers = 0;
		        int attempted = 0;
		    }
		  Evaluation evaluation = new Evaluation();
		
		questions.forEach(q->{
			Questions question=this.questionService.getQuestion(q.getQuesId());
			if(question.getAnswer().trim().equals(q.getGivenAnswer())) {
				  evaluation.correctAnswers++;
				  double marksSingle=Double.parseDouble(questions.get(0).getQuiz().getMaxMarks())/questions.size();
				  evaluation.marksGot+=marksSingle;
			}
				if(q.getGivenAnswer()!=null && q.getGivenAnswer()!="" ) {
					evaluation.attempted++;
				}
			
		});
		
		 int correctAnswers = evaluation.correctAnswers;
		    int attempted = evaluation.attempted;
		    int marksGot = evaluation.marksGot;
		Map<String, Object> response = new HashMap<>();
	    response.put("correctAnswers", correctAnswers);
	    response.put("attempted", attempted);
	    response.put("marksGot", marksGot);
		return ResponseEntity.ok(response);
	}
}
