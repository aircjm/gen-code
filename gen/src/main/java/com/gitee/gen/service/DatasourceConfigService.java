package com.gitee.gen.service;

import com.gitee.gen.entity.DatasourceConfig;
import com.gitee.gen.gen.DbType;
import com.gitee.gen.mapper.DatasourceConfigMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

/**
 * @author tanghc
 */
@Service
public class DatasourceConfigService {

    @Autowired
    private DatasourceConfigMapper datasourceConfigMapper;

    public DatasourceConfig getById(int id) {
        return datasourceConfigMapper.getById(id);
    }

    public List<DatasourceConfig> listAll() {
        return datasourceConfigMapper.listAll();
    }

    public void save(DatasourceConfig templateConfig) {
        if (Objects.nonNull(templateConfig.getId())) {
            DatasourceConfig entity = datasourceConfigMapper.getById(templateConfig.getId());
            entity.setDbName(templateConfig.getDbName());
            entity.setHost(templateConfig.getHost());
            entity.setPort(templateConfig.getPort());
            entity.setDbType(templateConfig.getDbType());
            templateConfig.setDriverClass(DbType.of(templateConfig.getDbType()).getDriverClass());
            datasourceConfigMapper.update(entity);
        } else {
            templateConfig.setIsDeleted(0);
            DbType dbType = DbType.of(templateConfig.getDbType());
            if (dbType != null) {
                templateConfig.setDriverClass(dbType.getDriverClass());
            }
            datasourceConfigMapper.insert(templateConfig);
        }

    }

    public void update(DatasourceConfig templateConfig) {
        datasourceConfigMapper.update(templateConfig);
    }

    public void delete(DatasourceConfig templateConfig) {
        datasourceConfigMapper.delete(templateConfig);
    }
}
