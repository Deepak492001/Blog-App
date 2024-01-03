package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.Category;
import com.example.entity.Post;
import com.example.entity.User;
import com.example.repositary.PostRepositary;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

@Service
public class PostService {
  @Autowired
  private PostRepositary postRepositary;
  
  public List<Post> getAllPostsByUser(User user){
	  return this.postRepositary.findByPostUser(user);
  }
//  doubt
//  public List<Post> getAllPostsByCategory(Category category){
//	  return this.postRepositary.findByCategoryName(category);
//  }
  
  public List<Post> getAllPosts(){
	  return this.postRepositary.findALL();
  }
  
  public List<Post> getAllPosts(int pageNumber,int pageSize){
	  
	  Pageable pageable=PageRequest.of(pageNumber, pageSize);
	  
	   Page<Post> pagePost= this.postRepositary.findAll(pageable);

	   return pagePost.getContent();
  }
  
  public Post getPostById(int postId) {
	  return  this.postRepositary.findById(postId);
  }


  
  
}
