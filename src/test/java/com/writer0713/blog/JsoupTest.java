package com.writer0713.blog;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.junit.Test;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

public class JsoupTest {

	@Test
	public void connect() throws IOException {
		Document document = Jsoup.connect("https://blog.naver.com/PostList.nhn?from=postList&blogId=writer0713&categoryNo=0&currentPage=2").get();
		Elements posts = document.select("div#postListBody > div:has(div.post-back)");

//		posts.stream().forEach(element -> {
//
//			// get title
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
//
//		});

		List<String> titles = posts.stream().map(element -> element.select("div.se-title-text span.se-fs-").text()).collect(Collectors.toList());

		for(String title : titles) {
			System.out.println(title);
		}

		//		System.out.println(posts.size());
	}

	@Test
	public void StringValueOfTest() {
		System.out.println(String.valueOf(null));
	}

}
