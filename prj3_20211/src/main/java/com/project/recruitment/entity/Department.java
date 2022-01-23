package com.project.recruitment.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "departments")
//public class Department extends BaseEntity {
public class Department {
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Id
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "name")
    private String name;
}
