package com.writer0713.blog.Controller;

import com.writer0713.blog.Model.Post;
import com.writer0713.blog.Service.CrawlService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@RequestMapping("/")
@Controller
public class MainController {

	@Autowired
	public CrawlService crawlService;

	@GetMapping("/")
	public String index(Model model, @RequestParam(value = "page", defaultValue = "1") String page) {

		List<Post> posts = crawlService.getPostsBy(page);
		List<String> paging = crawlService.getPaging(page);

//		posts.stream().forEach(item -> {
//			System.out.println(item.getTitle());
//			System.out.println(item.getUrl());
//			System.out.println(item.getContent());
//			System.out.println("=============");
//		});

		model.addAttribute("posts", posts);
		model.addAttribute("currentPageNo", page);
		model.addAttribute("paging", paging);

		return "index";
	}

	@GetMapping("/post/{no}")
	public String post(@PathVariable String no, Model model) {

		// TODO 404 페이지로 리다이렉트
		if (no == null) {
		}

		Post post = crawlService.getPostBy(no);

		model.addAttribute("post", post);

		return "post";
	}

	@GetMapping("/about")
	public String about() {
		return "about";
	}
}
