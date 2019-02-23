package com.writer0713.blog.Service;

import com.writer0713.blog.Model.Post;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
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
			String title = element.select("div.se-title-text span.se-fs-, div.se_title, span.itemSubjectBoldfont").text();
			String date = element.select("span.se_publishDate, p.date").text();
			String content = element.select("div.se-main-container, div.__se_component_area, div#postViewArea").text();
			int length = content.length();
			int ends = (length < 200) ? length : 200;
			String summary = content.substring(0, ends).concat("...");
			String url = getURLFrom(element);
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

		String title = postElement.select("div.se-title-text, div.se_title, span.itemSubjectBoldfont").text();
		String date = postElement.select("span.se_publishDate, p.date").text();
		String content = postElement.select("div.se-main-container, div.__se_component_area, div#postViewArea").html();

		content = processMediaTag(content);


		Post post = new Post(title, date, content);

		return post;
	}

	private String processMediaTag(String content) {


		Document doc = Jsoup.parse(content);

		String og_link_url = doc.select("a.se-oglink-info").attr("href");
		String encoded_og_thumbnail_url = doc.select("a.se-oglink-thumbnail > img").attr("src");
		String decoded_og_thumbnail_url = thumbnailURLParsing(encoded_og_thumbnail_url);
		String og_title = doc.select("strong.se-oglink-title").text();
		String og_body = doc.select("p.se-oglink-summary").text();

		String ogTag = makeOGTag(og_title, og_body, og_link_url, decoded_og_thumbnail_url);

		doc.select("div.se-oglink").remove();
		doc.append(ogTag);


//		Element post = doc.select("div.blog-post-text").first();
//
//		post.select("div.se-oglink").remove();
//		post.append(ogTag);

		return doc.html();
	}

	private String getURLFrom(Element element) {
		String url = element.select("a.url").attr("title");
		if (StringUtils.isEmpty(url)) url = element.select("a.fil5").text();
		return url;
	}

	private Document getDocument(String requestURL) {
		try {
			return Jsoup.connect(requestURL).get();
		} catch (IOException e) {
			e.printStackTrace();
		}

		return null;
	}

	private String makeOGTag(String og_title, String og_body, String og_link_url, String og_thumbnail_url) {

		StringBuffer buffer = new StringBuffer();

		buffer.append("<div class='media'>"); // start media tag

		if (! StringUtils.isEmpty(og_thumbnail_url)) {
			// add left thumbnail
			buffer.append("<div class='media-left'>")
							.append("<a href='").append(og_link_url).append("'>")
							.append("<img class='media-object image-fit' src='").append(og_thumbnail_url).append("'></img>")
							.append("</a>")
							.append("</div>");
		}



		// add right side body
		buffer.append("<div class='media-body'>")
						.append("<a href='").append(og_link_url).append("'>")
						.append("<h4 class='media-heading'>").append(og_title).append("</h4>")
						.append(og_body)
						.append("</div>");

		buffer.append("</div>"); // end media tag

		String html = buffer.toString();

		return html;
	}

	public String thumbnailURLParsing(String url) {

		String decoded = null;

		try {
			decoded = URLDecoder.decode(url, "utf-8");
			decoded = decoded.replaceAll(".*\"(http.*?)\".*", "$1");
		} catch(UnsupportedEncodingException e) {
			e.printStackTrace();
		}

		if (StringUtils.isEmpty(decoded)) decoded = "";

		return decoded;
	}

	private Elements getPosts(Document doc) {
		return doc.select("div#postListBody > div:has(div.post-back)");
	}

	private Elements getPaging(Document doc) {
		return doc.select("div.paging");
	}
}
