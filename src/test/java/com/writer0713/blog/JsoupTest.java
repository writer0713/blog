package com.writer0713.blog;

import com.writer0713.blog.Model.OgTag;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.junit.Test;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;
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

//			String url = element.select("a.url").attr("title");
//			String postNo = Stream.of(url.split("/")).reduce((first, last) -> last).get(); // get last element after split
//			System.out.println(postNo);


		});

				System.out.println(posts.size());
	}

	@Test
	public void pagenation() throws IOException {

		Document document = Jsoup.connect("https://blog.naver.com/PostList.nhn?from=postList&blogId=writer0713&categoryNo=0&currentPage=11").get();
		Elements element = document.select("div.paging");

		List<String> pagenation = element.select("div.blog2_paginate a, strong")
				.stream()
				.map(elem -> elem.text().replaceAll("(페이지 이동하기|페이지로 이동)", ""))
				.filter(elem -> !elem.equals(""))
				.collect(Collectors.toList());

		for(String p : pagenation) {
			System.out.println(p);
		}
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

	@Test
	public void ogThumbnail() throws IOException {
		Document doc = Jsoup.connect("https://blog.naver.com/PostView.nhn?blogId=writer0713&logNo=221439642108").get();

		Elements ogTags = doc.select("div.se-oglink");

		List<String> ogTagElements = ogTags.stream().map(tag -> {
			String og_link_url = tag.select("a.se-oglink-info").attr("href");
			String og_thumbnail_url = tag.select("a.se-oglink-thumbnail > img").attr("src");
			String og_title = tag.select("strong.se-oglink-title").text();
			String og_body = tag.select("p.se-oglink-summary").text();

			OgTag og = new OgTag(og_link_url, og_thumbnail_url, og_title, og_body);
			return og;
		}).map(this::makeOGTagElement).collect(Collectors.toList());

		IntStream.range(0, ogTags.size()).forEach(index -> {
			String newOGTagStr = ogTagElements.get(index);
			Element originOGTag = ogTags.get(index);
			Element parent = originOGTag.parent();
			parent.append(newOGTagStr);
			originOGTag.remove();

		});


		System.out.println(doc);
	}


	private String makeOGTagElement(OgTag tag) {

		StringBuffer buffer = new StringBuffer();

		buffer.append("<div class='media'>"); // start media tag

		// add left thumbnail
		buffer.append("<div class='media-left'>")
						.append("<a href='").append(tag.getLinkURL()).append("'>")
						.append("<img class='media-object' src='").append(tag.getThumbnailURL()).append("' style='height: 100px'></img>")
						.append("</a>")
						.append("</div>");

		// add right side body
		buffer.append("<div class='media-body'>")
				.append("<h4 class='media-heading'>").append(tag.getTitle()).append("</h4>")
				.append("<a href='").append(tag.getLinkURL()).append("'>").append(tag.getBody()).append("</a>")
				.append("</div>");

		buffer.append("</div>"); // end media tag

		String html = buffer.toString();

		return html;
	}

	@Test
	public void thumbnailURLParsing() throws UnsupportedEncodingException {
//		String url = "https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fcdn.sstatic.net%2FSites%2Fstackoverflow%2Fimg%2Fapple-touch-icon%402.png%3Fv%3D73d79a89bded%22&type=ff120";
		String url = "https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F22543357%3Fs%3D400%26v%3D4%22&type=ff120";
		String decoded = URLDecoder.decode(url, "utf-8");
		System.out.println(decoded.replaceAll(".*\"(http.*?)\".*", "$1"));
	}

}
