package com.writer0713.blog.Model;

public class Post {

	private String title;
	private String author;
	private String date;
	private String content;
	private String url;

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	@Override
	public String toString() {
		return "Post{" +
				"title='" + title + '\'' +
				", author='" + author + '\'' +
				", date='" + date + '\'' +
				", content='" + content + '\'' +
				", url='" + url + '\'' +
				'}';
	}
}
