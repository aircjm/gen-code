package com.gitee.gen.service;

import cn.hutool.core.bean.BeanUtil;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.gitee.gen.entity.Project;
import com.gitee.gen.mapper.ProjectMapper;
import com.gitee.gen.vo.project.ProjectUpdateVo;
import org.springframework.stereotype.Service;

import java.util.Objects;

/**
 * 项目服务
 */
@Service
public class ProjectService extends ServiceImpl<ProjectMapper, Project> {


    public void save(ProjectUpdateVo updateVo) {
        if (Objects.nonNull(updateVo.getId())) {
            Project project = getById(updateVo.getId());
            if (Objects.nonNull(project)) {
                project.setName(updateVo.getName());
                project.setPackageName(updateVo.getPackageName());
                updateById(project);
            }
        } else {
            Project project = BeanUtil.copyProperties(updateVo, Project.class);
            project.setIsDeleted(0);
            save(project);
        }

    }
}
