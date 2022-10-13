package com.gitee.gen.entity;


import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.KeySequence;
import com.baomidou.mybatisplus.annotation.TableId;
import io.swagger.annotations.ApiModelProperty;

import java.util.Objects;

/**
 * 项目配置
 * @author aircjm
 */
public class Project {

    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    @ApiModelProperty("项目名")
    private String name;

    /** 是否已删除，1：已删除，0：未删除 */
    private Integer isDeleted;
    /** 包名*/
    private String packageName;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getIsDeleted() {
        return isDeleted;
    }

    public void setIsDeleted(Integer isDeleted) {
        this.isDeleted = isDeleted;
    }

    public String getPackageName() {
        return packageName;
    }

    public void setPackageName(String packageName) {
        this.packageName = packageName;
    }
}
