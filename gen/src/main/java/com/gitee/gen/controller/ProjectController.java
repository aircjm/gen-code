package com.gitee.gen.controller;

import com.gitee.gen.common.Result;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/project")
public class ProjectController {



    @PostMapping(value = "/save")
    public Result save() {
        return null;
    }

}
