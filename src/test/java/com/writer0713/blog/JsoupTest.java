package com.writer0713.blog;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.junit.Test;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class JsoupTest {

	String content = "<html lang=\"en\"><head>\n" +
					"    <meta charset=\"utf-8\">\n" +
					"    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n" +
					"    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n" +
					"    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->\n" +
					"    <meta name=\"description\" content=\"\">\n" +
					"    <meta name=\"author\" content=\"\">\n" +
					"    <link rel=\"icon\" href=\"favicon.ico\">\n" +
					"    <title>Renda - clean blog theme based on Bootstrap</title>\n" +
					"    <!-- Bootstrap core CSS -->\n" +
					"    <!--<link href=\"/css/bootstrap.min.css\" rel=\"stylesheet\">-->\n" +
					"    <link href=\"https://getbootstrap.com/docs/3.3/dist/css/bootstrap.min.css\" rel=\"stylesheet\">\n" +
					"    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css\">\n" +
					"    <!-- Custom styles for this template -->\n" +
					"    <link href=\"/css/jquery.bxslider.css\" rel=\"stylesheet\">\n" +
					"    <link href=\"/css/style.css\" rel=\"stylesheet\">\n" +
					"</head>\n" +
					"\t<body>\n" +
					"\t\t<!-- Navigation -->\n" +
					"\t\t<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n" +
					"    <div class=\"container\">\n" +
					"        <div class=\"navbar-header\">\n" +
					"            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n" +
					"                <span class=\"sr-only\">Toggle navigation</span>\n" +
					"                <span class=\"icon-bar\"></span>\n" +
					"                <span class=\"icon-bar\"></span>\n" +
					"                <span class=\"icon-bar\"></span>\n" +
					"            </button>\n" +
					"        </div>\n" +
					"        <div id=\"navbar\" class=\"collapse navbar-collapse\">\n" +
					"            <ul class=\"nav navbar-nav\">\n" +
					"                <li class=\"active\"><a href=\"/\">Home</a></li>\n" +
					"                <!--<li th:classappend=\"${active} == 2 ? active\"><a href=\"/post\">Post</a></li>-->\n" +
					"                <li><a href=\"/about\">About Me</a></li>\n" +
					"            </ul>\n" +
					"\n" +
					"            <!--<ul class=\"nav navbar-nav navbar-right\">-->\n" +
					"                <!--<li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>-->\n" +
					"                <!--<li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>-->\n" +
					"                <!--<li><a href=\"#\"><i class=\"fa fa-instagram\"></i></a></li>-->\n" +
					"                <!--<li><a href=\"#\"><i class=\"fa fa-google-plus\"></i></a></li>-->\n" +
					"                <!--<li><a href=\"#\"><i class=\"fa fa-dribbble\"></i></a></li>-->\n" +
					"                <!--<li><a href=\"#\"><i class=\"fa fa-reddit\"></i></a></li>-->\n" +
					"            <!--</ul>-->\n" +
					"\n" +
					"        </div>\n" +
					"        <!--/.nav-collapse -->\n" +
					"    </div>\n" +
					"</nav>\n" +
					"\n" +
					"\t\t<div class=\"container\">\n" +
					"\t\t<header>\n" +
					"    <!--<a href=\"index.html\"><img src=\"/images/logo.png\"></a>-->\n" +
					"</header>\n" +
					"\t\t<section>\n" +
					"\t\t\t<div class=\"row\">\n" +
					"\t\t\t\t<div class=\"col-md-8\">\n" +
					"\t\t\t\t\t<article class=\"blog-post\">\n" +
					"\t\t\t\t\t\t<div class=\"blog-post-image\">\n" +
					"\t\t\t\t\t\t\t<a href=\"post.html\"><img src=\"images/750x500-5.jpg\" alt=\"\"></a>\n" +
					"\t\t\t\t\t\t</div>\n" +
					"\t\t\t\t\t\t<div class=\"blog-post-body\">\n" +
					"\t\t\t\t\t\t\t<h2><a href=\"javascript:void(0)\">[타임리프] condition에 따라 class 동적 추가</a></h2>\n" +
					"\t\t\t\t\t\t\t<div class=\"post-meta\"><span>by <a href=\"javascript:void(0)\">writer0713</a></span>/<span><i class=\"fa fa-clock-o\"></i>2019. 2. 14. 20:43</span></div>\n" +
					"\t\t\t\t\t\t\t<div class=\"blog-post-text\"><div class=\"se-component se-text se-l-default\" id=\"SE-c4908b12-3d1b-4121-9416-f58680befe69\"> \n" +
					" <div class=\"se-component-content\"> \n" +
					"  <div class=\"se-section se-section-text se-l-default\"> \n" +
					"   <div class=\"se-module se-module-text\">\n" +
					"    <!-- SE-TEXT { -->\n" +
					"    <p class=\"se-text-paragraph se-text-paragraph-align- \" style=\"\" id=\"SE-72b75d3e-995a-47f2-9078-4443ce700c25\"><span style=\"\" class=\"se-fs- se-ff-   \" id=\"SE-19c6e1b6-1311-4d74-8149-4a2075a196e0\">예를 들어, 상단 네비게이션에 메뉴가 3개 있고 현재 선택된 페이지에 따라 active 클래스를 추가해줘야 한다면 아래와 같이 th:classappend를 사용하여 할 수 있다.</span></p>\n" +
					"    <!-- } SE-TEXT -->\n" +
					"   </div> \n" +
					"  </div> \n" +
					" </div> \n" +
					"</div> \n" +
					"<div class=\"se-component se-code se-l-code_black\" id=\"SE-fd001ba2-bfce-45e3-b054-31d2c54f1594\"> \n" +
					" <div class=\"se-component-content\"> \n" +
					"  <div class=\"se-section se-section-code se-l-code_black\"> \n" +
					"   <div class=\"se-module se-module-code se-fs-fs13\"> \n" +
					"    <div class=\"se-code-source\"> \n" +
					"     <div class=\"__se_code_view language-javascript\">\n" +
					"      &lt;ul class=\"nav navbar-nav\"&gt; &lt;li th:classappend=\"${active} == 1 ? active\"&gt;&lt;a href=\"/\"&gt;Home&lt;/a&gt;&lt;/li&gt; &lt;li th:classappend=\"${active} == 2 ? active\"&gt;&lt;a href=\"/about\"&gt;About Me&lt;/a&gt;&lt;/li&gt; &lt;/ul&gt;\n" +
					"     </div> \n" +
					"    </div> \n" +
					"   </div> \n" +
					"  </div> \n" +
					" </div> \n" +
					" <script type=\"text/data\" class=\"__se_module_data\" data-module=\"{&quot;type&quot;:&quot;v2_code&quot;, &quot;id&quot; : &quot;SE-fd001ba2-bfce-45e3-b054-31d2c54f1594&quot;}\"></script> \n" +
					"</div> \n" +
					"<div class=\"se-component se-horizontalLine se-l-line1\" id=\"SE-12ef9e93-408e-49e7-b74e-31dfdbe6851f\"> \n" +
					" <div class=\"se-component-content\"> \n" +
					"  <div class=\"se-section se-section-horizontalLine se-l-line1 se-section-align-\"> \n" +
					"   <div class=\"se-module se-module-horizontalLine\"> \n" +
					"    <hr class=\"se-hr\"> \n" +
					"   </div> \n" +
					"  </div> \n" +
					" </div> \n" +
					"</div> \n" +
					"<div class=\"se-component se-oglink se-l-image\" id=\"SE-750bf448-7371-4233-a006-0124dbbf4d99\"> \n" +
					" <div class=\"se-component-content\"> \n" +
					"  <div class=\"media\">\n" +
					"   <div class=\"media-left\">\n" +
					"      <a href=\"https://stackoverflow.com/a/26977255/3989364\" class=\"\\\" target=\"_blank\" style=\"\n" +
					"         /* width: 200px; */\n" +
					"         /* height: 200px; */\n" +
					"         \"> <img src=\"https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fcdn.sstatic.net%2FSites%2Fstackoverflow%2Fimg%2Fapple-touch-icon%402.png%3Fv%3D73d79a89bded%22&amp;type=ff120\" class=\"media-object\" alt=\"\" style=\"\n" +
					"         /* width: 200px; */\n" +
					"         /* height: 200px; */\n" +
					"         \">\n" +
					" </a> \n" +
					"   </div>\n" +
					"   <div class=\"media-left\">\n" +
					"      <h4 class=\"media-heading\">Thymeleaf: how to use conditionals to dynamically add/remove a CSS class</h4>\n" +
					"      By using Thymeleaf as template engine, is it possible to add/remove dynamically a CSS class to/from a simple div with the th:if clause? Normally, I could use the conditional clause as follows: &amp;l...\n" +
					"   </div>\n" +
					"</div>\n" +
					" \n" +
					" </div> \n" +
					" <script type=\"text/data\" class=\"__se_module_data\" data-module=\"{&quot;type&quot;:&quot;v2_oglink&quot;, &quot;id&quot; :&quot;SE-750bf448-7371-4233-a006-0124dbbf4d99&quot;, &quot;data&quot; : {&quot;link&quot; : &quot;https://stackoverflow.com/a/26977255/3989364&quot;, &quot;isVideo&quot; : &quot;false&quot;, &quot;thumbnail&quot; : &quot;https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fcdn.sstatic.net%2FSites%2Fstackoverflow%2Fimg%2Fapple-touch-icon%402.png%3Fv%3D73d79a89bded%22&amp;type=ff120&quot;}}\"></script> \n" +
					"</div> \n" +
					"<div class=\"se-component se-text se-l-default\" id=\"SE-b9fb7ec2-4543-4f3f-88fd-6e0fea92d9ab\"> \n" +
					" <div class=\"se-component-content\"> \n" +
					"  <div class=\"se-section se-section-text se-l-default\"> \n" +
					"   <div class=\"se-module se-module-text\">\n" +
					"    <!-- SE-TEXT { -->\n" +
					"    <p class=\"se-text-paragraph se-text-paragraph-align- \" style=\"\" id=\"SE-441b33c3-33d5-4f29-9083-3cb30db08a52\"><span style=\"\" class=\"se-fs- se-ff-   \" id=\"SE-935964fe-3784-4f0b-bd9b-7110c6780d88\">&#8203;</span></p>\n" +
					"    <!-- } SE-TEXT -->\n" +
					"   </div> \n" +
					"  </div> \n" +
					" </div> \n" +
					"</div></div>\n" +
					"\t\t\t\t\t\t</div>\n" +
					"\t\t\t\t\t</article>\n" +
					"\t\t\t\t</div>\n" +
					"                <div class=\"col-md-4 sidebar-gutter\">\n" +
					"    <aside>\n" +
					"        <!-- sidebar-widget -->\n" +
					"        <div class=\"sidebar-widget\">\n" +
					"            <!--<h3 class=\"sidebar-title\">About Me</h3>-->\n" +
					"            <div class=\"widget-container widget-about\">\n" +
					"                <a href=\"/post\"><img src=\"https://avatars3.githubusercontent.com/u/5811400?s=460&amp;v=4\" alt=\"\"></a>\n" +
					"                <h4>KIM JUNGHWAN</h4>\n" +
					"                <div class=\"author-title\">Developer</div>\n" +
					"                <p>프로그래밍을 사랑하는,</p>\n" +
					"                <p>프로그래밍을 즐기는 사람입니다.</p>\n" +
					"            </div>\n" +
					"        </div>\n" +
					"        <!-- sidebar-widget -->\n" +
					"        <!--<div class=\"sidebar-widget\">-->\n" +
					"            <!--<h3 class=\"sidebar-title\">Featured Posts</h3>-->\n" +
					"            <!--<div class=\"widget-container\">-->\n" +
					"                <!--<article class=\"widget-post\">-->\n" +
					"                    <!--<div class=\"post-image\">-->\n" +
					"                        <!--<a href=\"/post\"><img src=\"/images/90x60-1.jpg\" alt=\"\"></a>-->\n" +
					"                    <!--</div>-->\n" +
					"                    <!--<div class=\"post-body\">-->\n" +
					"                        <!--<h2><a href=\"/post\">The State of the Word 2014</a></h2>-->\n" +
					"                        <!--<div class=\"post-meta\">-->\n" +
					"                            <!--<span><i class=\"fa fa-clock-o\"></i> 2. august 2015</span> <span><a href=\"/post\"><i class=\"fa fa-comment-o\"></i> 23</a></span>-->\n" +
					"                        <!--</div>-->\n" +
					"                    <!--</div>-->\n" +
					"                <!--</article>-->\n" +
					"                <!--<article class=\"widget-post\">-->\n" +
					"                    <!--<div class=\"post-image\">-->\n" +
					"                        <!--<a href=\"/post\"><img src=\"/images/90x60-2.jpg\" alt=\"\"></a>-->\n" +
					"                    <!--</div>-->\n" +
					"                    <!--<div class=\"post-body\">-->\n" +
					"                        <!--<h2><a href=\"/post\">Why The Muppets Needs to Channel 30 Rock</a></h2>-->\n" +
					"                        <!--<div class=\"post-meta\">-->\n" +
					"                            <!--<span><i class=\"fa fa-clock-o\"></i> 2. august 2015</span> <span><a href=\"/post\"><i class=\"fa fa-comment-o\"></i> 23</a></span>-->\n" +
					"                        <!--</div>-->\n" +
					"                    <!--</div>-->\n" +
					"                <!--</article>-->\n" +
					"                <!--<article class=\"widget-post\">-->\n" +
					"                    <!--<div class=\"post-image\">-->\n" +
					"                        <!--<a href=\"/post\"><img src=\"/images/90x60-3.jpg\" alt=\"\"></a>-->\n" +
					"                    <!--</div>-->\n" +
					"                    <!--<div class=\"post-body\">-->\n" +
					"                        <!--<h2><a href=\"/post\">The State of the Word 2014</a></h2>-->\n" +
					"                        <!--<div class=\"post-meta\">-->\n" +
					"                            <!--<span><i class=\"fa fa-clock-o\"></i> 2. august 2015</span> <span><a href=\"/post\"><i class=\"fa fa-comment-o\"></i> 23</a></span>-->\n" +
					"                        <!--</div>-->\n" +
					"                    <!--</div>-->\n" +
					"                <!--</article>-->\n" +
					"                <!--<article class=\"widget-post\">-->\n" +
					"                    <!--<div class=\"post-image\">-->\n" +
					"                        <!--<a href=\"/post\"><img src=\"/images/90x60-4.jpg\" alt=\"\"></a>-->\n" +
					"                    <!--</div>-->\n" +
					"                    <!--<div class=\"post-body\">-->\n" +
					"                        <!--<h2><a href=\"/post\">Vintage-Inspired Finds for Your Home</a></h2>-->\n" +
					"                        <!--<div class=\"post-meta\">-->\n" +
					"                            <!--<span><i class=\"fa fa-clock-o\"></i> 2. august 2015</span> <span><a href=\"/post\"><i class=\"fa fa-comment-o\"></i> 23</a></span>-->\n" +
					"                        <!--</div>-->\n" +
					"                    <!--</div>-->\n" +
					"                <!--</article>-->\n" +
					"                <!--<article class=\"widget-post\">-->\n" +
					"                    <!--<div class=\"post-image\">-->\n" +
					"                        <!--<a href=\"/post\"><img src=\"/images/90x60-5.jpg\" alt=\"\"></a>-->\n" +
					"                    <!--</div>-->\n" +
					"                    <!--<div class=\"post-body\">-->\n" +
					"                        <!--<h2><a href=\"/post\">The State of the Word 2014</a></h2>-->\n" +
					"                        <!--<div class=\"post-meta\">-->\n" +
					"                            <!--<span><i class=\"fa fa-clock-o\"></i> 2. august 2015</span> <span><a href=\"/post\"><i class=\"fa fa-comment-o\"></i> 23</a></span>-->\n" +
					"                        <!--</div>-->\n" +
					"                    <!--</div>-->\n" +
					"                <!--</article>-->\n" +
					"            <!--</div>-->\n" +
					"        <!--</div>-->\n" +
					"\n" +
					"        <!-- sidebar-widget -->\n" +
					"        <div class=\"sidebar-widget\">\n" +
					"            <h3 class=\"sidebar-title\">Socials</h3>\n" +
					"            <div class=\"widget-container\">\n" +
					"                <div class=\"widget-socials\">\n" +
					"                    <a href=\"https://www.facebook.com/profile.php?id=100002444318532\" target=\"_blank\"><i class=\"fa fa-facebook\"></i></a>\n" +
					"                    <a href=\"https://www.instagram.com/writer0713/\" target=\"_blank\"><i class=\"fa fa-instagram\"></i></a>\n" +
					"                    <a href=\"https://github.com/writer0713\" target=\"_blank\"><i class=\"fa fa-github\"></i></a>\n" +
					"                    <!--<a href=\"#\"><i class=\"fa fa-twitter\"></i></a>-->\n" +
					"                    <!--<a href=\"#\"><i class=\"fa fa-google-plus\"></i></a>-->\n" +
					"                    <!--<a href=\"#\"><i class=\"fa fa-dribbble\"></i></a>-->\n" +
					"                </div>\n" +
					"            </div>\n" +
					"        </div>\n" +
					"        <!-- sidebar-widget -->\n" +
					"        <div class=\"sidebar-widget\">\n" +
					"            <h3 class=\"sidebar-title\">Categories</h3>\n" +
					"            <div class=\"widget-container\">\n" +
					"                <ul>\n" +
					"                    <li><a href=\"/\">Home</a></li>\n" +
					"                    <li><a href=\"/post\">Post</a></li>\n" +
					"                    <li><a href=\"/about\">About Me</a></li>\n" +
					"                </ul>\n" +
					"            </div>\n" +
					"        </div>\n" +
					"    </aside>\n" +
					"</div>\n" +
					"\t\t\t</div>\n" +
					"\t\t</section>\n" +
					"\t\t</div><!-- /.container -->\n" +
					"\n" +
					"\t\t<footer class=\"footer\">\n" +
					"\n" +
					"    <div class=\"footer-socials\">\n" +
					"        <a href=\"https://www.facebook.com/profile.php?id=100002444318532\" target=\"_blank\"><i class=\"fa fa-facebook\"></i></a>\n" +
					"        <a href=\"https://www.instagram.com/writer0713/\" target=\"_blank\"><i class=\"fa fa-instagram\"></i></a>\n" +
					"        <a href=\"https://github.com/writer0713\" target=\"_blank\"><i class=\"fa fa-github\"></i></a>\n" +
					"    </div>\n" +
					"\n" +
					"    <div class=\"footer-bottom\">\n" +
					"        <i class=\"fa fa-copyright\"></i> Copyright 2015. All rights reserved.<br>\n" +
					"        Theme made by <a href=\"http://www.moozthemes.com\">MOOZ Themes</a>\n" +
					"    </div>\n" +
					"</footer>\n" +
					"\n" +
					"\t\t\n" +
					"    <!-- Bootstrap core JavaScript\n" +
					"\t\t\t================================================== -->\n" +
					"    <!-- Placed at the end of the document so the pages load faster -->\n" +
					"    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js\"></script>\n" +
					"    <script src=\"/js/bootstrap.min.js\"></script>\n" +
					"    <script src=\"/js/jquery.bxslider.js\"></script>\n" +
					"    <script src=\"/js/mooz.scripts.min.js\"></script>\n" +
					"\n" +
					"\t\n" +
					"</body></html>";

	@Test
	public void connect() throws IOException {
		Document document = Jsoup.connect("https://blog.naver.com/PostList.nhn?from=postList&blogId=writer0713&categoryNo=0&currentPage=2").get();
		Elements posts = document.select("div#postListBody > div:has(div.post-back)");

		posts.stream().forEach(element -> {

			// get title
//			String title = element.select("div.se-title-text span.se-fs-").text();
//			System.out.println("title : " + title);
//
//			// date
//			String date = element.select("span.se_publishDate").text();
//			System.out.println("published : " + date);
//
//			String content = element.select("div.se-main-container").html();
//			System.out.println("============ content start =============");
//			System.out.println(content);
//			System.out.println("============ content end =============");

//			String url = element.select("a.url").attr("title");
//			String postNo = Stream.of(url.split("/")).reduce((first, last) -> last).get(); // get last element after split
//			System.out.println(postNo);


		});

				System.out.println(posts.size());
	}

	@Test
	public void pagenation() throws IOException {

		Document document = Jsoup.connect("https://blog.naver.com/PostList.nhn?from=postList&blogId=writer0713&categoryNo=0&currentPage=11").get();
		Elements element = document.select("div.paging");

		List<String> pagenation = element.select("div.blog2_paginate a, strong")
				.stream()
				.map(elem -> elem.text().replaceAll("(페이지 이동하기|페이지로 이동)", ""))
				.filter(elem -> !elem.equals(""))
				.collect(Collectors.toList());

		for(String p : pagenation) {
			System.out.println(p);
		}
	}

	@Test
	public void StringValueOfTest() {
		System.out.println(String.valueOf(null));
	}

	@Test
	public void getPostById() throws IOException {
		Document doc = Jsoup.connect("https://blog.naver.com/PostView.nhn?blogId=writer0713&logNo=221465685858").get();
		Element post = doc.select("div#post_1").first();

		String title = post.select("div.se-title-text").text();
		String date = post.select("span.se_publishDate").text();
		String content = post.select("div.se-main-container").html();

		System.out.println(title);
		System.out.println(date);
		System.out.println(content);


	}

	@Test
	public void ogThumbnail() {
		Document doc = Jsoup.parse(content);

		String og_link_url = doc.select("a.se-oglink-info").attr("href");
		String og_thumbnail_url = doc.select("a.se-oglink-thumbnail > img").attr("src");
		String og_title = doc.select("strong.se-oglink-title").text();
		String og_body = doc.select("p.se-oglink-summary").text();


//		System.out.println(og_link_url);
//		System.out.println(og_thumbnail_url);
//		System.out.println(og_title);
//		System.out.println(og_body);



		String ogTag = makeOGTag(og_title, og_body, og_link_url, og_thumbnail_url);


		Element post = doc.select("div.blog-post-text").first();

		post.select("div.se-oglink").remove();
		post.append(ogTag);

		System.out.println(post);



	}


	private String makeOGTag(String og_title, String og_body, String og_link_url, String og_thumbnail_url) {

		StringBuffer buffer = new StringBuffer();

		buffer.append("<div class='media'>"); // start media tag

		// add left thumbnail
		buffer.append("<div class='media-left'>")
						.append("<a href='").append(og_link_url).append("'>")
						.append("<img class='media-object' src='").append(og_thumbnail_url).append("' style='height: 100px'></img>")
						.append("</a>")
						.append("</div>");

		// add right side body
		buffer.append("<div class='media-body'>")
						.append("<h4 class='media-heading'>").append(og_title).append("</h4>")
						.append(og_body)
						.append("</div>");

		buffer.append("</div>"); // end media tag

		String html = buffer.toString();

		return html;
	}

	@Test
	public void thumbnailURLParsing() throws UnsupportedEncodingException {
		String url = "https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fcdn.sstatic.net%2FSites%2Fstackoverflow%2Fimg%2Fapple-touch-icon%402.png%3Fv%3D73d79a89bded%22&type=ff120";
		String decoded = URLDecoder.decode(url, "utf-8");
		System.out.println(decoded.replaceAll(".*\"(http.*?)\".*", "$1"));
	}

}
