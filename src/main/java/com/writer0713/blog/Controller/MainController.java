package com.writer0713.blog.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/")
@Controller
public class MainController {

	public String index() {
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
