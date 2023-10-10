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

|函数名|功能|参数|返回值|
|--|--|--|--|
|`SetDetail(detail)`|设置详情，点击会展示|`detail` `字符串` markdown格式内容|`UI`|
|`SetHeight(height)`|设置高度|`height` `number` 高度|`UI`|
|`AddAction(action)`|添加菜单|`action` [Action](tool#action-动作) 动作|`UI`|


## 基础的组件

-----------


### String 字符串

|函数名|功能|参数|返回值|
|--|--|--|--|
|`NewString(str)`|创建字符串|`str` `字符串` 字符串内容|`String`|
|`SetContent(content)`|设置内容|`content` `字符串` 字符串内容|`String`|
|`SetColor(color)`|设置颜色|`color` `字符串` 颜色|`String`|
|`SetBackendColor(color)`|设置背景颜色，设置后会变成标签样式|`color` `字符串` 颜色|`String`|
|`SetBackendColor(color)`|设置背景颜色，设置后会变成标签样式|`color` `字符串` 颜色|`String`|
|`SetOpacity(opacity)`|设置背景透明度|`opacity` `number` 透明度0-1|`String`|
|`SetFontSize(size)`|设置字体大小|`size` `number` 字体大小|`String`|


-------------

### Text 多段文本
文本有多个位置可以布局，比如下面，每一个位置都可以放一个`String`

|0_0|0_1|0_2|
|--|--|--|
|1_0|1_1|1_2|


|函数名|功能|参数|返回值|
|--|--|--|--|
|`NewText(alignment)`|创建文本|`alignment` `字符串` 对齐方式 leading 左，center 中，trailing 右|`Text`|
|`SetString(row, col, str)`|设置某个位置的字符串|`row` `number` 行 <br/> `col` `number` 列 <br/> `str` `String` 字符串（非原生字符串）|`Text`|
|`AddString(row, str)`|在某一行添加字符串|`row` `number` 行 <br/>`str` `String` 字符串（非原生字符串）|`Text`|
|`SetAlignment(a)`|设置对齐方式|`a` `字符串` 对齐方式 leading 左，center 中，trailing 右）|`Text`|

-----------

### Point 点
折线图上点的定义


|函数名|功能|参数|返回值|
|--|--|--|--|
|`NewPoint(val, x)`|创建一个点|`val` `number` 数值 <br/> `x` `字符串` 横坐标|`Point`|
|`SetVal(val)`|设置数值|`val` `number` 数值 |`Point`|
|`SetX(x)`|设置横坐标|`x` `字符串` 横坐标|`Point`|



-----------


### Input 用户输入

|函数名|功能|参数|返回值|
|--|--|--|--|
|`NewInput(desc, priority)`|创建用户的输入|`desc` `字符串` 描述 <br/> `priority` `number` 优先级|`Input`|
|`SetVal(val)`|设置默认值|`val` `字符串` 值|`Input`|


-----------


### Action 动作
UI的菜单点击事件

|函数名|功能|参数|返回值|
|--|--|--|--|
|`NewAction(func, arg, name)`|创建一个点击动作|`func` `字符串` 回调服务端的函数名 <br/> `arg` `table` 需要透传给服务端的参数 <br/> `name` `字符串` 动作展示的名字|`Action`|
|`SetName(name)`|设置名字|`name` `字符串` 显示的名字|`Action`|
|`SetCheck(check)`|设置二次确认|`check` `bool` 是否需要二次确认|`Action`|
|`SetIcon(icon)`|设置图标|`icon` `字符串` 图标，IOS支持的所有原生图标|`Action`|
|`SetFunc(func)`|设置回调函数名|`func` `字符串` 函数名|`Action`|
|`SetArg(arg)`|设置回调函数时需要透传给服务端的参数|`arg` `table` 参数|`Action`|
|`AddInput(key, input)`|添加用户输入|`key` `字符串` 用户输入的参数名  <br/> `input` [Input](tool#input-用户输入) 用户输入|`Action`|




### ProcessData 进度数据


|函数名|功能|参数|返回值|
|--|--|--|--|
|`NewProcessData(cur, total)`|创建一个进度数据|`cur` `number` 当前数值 <br/>`total` `number` 总数|`ProcessData`|



### IconButton 点击图标


|函数名|功能|参数|返回值|
|--|--|--|--|
|`NewIconButton()`|创建一个可点击的带icon的button||`IconButton`|
|`SetIcon(icon)`|设置icon名字|`icon` `字符串` IOS系统自带的所有icon|`IconButton`|
|`SetColor(color)`|设置icon的颜色|`color` `字符串` 如：#FFF|`IconButton`|
|`SetSize(size)`|设置icon的大小|`size` `number` 字体大小|`IconButton`|
|`SetDesc(desc)`|设置展示的文本|`desc` [Text](tool#text-多段文本) 文本|`IconButton`|
|`SetAction(action)`|设置点击的动作|`action` [Action](tool#action-动作) 动作|`IconButton`|
|`SetId(id)`|设置id，唯一就行|`id` `字符串` id|`IconButton`|




