package org.hrn.entity;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Customer extends PanacheEntityBase {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    public Long id;
    public String name;
    public String address;
}
