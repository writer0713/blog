package com.writer0713.blog.Controller;

import com.writer0713.blog.Model.Post;
import com.writer0713.blog.Service.CrawlService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@RequestMapping("/")
@Controller
public class MainController {

	@Autowired
	public CrawlService crawlService;

	@GetMapping("/")
	public String index(Model model) {

		List<Post> posts = crawlService.getPostsBy(1);

		model.addAttribute("posts", posts);

		return "index";
	}

	@GetMapping("/post")
	public String post() {
		return "post";
	}

	@GetMapping("/about")
	public String about() {
		return "about";
	}
}
