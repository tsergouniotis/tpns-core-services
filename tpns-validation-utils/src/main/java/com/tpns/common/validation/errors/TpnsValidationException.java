package com.tpns.common.validation.errors;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;

public class TpnsValidationException extends Exception {

	private static final long serialVersionUID = -3242183323713868970L;

	private List<String> errors = new ArrayList<>();

	private TpnsValidationException(List<String> errors, String message) {
		super(message);
		this.errors.addAll(errors);
	}

	private TpnsValidationException(List<String> errors, String message, Throwable throwable) {
		super(message, throwable);
		this.errors.addAll(errors);
	}

	public List<String> getBusinessErrors() {
		return Collections.unmodifiableList(errors);
	}

	private static String getSingleMessageFromErrorList(List<String> errors) {
		StringBuilder sb = new StringBuilder();
		Iterator<String> it = errors.iterator();
		while (it.hasNext()) {
			sb.append(it.next());
			if (it.hasNext()) {
				sb.append("\n");
			}
		}
		return sb.toString();
	}

	public static TpnsValidationException create(String message) {
		List<String> errors = new ArrayList<>();
		errors.add(message);
		return new TpnsValidationException(errors, getSingleMessageFromErrorList(errors));
	}

	public static TpnsValidationException create(List<String> errors) {
		return new TpnsValidationException(errors, getSingleMessageFromErrorList(errors));
	}

	public static TpnsValidationException create(List<String> errors, Throwable throwable) {
		return new TpnsValidationException(errors, getSingleMessageFromErrorList(errors), throwable);
	}

}
