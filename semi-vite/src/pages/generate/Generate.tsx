import {Button, Checkbox, CheckboxGroup, List, Notification, Radio, RadioGroup, Select, Space} from "@douyinfe/semi-ui";
import React, {useEffect, useState} from "react";
import {AxiosResponse} from "axios";
import {generate} from "../../api/generate";
import {datasourceList} from "../../api/datasource";

function Generate(props: any) {

    const data = [{
        "schema": null,
        "tableName": "zhb_grid_seek_help",
        "comment": "代办服务",
        "columnDefinitions": [],
        "csharpColumnDefinitions": [],
        "hasDateColumn": false,
        "hasDateField": false,
        "hasLocalDateField": false,
        "hasLocalDateTimeField": false,
        "hasBigDecimalField": false,
        "hasJsonbField": false
    }, {
        "schema": null,
        "tableName": "zhb_grid_volunteer_manange",
        "comment": "志愿者申请",
        "columnDefinitions": [],
        "csharpColumnDefinitions": [],
        "hasDateColumn": false,
        "hasDateField": false,
        "hasLocalDateField": false,
        "hasLocalDateTimeField": false,
        "hasBigDecimalField": false,
        "hasJsonbField": false
    }];

    const [loading, setLoading] = useState<boolean>(false)
    const [datasourceOptionList, setDatasourceOptionList] = useState([])

    const [checkboxVal, setCV] = useState([]);
    const [radioVal, setRV] = useState();

    useEffect(() => {
        datasourceList().then((response: AxiosResponse) => {
            setDatasourceOptionList(response.data)
            setLoading(false);
        });
    }, [])




    const handleSubmit = () => {
        setLoading(true);
        const genParam = {
            "tableList": checkboxVal
        }
        Notification.info({
            content: JSON.stringify(genParam)
        })
    };

    return (
        <Space align="start" wrap spacing={20}>
            <Button type={"primary"} onClick={handleSubmit}>生成</Button>
            <Select placeholder='请选择数据源' style={{width: 180}} optionList={datasourceOptionList}></Select>
            <div style={{ display: 'flex' }}>
                <div style={{ marginRight: 16, width: 400, display: 'flex', flexWrap: 'wrap' }}>
                    <CheckboxGroup value={checkboxVal} onChange={(value) => setCV(value)}>
                        <List
                            dataSource={data}
                            className='component-list-demo-booklist'
                            split={false}
                            size='small'
                            style={{ border: '1px solid var(--semi-color-border)', flexBasis: '100%', flexShrink: 0 }}
                            renderItem={item => <List.Item className='list-item'><Checkbox value={item.tableName}>{item.tableName}-{item.comment}</Checkbox></List.Item>}
                        />
                    </CheckboxGroup>
                </div>
                <div style={{ marginRight: 16, width: 400, display: 'flex', flexWrap: 'wrap' }}>
                    <RadioGroup value={radioVal} onChange={(e) => setRV(e.target.value)}>
                        <List
                            className='component-list-demo-booklist'
                            dataSource={data}
                            split={false}
                            size='small'
                            style={{ border: '1px solid var(--semi-color-border)', flexBasis: '100%', flexShrink: 0 }}
                            renderItem={item => <List.Item className='list-item'><Radio value={item.tableName}>{item.comment}</Radio></List.Item>}
                        />
                    </RadioGroup>
                </div>
            </div>

        </Space>
    );
}

export default Generate;
