package com.writer0713.blog.Service;

import com.writer0713.blog.Model.Post;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class CrawlServiceImpl implements CrawlService{

	private static final String URL_FOR_POSTS = "https://blog.naver.com/PostList.nhn?from=postList&blogId=writer0713&categoryNo=0&currentPage=";
	private static final String URL_FOR_ONE_POST = "https://blog.naver.com/PostView.nhn?blogId=writer0713&logNo=";

	public List<Post> getPostsBy(String pageNo) {

		String requestURL = URL_FOR_POSTS.concat(pageNo);

		Document doc = this.getDocument(requestURL);
		Elements postElements = this.getPosts(doc);

		List<Post> posts = postElements.stream().map(element -> {
			String title = element.select("div.se-title-text span.se-fs-, div.se_title").text();
			String date = element.select("span.se_publishDate").text();
			String content = element.select("div.se-main-container, div.__se_component_area").text();
			int length = content.length();
			int ends = (length < 200) ? length : 200;
			String summary = content.substring(0, ends).concat("...");
			String url = element.select("a.url").attr("title");
			String postNo = Stream.of(url.split("/")).reduce((first, last) -> last).get(); // get last element after split

			Post post = new Post(title, date, summary, postNo);

			return post;
		}).collect(Collectors.toList());

		return posts;
	}

	public List<String> getPaging(String pageNo) {

		String requestURL = URL_FOR_POSTS.concat(pageNo);

		Document doc = this.getDocument(requestURL);
		Elements pagingElement = this.getPaging(doc);

		List<String> paging = pagingElement.select("div.blog2_paginate a, strong")
				.stream()
				.map(elem -> {
					String page = elem.attr("href").replaceAll(".*currentPage=(\\d+)", "$1");
					if (StringUtils.isEmpty(page)) page = elem.text().replaceAll("(현재 페이지|페이지 이동하기|페이지로 이동)", "");
					return page;
				})
				.filter(elem -> !elem.equals(""))
				.collect(Collectors.toList());

		return paging;
	}

	public Post getPostBy(String no) {

		String requestURL = URL_FOR_ONE_POST.concat(no);

		Document doc = getDocument(requestURL);
		Element postElement = doc.select("div#post_1").first();

		String title = postElement.select("div.se-title-text, div.se_title").text();
		String date = postElement.select("span.se_publishDate").text();
		String content = postElement.select("div.se-main-container, div.__se_component_area").html();

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

	private Elements getPaging(Document doc) {
		return doc.select("div.paging");
	}
}
