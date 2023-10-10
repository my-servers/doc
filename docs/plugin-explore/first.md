---
sidebar_position: 1
---

# 第一个插件

## 创建一个目录
- 在服务端的插件目录（`AppDir`配置下）下创建一个目录，作为插件代码的目录

## 三个重要的文件
```
-- config.yaml
-- script.lua
-- README.md
```
### config.yaml
插件的配置文件

#### 基础配置
```yaml
// highlight-start 
name: 系统监控
enable: true
priority: 100
padding: 3
// highlight-end

extend:
  CpuWin:
    val: "100"
    desc: cpu走势图窗口大小
    priority: 0
  Interface:
    val: enp7s0f1
    desc: 网络接口
    priority: 90
  Disk:
    val: /
    desc: nas挂载点
    priority: 100

```

- `name` 插件名字
- `enable` 是否启用
- `priority` 展示优先级
- `padding` UI组件之间的紧凑度

#### 扩展配置
#### 基础配置
```yaml

name: 系统监控
enable: true
priority: 100
padding: 3
// highlight-start 
extend:
  CpuWin:
    val: "100"
    desc: cpu走势图窗口大小
    priority: 0
  Interface:
    val: enp7s0f1
    desc: 网络接口
    priority: 90
  Disk:
    val: /
    desc: nas挂载点
    priority: 100
// highlight-end
```

- `CpuWin` 自定义名字，在插件代码中可以通过`ctx.config.CpuWin` 引用
  - `val` 配置默认值
  - `desc` 配置名，展示在app里面
  - `priority` 配置展示优先级

### script.lua
插件代码

```lua
function register()
    -- 初始化ui
    return {}
end

---@param ctx Ctx
---@return AppUIData
function update(ctx)
    return NewApp()
            .AddUi(1, NewTextUi().SetText(
                NewText("leading").AddString(1, NewString("Hello World"))
              )
            )
            .Data()
end

```
#### register 函数
服务启动插件初始化的时候被调用，可以做一些插件的初始化工作。

#### update 函数
最重要的一个函数，每次客户端轮询的时候，会调用这个函数，需要返回要展示的UI。
- 上面的例子就是直接返回一个文本UI


### README.md
放脚本的说明文档

## 运行
重启MyServers服务端，就会自动加载新的插件了，在app上就能看到对应的插件展示了，当然现在还没有任何功能