package com.gitee.gen.controller;

import com.gitee.gen.common.Action;
import com.gitee.gen.common.Result;
import com.gitee.gen.entity.DatasourceConfig;
import com.gitee.gen.gen.DBConnect;
import com.gitee.gen.gen.DbType;
import com.gitee.gen.gen.GeneratorConfig;
import com.gitee.gen.gen.SQLService;
import com.gitee.gen.gen.SQLServiceFactory;
import com.gitee.gen.gen.TableDefinition;
import com.gitee.gen.service.DatasourceConfigService;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

/**
 * @author tanghc
 */
@Api(tags = "数据源配置管理")
@RestController
@RequestMapping("datasource")
public class DatasourceConfigController {

    @Autowired
    private DatasourceConfigService datasourceConfigService;


    @GetMapping("/detail")
    public Result detail(@RequestParam Integer id) {
        DatasourceConfig datasourceConfig = datasourceConfigService.getById(id);
        return Action.ok(datasourceConfig);
    }

    @PostMapping("/list")
    public Result list() {
        List<DatasourceConfig> datasourceConfigList = datasourceConfigService.listAll();
        return Action.ok(datasourceConfigList);
    }


    @PostMapping("/save")
    public Result save(@RequestBody DatasourceConfig datasourceConfig) {
        datasourceConfigService.save(datasourceConfig);
        return Action.ok();
    }


    @PostMapping("/update")
    public Result update(@RequestBody DatasourceConfig datasourceConfig) {
        datasourceConfigService.update(datasourceConfig);
        return Action.ok();
    }

    @PostMapping("/del")
    public Result del(@RequestBody DatasourceConfig datasourceConfig) {
        datasourceConfigService.delete(datasourceConfig);
        return Action.ok();
    }

    @GetMapping("/table/{id}")
    public Result listTable(@PathVariable("id") int id) {
        DatasourceConfig dataSourceConfig = datasourceConfigService.getById(id);
        GeneratorConfig generatorConfig = GeneratorConfig.build(dataSourceConfig);
        SQLService service = SQLServiceFactory.build(generatorConfig);
        List<TableDefinition> list = service.getTableSelector(generatorConfig).getSimpleTableDefinitions();
        return Action.ok(list);
    }


    @PostMapping("/test")
    public Result test(@RequestBody DatasourceConfig datasourceConfig) {
        String error = DBConnect.testConnection(GeneratorConfig.build(datasourceConfig));
        if (error != null) {
            return Action.err(error);
        }
        return Action.ok();
    }

    @PostMapping("/dbtype")
    public Result dbType(@RequestBody DatasourceConfig datasourceConfig) {
        List<DbTypeShow> dbTypeShowList = Stream.of(DbType.values())
                .map(dbType -> new DbTypeShow(dbType.getDisplayName(), dbType.getType()))
                .collect(Collectors.toList());
        return Action.ok(dbTypeShowList);
    }

    private static class DbTypeShow {
        private String label;
        private Integer dbType;

        public DbTypeShow(String label, Integer dbType) {
            this.label = label;
            this.dbType = dbType;
        }

        public String getLabel() {
            return label;
        }

        public void setLabel(String label) {
            this.label = label;
        }

        public Integer getDbType() {
            return dbType;
        }

        public void setDbType(Integer dbType) {
            this.dbType = dbType;
        }
    }


}
