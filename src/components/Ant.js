// https://ant.design/docs/react/introduce-cn
import React from 'react'
import '../assets/css/ant.scss'
import 'antd/dist/antd.css'
import { List } from 'antd';
import AntButton from './Ant/Button';
import AntIcon from './Ant/Icon';
import AntTypography from './Ant/Typography';
import AntGrid from './Ant/Grid';
import { Switch, Route, Link } from 'react-router-dom'

const data = [
    { name: 'Button 按钮', path: 'button', component: <AntButton /> },
    { name: 'Icon 图标', path: 'icon', component: <AntIcon /> },
    { name: 'Typography 排版', path: 'typography', component: <AntTypography /> },
    { name: 'Grid 栅格', path: 'grid', component: <AntGrid /> },
    { name: 'Layout 布局', path: 'layout', component: <AntButton /> },
    { name: 'Affix 固钉', path: 'affix', component: <AntButton /> },
    { name: 'Breadcrumb 面包屑', path: 'breadcrumb', component: <AntButton /> },
    { name: 'Dropdown 下拉菜单', path: 'Dropdown', component: <AntButton /> },
    { name: 'Menu 导航菜单', path: 'Menu', component: <AntButton /> },
    { name: 'Pagination 分页', path: 'Pagination', component: <AntButton /> },
    { name: 'PageHeader 页头', path: 'PageHeader', component: <AntButton /> },
    { name: 'Steps 步骤条', path: 'Steps', component: <AntButton /> },
    { name: 'AutoComplete 自动完成', path: 'AutoComplete', component: <AntButton /> },
    { name: 'Checkbox 多选框', path: 'Checkbox', component: <AntButton /> },
    { name: 'Cascader 级联选择', path: 'Cascader', component: <AntButton /> },
    { name: 'DatePicker 日期选择框', path: 'DatePicker', component: <AntButton /> },
    { name: 'Form 表单', path: 'Form', component: <AntButton /> },
    { name: 'InputNumber 数字输入框', path: 'InputNumber', component: <AntButton /> },
    { name: 'Input 输入框', path: 'Input', component: <AntButton /> },
    { name: 'Mentions 提及', path: 'Mentions', component: <AntButton /> },
    { name: 'Rate 评分', path: 'Rate', component: <AntButton /> },
    { name: 'Radio 单选框', path: 'Radio', component: <AntButton /> },
    { name: 'Switch 开关', path: 'Switch', component: <AntButton /> },
    { name: 'Slider 滑动输入条', path: 'Slider', component: <AntButton /> },
    { name: 'Select 选择器', path: 'Select', component: <AntButton /> },
    { name: 'TreeSelect 树选择', path: 'TreeSelect', component: <AntButton /> },
    { name: 'Transfer 穿梭框', path: 'Transfer', component: <AntButton /> },
    { name: 'TimePicker 时间选择框', path: 'TimePicker', component: <AntButton /> },
    { name: 'Upload 上传', path: 'Upload', component: <AntButton /> },
    { name: 'Avatar 头像', path: 'Avatar', component: <AntButton /> },
    { name: 'Badge 徽标数', path: 'Badge', component: <AntButton /> },
    { name: 'Comment 评论', path: 'Comment', component: <AntButton /> },
    { name: 'Collapse 折叠面板', path: 'Collapse', component: <AntButton /> },
    { name: 'Carousel 走马灯', path: 'Carousel', component: <AntButton /> },
    { name: 'Card 卡片', path: 'Card', component: <AntButton /> },
    { name: 'Calendar 日历', path: 'Calendar', component: <AntButton /> },
    { name: 'Descriptions 描述列表', path: 'Descriptions', component: <AntButton /> },
    { name: 'Empty 空状态', path: 'Empty', component: <AntButton /> },
    { name: 'List 列表', path: 'List', component: <AntButton /> },
    { name: 'Popover 气泡卡片', path: 'Popover', component: <AntButton /> },
    { name: 'Statistic 统计数值', path: 'Statistic', component: <AntButton /> },
    { name: 'Tree 树形控件', path: 'Tree', component: <AntButton /> },
    { name: 'Tooltip 文字提示', path: 'Tooltip', component: <AntButton /> },
    { name: 'Timeline 时间轴', path: 'Timeline', component: <AntButton /> },
    { name: 'Tag 标签', path: 'Tag', component: <AntButton /> },
    { name: 'Tabs 标签页', path: 'Tabs', component: <AntButton /> },
    { name: 'Table 表格', path: 'Table', component: <AntButton /> },
    { name: 'Alert 警告提示', path: 'Alert', component: <AntButton /> },
    { name: 'Drawer 抽屉', path: 'Drawer', component: <AntButton /> },
    { name: 'Modal 对话框', path: 'Modal', component: <AntButton /> },
    { name: 'Message 全局提示', path: 'Message', component: <AntButton /> },
    { name: 'Notification 通知提醒框', path: 'Notification', component: <AntButton /> },
    { name: 'Progress 进度条', path: 'Progress', component: <AntButton /> },
    { name: 'Popconfirm 气泡确认框', path: 'Popconfirm', component: <AntButton /> },
    { name: 'Result 结果', path: 'Result', component: <AntButton /> },
    { name: 'Spin 加载中', path: 'Spin', component: <AntButton /> },
    { name: 'Skeleton 骨架屏', path: 'Skeleton', component: <AntButton /> },
    { name: 'Anchor 锚点', path: 'Anchor', component: <AntButton /> },
    { name: 'BackTop 回到顶部', path: 'BackTop', component: <AntButton /> },
    { name: 'ConfigProvider 全局化配置', path: 'ConfigProvider', component: <AntButton /> },
    { name: 'Divider 分割线', path: 'Divider', component: <AntButton /> },
    { name: 'LocaleProvider 国际化（废弃）', path: 'LocaleProvider', component: <AntButton /> },
    { name: 'Mention 提及（废弃）', path: 'Mention', component: <AntButton /> },
];
const routeItems = data.map(a=> <Route path={"/ant/" + a.path.toLowerCase()} key={a.name}>{a.component}</Route>);
export default class Ant extends React.Component{
    render(){
        return (
            <div className="elfx">
                <div className="ellt">
                    <List header={<div>组件列表</div>} footer={<div>没有更多了</div>} bordered dataSource={data} 
                        renderItem={item => (
                            <List.Item><Link to={"/ant/" + item.path.toLowerCase()}>{item.name}</Link></List.Item>
                        )}
                    />
                </div>
                <div className="elrt">
                    <div className="el">
                        <Switch>
                            {routeItems}
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}