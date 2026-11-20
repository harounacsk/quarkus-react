package org.hrn.entity;


import jakarta.persistence.*;

@Entity
public class CustomerOrder {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;
    @ManyToOne
    public Customer customer;
    @ManyToOne
    public Service service;
    public float price;
}
