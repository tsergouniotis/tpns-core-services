package com.tpns.admin.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tpns.admin.domain.Property;

public interface PropertyRepository extends JpaRepository<Property, Long> {

	Property findByPropertyId(String propertyId);

}
