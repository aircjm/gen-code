package com.gitee.generator.controller;

import com.gitee.generator.common.Action;
import com.gitee.generator.common.DbType;
import com.gitee.generator.common.Result;
import com.gitee.generator.entity.DatasourceConfig;
import com.gitee.generator.gen.DBConnect;
import com.gitee.generator.gen.GeneratorConfig;
import com.gitee.generator.gen.SQLService;
import com.gitee.generator.gen.SQLServiceFactory;
import com.gitee.generator.gen.TableDefinition;
import com.gitee.generator.service.DatasourceConfigService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author tanghc
 */
@RestController
@RequestMapping("datasource")
public class DatasourceConfigController {

    @Autowired
    private DatasourceConfigService datasourceConfigService;

    @RequestMapping("/add")
    public Result add(@RequestBody DatasourceConfig datasourceConfig) {
        this.initDriverClass(datasourceConfig);
        datasourceConfigService.insert(datasourceConfig);
        return Action.ok();
    }

    @RequestMapping("/list")
    public Result list() {
        List<DatasourceConfig> datasourceConfigList = datasourceConfigService.listAll();
        return Action.ok(datasourceConfigList);
    }

    @RequestMapping("/update")
    public Result update(@RequestBody DatasourceConfig datasourceConfig) {
        this.initDriverClass(datasourceConfig);
        datasourceConfigService.update(datasourceConfig);
        return Action.ok();
    }

    @RequestMapping("/del")
    public Result del(@RequestBody DatasourceConfig datasourceConfig) {
        datasourceConfigService.delete(datasourceConfig);
        return Action.ok();
    }

    @RequestMapping("/table/{id}")
    public Result listTable(@PathVariable("id") int id) {
        DatasourceConfig dataSourceConfig = datasourceConfigService.getById(id);
        GeneratorConfig generatorConfig = GeneratorConfig.build(dataSourceConfig);
        SQLService service = SQLServiceFactory.build(generatorConfig);
        List<TableDefinition> list = service.getTableSelector(generatorConfig).getSimpleTableDefinitions();
        return Action.ok(list);
    }


    @RequestMapping("/test")
    public Result test(@RequestBody DatasourceConfig datasourceConfig) {
        this.initDriverClass(datasourceConfig);
        String error = DBConnect.testConnection(GeneratorConfig.build(datasourceConfig));
        if (error != null) {
            return Action.err(error);
        }
        return Action.ok();
    }

    private void initDriverClass(DatasourceConfig datasourceConfig) {
        Integer dbType = datasourceConfig.getDbType();
        for (DbType value : DbType.values()) {
            if (value.getType() == dbType) {
                datasourceConfig.setDriverClass(value.getDriverClass());
                break;
            }
        }
    }
}
