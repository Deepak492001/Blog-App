package com.example.repositary;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.entity.Category;

public interface CategoryRepositary extends JpaRepository<Category, Integer> {
 public List<Category> findAll();
}
