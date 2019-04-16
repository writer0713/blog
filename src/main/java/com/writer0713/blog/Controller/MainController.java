package com.writer0713.blog.Controller;

import com.writer0713.blog.Model.Post;
import com.writer0713.blog.Service.CrawlService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.annotation.PostConstruct;
import java.util.List;

@RequestMapping("/")
@Controller
public class MainController {

	@Value("${profile}")
	private String profile;

	@Autowired
	public CrawlService crawlService;

	@PostConstruct
	@Profile("local")
	public void init() {
		System.out.println("### profile : " + profile);
	}

	@GetMapping("/")
	public String index(Model model,
						@RequestParam(value = "page", defaultValue = "1") String page,
						@RequestParam(value = "categoryNo", defaultValue = "0") String categoryNo,
						@RequestParam(value = "parentCategoryNo", required = false) String parentCategoryNo)
	{

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

	@GetMapping("/search")
	public String search(Model model,
	                     @RequestParam(value = "page", defaultValue = "1") String page,
	                     @RequestParam(value = "keyword") String keyword) {

		final String categoryNo = "0";

		List<Post> posts = crawlService.searchPostsBy(page, keyword);
		List<String> paging = crawlService.getPagingForSearch(page, keyword);

		String params = getParams(categoryNo, null);

		model.addAttribute("posts", posts);
		model.addAttribute("currentPageNo", page);
		model.addAttribute("paging", paging);
		model.addAttribute("params", params);
		model.addAttribute("keyword", keyword);
		model.addAttribute("categoryNo", categoryNo);
		model.addAttribute("isSearch", true);

		return "index";
	}


	private String getParams(String categoryNo, String parentCategoryNo) {
		StringBuffer buffer = new StringBuffer();
		if (categoryNo != null) buffer.append("categoryNo=").append(categoryNo);
		if (parentCategoryNo != null) buffer.append("&").append("parentCategoryNo=").append(parentCategoryNo);

		return buffer.toString();
	}

	@ModelAttribute
	public void getCurrentProfile(Model model) {
		model.addAttribute("profile", profile);
	}

}
