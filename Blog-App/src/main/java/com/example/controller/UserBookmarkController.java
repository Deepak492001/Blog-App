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

import com.example.entity.Post;
import com.example.entity.UserBookmarks;

import com.example.repositary.UserBookmarkRepositary;
import com.example.service.UserBookmarkService;

@RestController
@CrossOrigin("*")
public class UserBookmarkController {
	@Autowired
	private UserBookmarkRepositary userBookmarkRepositary;
	@Autowired
	private UserBookmarkService userBookmarkService;

	@PostMapping("/add-bookmark")
	public UserBookmarks addUserBookmark(@RequestBody UserBookmarks userBookmarks) {
		return this.userBookmarkRepositary.save(userBookmarks);
	}

	@DeleteMapping("/delete-bookmark/{postId}/{userEmail}")
	public String deleteUserBookmark(@PathVariable("postId") int postId, @PathVariable("userEmail") String userEmail) {
		System.out.println(postId + "" + userEmail);
		return this.userBookmarkService.deleteBookmark(postId, userEmail);
	}

	@GetMapping("/get-all-bookmarks/{userEmail}")
	public List<Post> getAllUserBookmarks(@PathVariable("userEmail") String userEmail) {

		return this.userBookmarkService.getUserBookmarks(userEmail);

	}

	@GetMapping("/get-bookmark-postId/{userEmail}")
	public List<Integer> getAllUserBookmarksPostIds(@PathVariable("userEmail") String userEmail) {

		List<Integer> allposts = this.userBookmarkService.getBookmarkPostIds(userEmail);
		System.out.println(userEmail);
		return allposts;
	}
}