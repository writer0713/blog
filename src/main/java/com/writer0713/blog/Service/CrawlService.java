package com.writer0713.blog.Service;

import com.writer0713.blog.Model.Post;

import java.util.List;

public interface CrawlService {

	List<Post> getPostsBy(String pageNo);

	List<String> getPaging(String pageNo);

	Post getPostBy(String no);
}
