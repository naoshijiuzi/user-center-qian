import {uploadFile2} from '@/services/nsjz-bi/chartController'
import { UploadOutlined } from '@ant-design/icons';
import {Button, Card, Col, Divider, Form, Input, message, Row, Select, Space, Spin, Upload} from "antd";
import TextArea from 'antd/es/input/TextArea';
import React,{useState} from "react";
import EChartsReact from "echarts-for-react";


const AddChart: React.FC = () => {
  const [chart,setChart]=useState<API.BiResponse>()
  const [option,setoption]=useState<any>();
  //提交中的状态
  const[submitting,setSubmitting] = useState<boolean>(false)




  /**
   * 提交
   * @param values
   */
  const onFinish=async (values: any) =>{
    //如果已经是提交中的状态（还在加载），直接返回，避免重复提交
    if(submitting){
      return;
    }
    //开始提交，submitting设为true
    setSubmitting(true);
    console.log('表单内容:',values)
    const params ={
      ...values,
      file:undefined,
    }
    let formData = new FormData()
    formData.append("file",values.file.file.originFileObj)
    console.log(params)
    try{
      const res = await uploadFile2(params,formData);

      if(!res?.data){
        message.error('分析失败');
      }else{
        message.success('分析成功');
        console.log("返回结果", res)
        const chartOption=JSON.parse(res.data.genChart ?? '');
        if(!chartOption){
          throw new Error('图表代码解析错误')
        }else{
          setChart(res.data);
          setoption(chartOption);
        }
      }
    }catch (e: any){
      console.log('分析失败',e.message)
      message.error('分析失败，'+e.message);
    }
    setSubmitting(false);
  }

  return (
    //把页面内筒指定为一个类名
    <div className="add-chart">
      <Row gutter={24}>
        <Col span={12}>
          <Card title={"智能分析"}>
      <Form
        // 表单名称改为addChart
        name="addChart"
        onFinish={onFinish}
        // 初始化数据啥都不填，为空
        initialValues={{  }}
      >
        <Form.Item name="goal" label="分析目标">
          <TextArea  placeholder="请输入你的分析需求，比如：分析网站用户的增长情况"/>
        </Form.Item>

        <Form.Item name="name" label="图表名称">
          <Input  placeholder="请输入你图表名称"/>
        </Form.Item>

        <Form.Item
          name="chartType"
          label="图表类型"
        >
          <Select
          options={[
            {value:'折线图',label:'折线图'},
            {value:'柱状图',label:'柱状图'},
            {value:'堆叠图',label:'堆叠图'},
            {value:'饼图',label:'饼图'},
            {value:'雷达图',label:'雷达图'},
          ]}
          />
        </Form.Item>

        <Form.Item
          name="file"
          label="原始数据"
        >
          <Upload name="file" >
            <Button icon={<UploadOutlined />}>上传csv文件</Button>
          </Upload>
        </Form.Item>


        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
          <Space>
            <Button type="primary" htmlType="submit">
             提交
            </Button>
            <Button htmlType="reset">重置</Button>
          </Space>
        </Form.Item>
      </Form>
          </Card>
        </Col>
        <Col span={12}>
          <Card title={"分析结论"}>
            {chart?.genResult ?? <div>请先在左侧进行提交</div>}
            <Spin spinning={submitting}/>
          </Card>
          <Divider/>
          <Card title="可视化图表">
            {
              option?<EChartsReact option={option}/>:<div>请现在左侧提交</div>
            }
            <Spin spinning={submitting}/>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default AddChart;
