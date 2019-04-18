package com.writer0713.blog.Model;

import lombok.Data;

import java.util.List;

@Data
public class Post {

	private String title;
	private String author = "writer0713";
	private String date;
	private String content;
	private String url;
	private String description;
	private List<String> tags;

	public Post(String title, String date, String content) {
		this.title = title;
		this.date = date;
		this.content = content;
	}

	public Post(String title, String date, String content, String postNo) {
		this.title = title;
		this.date = date;
		this.content = content;
		this.url = "/post/".concat(postNo);
	}
}
