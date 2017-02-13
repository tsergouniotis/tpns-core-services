package com.tpns.common.validation;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import javax.validation.ConstraintViolation;
import javax.validation.Validator;

import com.tpns.common.validation.errors.TpnsValidationException;

public final class ValidationUtils {

	private ValidationUtils() {

	}

	public static <T> void invokeValidator(T article, Validator validator) throws TpnsValidationException {
		Set<ConstraintViolation<T>> violations = validator.validate(article);
		if (null != violations && violations.size() > 0) {
			throw newBusinessException(violations);
		}
	}

	public static <T> TpnsValidationException newBusinessException(final Set<ConstraintViolation<T>> constraintViolations) {
		final List<String> errors = new ArrayList<>();
		for (final ConstraintViolation<?> constraintViolation : constraintViolations) {
			errors.add(constraintViolation.getMessage());
		}
		return TpnsValidationException.create(errors);
	}

}
