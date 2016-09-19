package com.tpns.admin.validation.validators;

import java.util.Objects;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.tpns.admin.domain.Property;
import com.tpns.admin.repository.PropertyRepository;
import com.tpns.admin.validation.constraints.ValidProperty;

@Component
public class ValidPropertyValidator implements ConstraintValidator<ValidProperty, Property> {

	@Autowired
	private PropertyRepository propertyRepository;

	@Override
	public void initialize(ValidProperty constraintAnnotation) {
		// TODO Auto-generated method stub

	}

	@Override
	public boolean isValid(Property value, ConstraintValidatorContext context) {

		if (Objects.isNull(value)) {
			return true;
		}

		String propertyId = value.getPropertyId();
		Property resolved = propertyRepository.findByPropertyId(propertyId);
		if (Objects.isNull(resolved)) {
			context.disableDefaultConstraintViolation();
			context.buildConstraintViolationWithTemplate("Property does not exist");
			return false;
		}

		return true;
	}

}
