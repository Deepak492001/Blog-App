package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.Comment;
import com.example.repositary.CommentRepositary;

@RestController
@CrossOrigin("*")
public class CommentController {
	@Autowired
	private CommentRepositary commentRepositary;
	
	@GetMapping("/all-comments/{postId}")
    public List<Comment> getAllComments(@PathVariable("postId") int postId){
    	return this.commentRepositary.findByPostId(postId);
    }
	
	@PostMapping("/add-comment")
	public Comment addComment(@RequestBody Comment comment) {
		System.out.println(comment);
		return this.commentRepositary.save(comment);
	}
	
	@DeleteMapping("/delete-comment/{commentId}")
	public void deleteComment(@PathVariable("commentId")int commentId) {
		 this.commentRepositary.deleteById(commentId);
	}
    
}
