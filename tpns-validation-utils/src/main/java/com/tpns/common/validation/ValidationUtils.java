package com.tpns.common.validation;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.validation.ConstraintViolation;
import javax.validation.Path;
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
		// return foo(violations);
	}

	private static <T> Map<String, String> foo(Set<ConstraintViolation<T>> violations) {

		Map<String, String> errors = new HashMap<>();

		Iterator<ConstraintViolation<T>> iterator = violations.iterator();

		while (iterator.hasNext()) {
			ConstraintViolation<T> cv = iterator.next();

			String rootBeanName = cv.getRootBeanClass().getName();

			Path propertyPath = cv.getPropertyPath();

			String message = cv.getMessage();

			String key = rootBeanName + "." + propertyPath;

			errors.put(key, message);

		}

		return errors;
	}

	public static <T> TpnsValidationException newBusinessException(final Set<ConstraintViolation<T>> constraintViolations) {
		final List<String> errors = new ArrayList<>();
		for (final ConstraintViolation<?> constraintViolation : constraintViolations) {
			errors.add(constraintViolation.getMessage());
		}
		return TpnsValidationException.create(errors);
	}

}
