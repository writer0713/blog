package com.writer0713.blog;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.net.URLDecoder;
import java.util.Arrays;
import java.util.List;

//@RunWith(SpringRunner.class)
//@SpringBootTest
public class BlogApplicationTests {

	@Test
	public void contextLoads() throws IOException {

		String url = "https://blog.naver.com/BlogTagListInfo.nhn?blogId=writer0713&logNoList=221475236796&logType=mylog";

		RestTemplate template = new RestTemplate();
		String res = template.getForObject(url, String.class);

		ObjectMapper mapper = new ObjectMapper();
		JsonNode node = mapper.readTree(res);

		String tagStr = node.get("taglist").get(0).get("tagName").toString();

		String decoded = URLDecoder.decode(tagStr, "UTF-8");

		List<String> tags = Arrays.asList(decoded.replaceAll("\"", "").split(","));


		for(String tag : tags) {
			System.out.println(tag);
		}
	}

}