import {Button, Checkbox, CheckboxGroup, List, Radio, RadioGroup, Select, Space} from "@douyinfe/semi-ui";
import React, {useEffect, useState} from "react";
import {AxiosResponse} from "axios";
import {generate} from "../../api/generate";
import {datasourceList} from "../../api/datasource";

function Generate(props: any) {

    const data = ["admin"];

    const [loading, setLoading] = useState<boolean>(false)
    const [datasourceOptionList, setDatasourceOptionList] = useState([])

    const [checkboxVal, setCV] = useState([...data[0]]);
    const [radioVal, setRV] = useState(data[0]);

    useEffect(() => {
        datasourceList().then((response: AxiosResponse) => {
            setDatasourceOptionList(response.data)
            setLoading(false);
        });
    }, [])



    const handleSubmit = (values: any) => {
        setLoading(true);
        generate(values).then((response: AxiosResponse) => {
            // @ts-ignore
            if (parseInt(response.code) === 0) {
                setLoading(false);
            }
        })
    };

    return (
        <Space align="start" wrap spacing={20}>
            <Button type={"primary"} onClick={handleSubmit}></Button>
            <Select placeholder='请选择数据源' style={{width: 180}} optionList={datasourceOptionList}></Select>
            <div style={{ display: 'flex' }}>
                <div style={{ marginRight: 16, width: 280, display: 'flex', flexWrap: 'wrap' }}>
                    <CheckboxGroup value={checkboxVal} onChange={(value) => setCV(value)}>
                        <List
                            dataSource={data}
                            className='component-list-demo-booklist'
                            split={false}
                            size='small'
                            style={{ border: '1px solid var(--semi-color-border)', flexBasis: '100%', flexShrink: 0 }}
                            renderItem={item => <List.Item className='list-item'><Checkbox value={item}>{item}</Checkbox></List.Item>}
                        />
                    </CheckboxGroup>
                </div>
                <div style={{ marginRight: 16, width: 280, display: 'flex', flexWrap: 'wrap' }}>
                    <RadioGroup value={radioVal} onChange={(e) => setRV(e.target.value)}>
                        <List
                            className='component-list-demo-booklist'
                            dataSource={data}
                            split={false}
                            size='small'
                            style={{ border: '1px solid var(--semi-color-border)', flexBasis: '100%', flexShrink: 0 }}
                            renderItem={item => <List.Item className='list-item'><Radio value={item}>{item}</Radio></List.Item>}
                        />
                    </RadioGroup>
                </div>
            </div>

        </Space>
    );
}

export default Generate;
