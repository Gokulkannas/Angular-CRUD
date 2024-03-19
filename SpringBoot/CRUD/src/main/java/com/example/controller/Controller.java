package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.Model;
import com.example.respository.Crudrespository;

@RestController
@CrossOrigin
public class Controller {
	
	@Autowired
	private Crudrespository crudrespository;
	
	@GetMapping("/users")
	public List<Model> getAllList(){
		return crudrespository.findAll();
	}
	
	@PostMapping("/users")
	public Model createCrud(@RequestBody Model model) {
		crudrespository.save(model);
		return model;
	}
	
	@GetMapping("/users/{id}")
	public ResponseEntity<Model> getById(@PathVariable Long id){
		Model getcrud = crudrespository.findById(id).orElseThrow(null);
		return ResponseEntity.ok(getcrud);
	}
	
	@PutMapping("/users/{id}")
	public Model updateCrud(@RequestBody Model model) {
		return crudrespository.save(model);
	}
	
	@DeleteMapping("/users/{id}")
	public void deleteCrud(@PathVariable Long id) {
		crudrespository.deleteById(id);
	} 

}
