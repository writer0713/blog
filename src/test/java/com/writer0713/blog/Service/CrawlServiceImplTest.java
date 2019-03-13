package com.writer0713.blog.Service;

import com.writer0713.blog.Model.Post;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.hamcrest.CoreMatchers.*;
import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest
public class CrawlServiceImplTest {

	@Autowired
	private CrawlService service;

	private String pageNo = "1";
	private String categoryNo = "0";
	private String parentCategoryNo = null;
	private String postNo = "221477149965";

	@Value("${blog.url.post}")
	private String PREFIX_URL_FOR_POST;

	@Value("${blog.url.posts}")
	private String PREFIX_URL_FOR_POSTS;

	private String URL_FOR_POST;
	private String URL_FOR_POSTS;

	@Before
	public void setup() {
		URL_FOR_POST = PREFIX_URL_FOR_POST.concat(postNo);
		URL_FOR_POSTS = PREFIX_URL_FOR_POSTS.concat(pageNo);
	}

	@Test
	public void getPostsBy() {

		// given
		List<Post> posts = service.getPostsBy(pageNo, categoryNo, parentCategoryNo);

		// then
		assertFalse(posts.isEmpty());

	}

	@Test
	public void getPaging() {

		// given
		List<String> paging = service.getPaging(pageNo, categoryNo, parentCategoryNo);

		//then
		assertFalse(paging.isEmpty());

	}

	@Test
	public void getPostBy() {

		Post post = service.getPostBy(postNo);

		assertThat(post.getAuthor(), is("writer0713"));
		assertThat(post.getDate(), is(notNullValue()));
		assertThat(post.getContent(), containsString("se-module-text"));

	}

	@Test
	public void processMediaTag() {

	}

	@Test
	public void getPostElements() {
		Document doc = service.getDocument(URL_FOR_POSTS);
		assertNotNull(doc);

		Elements postElements = service.getPostElements(doc);
		assertFalse(postElements.isEmpty()); // postElements should not be empty

	}

	@Test
	public void getPostElement() {

		// 1. doc is not null
		Document doc = service.getDocument(URL_FOR_POST);
		assertNotNull(doc);

		// 2. get postElement from doc and is not null
		Element postElement = service.getPostElement(doc);
		assertNotNull(postElement);

		// 3. get title, date, content from postElement and are not null
		String title = service.getTitleFrom(postElement);
		String date = service.getDateFrom(postElement);
		String content = service.getContentFrom(postElement).html();

		assertNotNull(title);
		assertNotNull(date);
		assertNotNull(content);
	}

	@Test
	public void getDocument() {
		Document doc = service.getDocument(URL_FOR_POST);
		assertNotNull(doc);
	}

	@Test
	public void getURLFrom() {
		Document doc = service.getDocument(URL_FOR_POSTS);
		assertNotNull(doc);

		Elements postElements = service.getPostElements(doc);
		assertFalse(postElements.isEmpty()); // postElements should not be empty

		postElements.stream().forEach(element -> {
			String url = service.getURLFrom(element);
			assertNotNull(url);
		});
	}
}