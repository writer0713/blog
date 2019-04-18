package com.writer0713.blog.Config;

import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Component
public class CustomBeans {

	@Bean
	public RestTemplate getRestTemplate() {
		return new RestTemplate();
	}
}
