package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.Category;
import com.example.repositary.CategoryRepositary;

@RestController
//@CrossOrigin("http://localhost:5173")
@CrossOrigin("*")
public class CategoryController {
	@Autowired
	private CategoryRepositary categoryRepositary;
	@GetMapping("/all-categories")
	public List<Category> getAllCatogories(){

		return this.categoryRepositary.findAll();
	}
}
