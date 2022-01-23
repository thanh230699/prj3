package com.project.recruitment.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "criteriasets")
public class CriteriaSet extends BaseEntity{
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getWeight() {
        return weight;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }

    @Column(name = "name")
    private String name;

    @Column(name = "weight")
    private int weight;

    @ManyToOne
    @JoinColumn(name = "department_id")
    private Department department;
}
