package com.writer0713.blog.Service;

import com.writer0713.blog.Model.Post;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CrawlService {

	private static final String BLOG_URL = "https://blog.naver.com/PostList.nhn?from=postList&blogId=writer0713&categoryNo=0&currentPage=";

	public List<Post> getPostsBy(int pageNo) {

		String pageNoStr = String.valueOf(pageNo);
		String requestURL = BLOG_URL.concat(pageNoStr);

		Document doc = this.getDocument(requestURL);
		Elements postElements = this.getPosts(doc);

		List<Post> posts = postElements.stream().map(element -> {
			String title = element.select("div.se-title-text span.se-fs-").text();
			String date = element.select("span.se_publishDate").text();
			String content = element.select("div.se-main-container").text()
					.substring(0, 200).concat("...");
			String author = "writer0713";

			Post post = new Post();
			post.setTitle(title);
			post.setDate(date);
			post.setContent(content);
			post.setAuthor(author);

			return post;
		}).collect(Collectors.toList());

		return posts;
	}

	private Document getDocument(String requestURL) {
		try {
			return Jsoup.connect(requestURL).get();
		} catch (IOException e) {
			e.printStackTrace();
		}

		return null;
	}

	private Elements getPosts(Document doc) {
		return doc.select("div#postListBody > div:has(div.post-back)");
	}
}
