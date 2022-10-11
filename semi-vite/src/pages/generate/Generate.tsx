import {
    Button,
    Checkbox,
    CheckboxGroup, Col,
    Divider,
    List,
    Notification,
    Radio,
    RadioGroup, Row,
    Select,
    Space
} from "@douyinfe/semi-ui";
import React, {useEffect, useState} from "react";
import {AxiosResponse} from "axios";
import {datasourceList} from "../../api/datasource";
import {ResponseData} from "../../models";

function Generate(props: any) {

    const [loading, setLoading] = useState<boolean>(false)
    const [datasourceOptionList, setDatasourceOptionList] = useState<Array<any>>([])
    const [tableList, setTableList] = useState([{
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
    }]);

    const [checkboxVal, setCV] = useState([]);
    const [radioVal, setRV] = useState();

    useEffect(() => {
        datasourceList().then((response: ResponseData<Array<any>>) => {
            setDatasourceOptionList(response.data.map((item: any) => {
                return {
                    label: item.host + " " + item.dbName,
                    value: item.id
                };
            }));

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

    // 列表搜索
    const onSearch = (string: string) => {
        let newList;
        if (string) {
            newList = tableList.filter(item => item.comment.includes(string));
        } else {
            newList = tableList;
        }
        setTableList(newList);
    };

    // 选中数据源更新数据库表列表数据
    const selectDatasource = (option: any) => {
        // todo
    };

    return (
        <div className={"grid"}>
            <Row>
                <Button type={"primary"} onClick={handleSubmit}>生成</Button>
                <Select placeholder='请选择数据源' style={{width: 180}} optionList={datasourceOptionList}
                        onSelect={selectDatasource}></Select>
            </Row>
            <br/>
            <Row>
                <Col span={11}>
                    <div className="col-content">
                        <CheckboxGroup value={checkboxVal} onChange={(value: any) => setCV(value)}>
                            <List
                                dataSource={tableList}
                                className='component-list-demo-booklist'
                                split={false}
                                size='small'
                                style={{
                                    border: '1px solid var(--semi-color-border)',
                                    flexBasis: '100%',
                                    flexShrink: 0
                                }}
                                renderItem={item => <List.Item className='list-item'><Checkbox
                                    value={item.tableName}>{item.tableName}-{item.comment}</Checkbox></List.Item>}
                            />
                        </CheckboxGroup>
                    </div>
                </Col>
                <Col span={11} offset={2}>
                    <div className="col-content">
                        <RadioGroup value={radioVal} onChange={(e) => setRV(e.target.value)}>
                            <List
                                className='component-list-demo-booklist'
                                dataSource={tableList}
                                split={false}
                                size='small'
                                style={{
                                    border: '1px solid var(--semi-color-border)',
                                    flexBasis: '100%',
                                    flexShrink: 0
                                }}
                                renderItem={item => <List.Item className='list-item'><Radio
                                    value={item.tableName}>{item.comment}</Radio></List.Item>}
                            />
                        </RadioGroup>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Generate;
