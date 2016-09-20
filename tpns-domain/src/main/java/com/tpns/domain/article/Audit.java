package com.tpns.domain.article;

import java.io.Serializable;
import java.util.Calendar;

public class Audit implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1786557907000395737L;

	private Long id;

	private String who;

	private Calendar when;

	private ArticleStatus what;

	private Audit() {

	}

	private Audit(String who, ArticleStatus what) {
		this.who = who;
		this.what = what;
	}

	public Long getId() {
		return id;
	}

	public String getWho() {
		return who;
	}

	public Calendar getWhen() {
		return when;
	}

	public ArticleStatus getWhat() {
		return what;
	}

	public static Audit create(String who, ArticleStatus what) {
		return new Audit(who, what);
	}

}
