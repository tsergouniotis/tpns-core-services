package com.tpns.common.validation;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;

import javax.validation.ConstraintViolation;
import javax.validation.Path;
import javax.validation.Validator;

public final class ValidationUtils {

	private ValidationUtils() {

	}

	public static <T> Map<String, String> invokeValidator(T article, Validator validator) {
		Set<ConstraintViolation<T>> violations = validator.validate(article);
		return foo(violations);
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

}
