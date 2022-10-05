package com.gitee.gen.controller;

import com.gitee.gen.common.Action;
import com.gitee.gen.common.Result;
import com.gitee.gen.service.ProjectService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

/**
 * @author aircjm
 */
@RestController
@RequestMapping("/project")
public class ProjectController {


    @Resource
    private ProjectService projectService;



    @PostMapping(value = "/list")
    public Result list() {
        return Action.ok(projectService.list());
    }

}
