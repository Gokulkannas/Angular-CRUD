package com.example.respository;

import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;

import com.example.model.Model;

public interface Crudrespository extends JpaRepositoryImplementation<Model,Long> {

}
