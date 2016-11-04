package com.tpns.article.errors;

import java.util.List;

import com.tpns.common.validation.errors.TpnsValidationException;

public class InvalidArticleException extends Exception {

	public InvalidArticleException(TpnsValidationException cause) {
		super("Ivalid article.", cause);
	}

	public List<String> getErrors() {
		return TpnsValidationException.class.cast(getCause()).getBusinessErrors();
	}

}
