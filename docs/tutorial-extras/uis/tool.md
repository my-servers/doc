---
sidebar_position: 1
---

# tool.lua
所有支持的ui都封装在这个文件中，可以直接调用

## 支持的ui类型
目前支持以下几种UI

```proto
  UI_TYPE_TEXT              = 0; // 文本
  UI_SIGNAL_PROCESS_CIRCLE  = 1; // 单进度，圆
  UI_SIGNAL_PROCESS_LINE    = 2; // 单进度，线
  UI_LINE_CHART             = 3; // 折线图
  UI_ICON_BUTTON            = 4; // 点击图标
  UI_MARKDOWN               = 5; // markdown
```


## UI的共同能力
### 详情 detail
`SetDetail`
如果有设置ui展示的详情信息，那么点击ui的时候会弹出ui的具体信息，格式是`Markdown`

### 高度 height
`SetHeight`
可以自定义UI的高度

### 动作 actions 
`AddAction`
添加动作后，长按UI，会弹出对应的功能菜单，支持多个菜单列表

## 基础的组件

-----------


### String 字符串

#### `NewString`
- 创建一个字符串
#### `SetContent`
- 设置字符串内容

#### `SetColor`
- 设置字符串颜色

#### `SetBackendColor`
- 设置字符串背景，设置后会变成标签样式


#### `SetOpacity`
- 设置字符串背景透明度



#### `SetFontSize`
- 设置字符串字体大小

-------------

### Text 多段文本
文本有多个位置可以布局，比如下面，每一个位置都可以放一个`String`

|0_0|0_1|0_2|
|--|--|--|
|1_0|1_1|1_2|

#### `SetAlignment`
- 设置对齐方式 `leading左，center中，trailing右`


#### `AddString`
- 添加字符串，只需要指定在**某一行**添加字符串

#### `SetString`
- 设置字符串，需要指定在**某一行某一列**添加字符串

-----------

### Point 点
折线图上点的定义

#### `NewPoint` 
- 创建一个点

#### `SetVal` 
- 设置该点的值

#### `SetX` 
- 设置该点的横坐标

-----------


### Input 用户输入

#### `NewInput` 
- 创建用户的输入，包含描述盒展示优先级，以及默认值

#### `SetVal`
- 设置默认值


-----------


### Action 动作
UI的菜单点击事件

#### `NewAction`
- 创建一个动作，包含回调服务端的函数名，参数，以及展示的名字

#### `SetName`
- 设置菜单名



#### `SetFunc`
- 设置回调服务端的lua函数名


#### `SetArg`
- 设置回调服务端的时候，需要带上的参数

#### `AddInput`
- 如果需要带上用户的输入数据，那么需要添加输入框


#### `SetCheck`
- 是否需要二次确认


#### `SetIcon`
- 展示的icon



### ProcessData 进度数据

### NewIconButton 点击图标

