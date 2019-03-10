package com.writer0713.blog.Model;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.util.StringUtils;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;

@Getter
@Setter
@ToString
@EqualsAndHashCode
public class OgTag {

	private String linkURL;
	private String thumbnailURL;
	private String title;
	private String body;

	public OgTag(String linkURL, String thumbnailURL, String title, String body) {
		int length = body.length() < 44 ? body.length() : 44;

		this.linkURL = linkURL;
		this.thumbnailURL = this.thumbnailURLParsing(thumbnailURL);
		this.title = title;
		this.body = body.substring(0, length).concat("  ...");
	}

	private String thumbnailURLParsing(String url) {

		String decoded = null;

		try {
			decoded = URLDecoder.decode(url, "utf-8");
			decoded = decoded.replaceAll(".*\"(http.*?)\".*", "$1");
		} catch(UnsupportedEncodingException e) {
			e.printStackTrace();
		}

		if (StringUtils.isEmpty(decoded)) decoded = "";

		return decoded;
	}
}