import React from 'react'
import { Row, Col } from 'antd';
import '../../assets/css/ant/grid.scss'
export default class AntGrid extends React.Component{
    render(){
        return (
            <div>
                <h2>Grid</h2>
                <div>
                    <Row>
                    <Col span={12}>col-12</Col>
                    <Col span={12}>col-12</Col>
                    </Row>
                    <Row>
                    <Col span={8}>col-8</Col>
                    <Col span={8}>col-8</Col>
                    <Col span={8}>col-8</Col>
                    </Row>
                    <Row>
                    <Col span={6}>col-6</Col>
                    <Col span={6}>col-6</Col>
                    <Col span={6}>col-6</Col>
                    <Col span={6}>col-6</Col>
                    </Row>
                </div>
                <div className="gutter-example">
                    <Row gutter={16}>
                    <Col className="gutter-row" span={6}>
                        <div className="gutter-box">col-6</div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className="gutter-box">col-6</div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className="gutter-box">col-6</div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className="gutter-box">col-6</div>
                    </Col>
                    </Row>
                    <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]}>
                    <Col className="gutter-row" span={6}>
                        <div className="gutter-box">col-6</div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className="gutter-box">col-6</div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className="gutter-box">col-6</div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className="gutter-box">col-6</div>
                    </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
