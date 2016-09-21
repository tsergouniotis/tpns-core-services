package com.tpns.admin.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.tpns.admin.domain.Property;

public interface PropertyRepository extends JpaRepository<Property, Long> {

	Property findByPropertyId(String propertyId);

	@Query(name = "Property.findByPropertyIds")
	List<Property> findByPropertyIds(@Param("propertyIds") List<String> propertyIds);

}
