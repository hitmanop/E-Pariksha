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
import com.exam.entity.Quiz;
import com.exam.service.QuizService;

@RestController
@RequestMapping("/quiz")
@CrossOrigin("*")
public class QuizController {

	@Autowired
	private QuizService quizService;
	
	
	@PostMapping("/create")
	public Quiz addQuiz(@RequestBody Quiz quiz) {
		return quizService.addQuiz(quiz);
		
	}
	@PutMapping("/")
	public Quiz updateQuiz(@RequestBody Quiz quiz){
		return quizService.updateQuiz(quiz);
	}
	
	
	@GetMapping("/")
	public ResponseEntity<?> getQuizzes(){
		return ResponseEntity.ok(quizService.getQuizzes()) ;
	}
	
	@GetMapping("/{quizId}")
	public ResponseEntity<?> getQuiz(@PathVariable("quizId") long quizId){
		return ResponseEntity.ok(quizService.getQuiz(quizId));
	}
	@DeleteMapping("/{quizId}")
	public void deleteQuiz(@PathVariable("quizId") long quizId){
		this.quizService.deleteQuiz(quizId);
}
	
	@GetMapping("/category/{cid}")
	public ResponseEntity<?> getQuizByCategory(@PathVariable("cid") long cid){
		Category category=new Category();
		category.setCid(cid);
		return ResponseEntity.ok(quizService.getQuizByCategory(category));
	}
	@GetMapping("/active")
	public ResponseEntity<?> getActiveQuiz(){
		return ResponseEntity.ok(quizService.getActiveQuiz());
	}
	@GetMapping("active/category/{cid}")
	public ResponseEntity<?> getQuizByCategoryAndActive(@PathVariable("cid") long cid){
		Category category=new Category();
		category.setCid(cid);
		return ResponseEntity.ok(quizService.getQuizByCategoryandActive(category));
	}
}