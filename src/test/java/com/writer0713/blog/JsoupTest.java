package com.writer0713.blog;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.junit.Test;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class JsoupTest {

	@Test
	public void connect() throws IOException {
		Document document = Jsoup.connect("https://blog.naver.com/PostList.nhn?from=postList&blogId=writer0713&categoryNo=0&currentPage=2").get();
		Elements posts = document.select("div#postListBody > div:has(div.post-back)");

		posts.stream().forEach(element -> {

			// get title
//			String title = element.select("div.se-title-text span.se-fs-").text();
//			System.out.println("title : " + title);
//
//			// date
//			String date = element.select("span.se_publishDate").text();
//			System.out.println("published : " + date);
//
//			String content = element.select("div.se-main-container").html();
//			System.out.println("============ content start =============");
//			System.out.println(content);
//			System.out.println("============ content end =============");

			String url = element.select("a.url").attr("title");
			String postNo = Stream.of(url.split("/")).reduce((first, last) -> last).get(); // get last element after split
			System.out.println(postNo);

		});

				System.out.println(posts.size());
	}

	@Test
	public void StringValueOfTest() {
		System.out.println(String.valueOf(null));
	}

	@Test
	public void getPostById() throws IOException {
		Document doc = Jsoup.connect("https://blog.naver.com/PostView.nhn?blogId=writer0713&logNo=221465685858").get();
		Element post = doc.select("div#post_1").first();

		String title = post.select("div.se-title-text").text();
		String date = post.select("span.se_publishDate").text();
		String content = post.select("div.se-main-container").html();

		System.out.println(title);
		System.out.println(date);
		System.out.println(content);


	}

}
