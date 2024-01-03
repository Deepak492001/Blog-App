package com.example.repositary;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.entity.Comment;

public interface CommentRepositary extends JpaRepository<Comment, Integer> {
 
 public List<Comment> findByPostId(int postId);
public Comment deleteById(int commentId); 
}
