package com.writer0713.blog.Controller;

import com.writer0713.blog.Model.Post;
import com.writer0713.blog.Service.CrawlService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RequestMapping("/")
@Controller
public class MainController {

	@Autowired
	public CrawlService crawlService;

	@GetMapping("/")
	public String index(Model model,
											HttpServletRequest request,
											@RequestParam(value = "page", defaultValue = "1") String page,
											@RequestParam(value = "categoryNo", defaultValue = "0") String categoryNo,
											@RequestParam(value = "parentCategoryNo", required = false) String parentCategoryNo) {

		List<Post> posts = crawlService.getPostsBy(page, categoryNo, parentCategoryNo);
		List<String> paging = crawlService.getPaging(page, categoryNo, parentCategoryNo);

		String params = getParams(categoryNo, parentCategoryNo);

		model.addAttribute("posts", posts);
		model.addAttribute("currentPageNo", page);
		model.addAttribute("paging", paging);
		model.addAttribute("params", params);
		model.addAttribute("categoryNo", categoryNo);

		return "index";
	}

	@GetMapping("/post/{no}")
	public String post(@PathVariable String no, Model model) {

		Post post = crawlService.getPostBy(no);

		model.addAttribute("post", post);

		return "post";
	}

	@GetMapping("/about")
	public String about() {
		return "about";
	}


	private String getParams(String categoryNo, String parentCategoryNo) {
		StringBuffer buffer = new StringBuffer();
		if (categoryNo != null) buffer.append("categoryNo=").append(categoryNo);
		if (parentCategoryNo != null) buffer.append("&").append("parentCategoryNo=").append(parentCategoryNo);

		return buffer.toString();
	}

}
