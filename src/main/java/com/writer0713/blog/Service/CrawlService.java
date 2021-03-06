package com.writer0713.blog.Service;

import com.writer0713.blog.Model.Post;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.util.List;

public interface CrawlService {

	List<Post> getPostsBy(String pageNo, String categoryNo, String parentCategoryNo);

	List<String> getPaging(String pageNo, String categoryNo, String parentCategoryNo);

	List<String> getPagingForSearch(String pageNo, String keyword);

	List<Post> searchPostsBy(String pageNo, String keyword);

	Post getPostBy(String no);

	Elements getPostElements(Document doc);

	Elements getPagingElements(Document doc);

	Element getPostElement(Document doc);

	String getTitleFrom(Element postElement);

	String getDateFrom(Element postElement);

	Elements getContentFrom(Element postElement);

	Document getDocument(String requestURL);

	String getURLFrom(Element element);

}
