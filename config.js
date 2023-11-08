export default {
    Nav:{
        Links:[
            {name:"快速开始", url:"./doc"},
            // {name:"隐私政策", url:"./private_policy"},
            {name:"Github", url:"https://github.com/my-servers"},
        ]
    },
    App:{
        ScreenShotFirst:"./img/service.webp",
        ScreenShotSecond:"./img/app.webp",
        Descript:"一个App监控管理您所有的服务器和应用。",
        Name:"MyServers",
        Logo:"./img/newMyServer1024.png",
        Url:"https://myservers.codeloverme.cn",
        DownloadPic:"./img/myserverDownload.png"
    },
    Plugin:{
        AllPlugins:[
            // 第一排
            [
                {
                    url:"./docker.svg",
                    color:"bg-gray-100",
                    name:"docker",
                },
                {
                    url:"./qbittorrent.png",
                    color:"bg-pink-300",
                    name:"qbittorrent",
                },
                {
                    url:"./system.png",
                    color:"bg-gray-100",
                    name:"系统信息",
                }
            ],
            // 第二排
            [
                {
                    url:"./aria2.png",
                    color:"bg-gray-100",
                    name:"Aria2",
                },
                {
                    url:"./proxmox.svg",
                    color:"bg-gray-100",
                    name:"proxmox",
                }
            ],
            // 第三排
            [
                {
                    url:"./wordpress.svg",
                    color:"bg-gray-100",
                    name:"wordpress",
                },
                {
                    url:"./transmission.png",
                    color:"bg-gray-100",
                    name:"transmission",
                },
                {
                    url:"./frp.png",
                    color:"bg-gray-100",
                    name:"frp",
                }
            ]
        ]
    },
    Feature:{
        AllFeatures:[
            {
                title:"安全",
                desc:"为了确保客户端与服务端之间的交互安全可靠，我们采用对称加密传输的方式，同时对密钥进行离线保存在本地，以防止第三方获取数据。",
                url:"./security.svg",
            },
            {
                title:"开源",
                desc:"服务端插件代码完全开源。",
                url:"./code.svg",
            },
            {
                title:"插件市场",
                desc:"所有的服务管理基于插件化实现，可扩展性高，开发门槛低，简单几行代码就能写一个管理的界面。",
                url:"./launch.svg",
            },
            {
                title:"可扩展",
                desc:"可自己开发各种插件，实现对任意服务的管理，欢迎开源贡献各种插件。",
                url:"./magic.svg",
            },
            {
                title:"丰富的UI组件",
                desc:"插件开发支持各种UI组件，可以支持文本，统计视图，条形进度，圆形进度，markdown等，持续支持更多组件。",
                url:"./analytics.svg",
            },
            {
                title:"多服务器支持",
                desc:"可以添加多个服务器，自由切换管理。",
                url:"./storage.svg",
            },
        ]
    },
    Footer:{
        Blocks:[
            {
                name:"技术",
                Links:[
                    {
                        name:"Astro",
                        url:"https://astro.build",
                    },
                    {
                        name:"Tailblocks",
                        url:"https://tailblocks.cc",
                    },
                    {
                        name:"Solidjs",
                        url:"https://www.solidjs.com",
                    },
                    
                ]
            },
            {
                name:"联系我们",
                Links:[
                    {
                        name:"Email",
                        url:"mailto:codeloverql@gmail.com",
                    },
                    {
                        name:"小红书",
                        url:"https://www.xiaohongshu.com/user/profile/5e9148f40000000001007e68?xhsshare=CopyLink&appuid=5e9148f40000000001007e68&apptime=1699199831"
                    },
                    {
                        name:"知乎",
                        url:"https://www.zhihu.com/people/333c3da83ffe591d4116f9b2bd17b24a"
                    }
                ]
            }
        ]
    }
}