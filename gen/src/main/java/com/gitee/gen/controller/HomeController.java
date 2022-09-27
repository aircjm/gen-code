package com.gitee.gen.controller;

import io.swagger.annotations.Api;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Api(tags = "首页")
@Controller
public class HomeController {

    private static final String REDIRECT_INDEX = "forward:index.html";

    @GetMapping("/")
    public String index() {
        return REDIRECT_INDEX;
    }

}