package com.gitee.gen.controller;

import com.gitee.gen.common.Action;
import com.gitee.gen.common.Result;
import com.gitee.gen.service.ProjectService;
import com.gitee.gen.vo.project.ProjectUpdateVo;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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




    @PostMapping(value = "/save")
    public Result save(@RequestBody ProjectUpdateVo updateVo) {
        projectService.save(updateVo);
        return Action.ok();
    }
}
