package com.tpns.admin;

import java.util.Objects;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public final class HttpStatusUtils {

	private HttpStatusUtils() {

	}

	public static <T> ResponseEntity<T> response(T t) {
		HttpStatus status = HttpStatus.OK;
		if (Objects.isNull(t)) {
			status = HttpStatus.NOT_FOUND;
		}
		return new ResponseEntity<T>(t, status);
	}

}
