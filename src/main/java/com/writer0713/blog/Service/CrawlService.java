package com.writer0713.blog.Service;

import com.writer0713.blog.Model.Post;

import java.util.List;

public interface CrawlService {

	List<Post> getPostsBy(String pageNo, String categoryNo, String parentCategoryNo);

	List<String> getPaging(String pageNo, String categoryNo, String parentCategoryNo);

	Post getPostBy(String no);
}
