package com.writer0713.blog.Service;

import com.writer0713.blog.Model.Post;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class CrawlService {

	private static final String URL_FOR_POSTS = "https://blog.naver.com/PostList.nhn?from=postList&blogId=writer0713&categoryNo=0&currentPage=";
	private static final String URL_FOR_ONE_POST = "https://blog.naver.com/PostView.nhn?blogId=writer0713&logNo=";

	public List<Post> getPostsBy(int pageNo) {

		String pageNoStr = String.valueOf(pageNo);
		String requestURL = URL_FOR_POSTS.concat(pageNoStr);

		Document doc = this.getDocument(requestURL);
		Elements postElements = this.getPosts(doc);

		List<Post> posts = postElements.stream().map(element -> {
			String title = element.select("div.se-title-text span.se-fs-").text();
			String date = element.select("span.se_publishDate").text();
			String content = element.select("div.se-main-container").text()
					.substring(0, 200).concat("...");
			String url = element.select("a.url").attr("title");
			String postNo = Stream.of(url.split("/")).reduce((first, last) -> last).get(); // get last element after split

			Post post = new Post(title, date, content, postNo);

			return post;
		}).collect(Collectors.toList());

		return posts;
	}

	public Post getPostBy(String no) {

		String requestURL = URL_FOR_ONE_POST.concat(no);

		Document doc = getDocument(requestURL);
		Element postElement = doc.select("div#post_1").first();

		String title = postElement.select("div.se-title-text").text();
		String date = postElement.select("span.se_publishDate").text();
		String content = postElement.select("div.se-main-container").html();

		Post post = new Post(title, date, content);

		return post;
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
