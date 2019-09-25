#  基于Vue+Github API开发带评论功能的博客,简单配置即可使用。
花了两周的业余时间使用github+vue搭了一个自己的博客，通过issues的评论功能实现了博客的登录和评论，并把它开源出来。
先放一个演示地址 [【www.kajie88.com】](https://www.kajie88.com) 
博客源码地址：[https://github.com/kajiecy/kajiecy.github.io](https://github.com/kajiecy/kajiecy.github.io)



配置很简单仅需要简单的修改store中的预留好的字段即可。接下来我会为大家介绍如何获取信息。![image.png](https://upload-images.jianshu.io/upload_images/12326681-d6a73a9ac94f7d47.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

觉得还可以的话您小小的star是我更新的动力！！！
## 配置
### 需要的环境
1. 需要在github中创建个github pages库（库名必须为  你的用户名.github.io）
2. 创建OAuth Apps（评论功能需要我们创建Oauth apps让用户进行登录）
![image.png](https://upload-images.jianshu.io/upload_images/12326681-f9a4e7a8d2f936c0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
需要主页的是callback url可以直接填入自己的库地址，如果你已经拥有域名填入自己的域名就可以了，这里的url实际上用不到。我们是通过登录时get请求中的传入redirectUri来让控制的
![image.png](https://upload-images.jianshu.io/upload_images/12326681-da264fced35ea7a6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
注册成功后你就能得到 ClientID 和 Secret了直接放入配置文件。
![image.png](https://upload-images.jianshu.io/upload_images/12326681-e0bb2ec543a172f5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
### 其他配置字段介绍
由于通过github pages进行访问
第一、服务器资源有限又在国外导致速度较慢。
第二、我们薅羊毛只传代码不传图片。
所有图片建议全部放到云服务器中，笔者用的七牛，也可以选择其他的。



| 参数名称| 参数描述|
| ------------- |:-------------|
|qiniuDomainName |  云储存服务器的BaseURL  |
| defaultImg      | 博客的默认地址（当一篇博客标签、分类都没有配置封面图片时使用默认图片） |
| aboutIssuesId      | 关于页面使用的 issuse的numer(关于页面也使用iusses展现将关于页面的issuseId填入即可)|
| clientId | 上一步中注册获得  |
| clientSecret | 同上（请不要将clientSecret直接上传到github中会被检测到要求你重新生成-_-） |
| owner | 用户名 |
| repo | 库名 |

绑定域名：
如果你想为自己的blog绑定域名 修改CNAME文件为自己的域名，否则请删除。
![image.png](https://upload-images.jianshu.io/upload_images/12326681-046d5cd6fa6b69d3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
最后在修改一下title和ico就可以了
![image.png](https://upload-images.jianshu.io/upload_images/12326681-8c96b5e1abd139f7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
执行命令 将生成好的文件连同源码提交到先前创建好的库中就可以了。
```
yarn insatll
vue-cli-service build
```
## 博客发布规则
### Labels 
>除了标记文章的标签外 我还设定了一个 :img 标签用于定制blog的封面标题。在博客中 :img 一律隐藏不向读者展示,当一篇文章有多个:img标签时封面图片取最后一个。（:img 后面为的字符将和qiniuDomainName进行拼接后展示）

![image.png](https://upload-images.jianshu.io/upload_images/12326681-ba9537cc006205ef.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
### Milestones
> 被用来进行分类展示 ，Description字段为类博客的封面图片,使用时请只少先创建一个Milestones避免未知问题。。。（labels在API中不返回Description字段坑啊!!）

![image.png](https://upload-images.jianshu.io/upload_images/12326681-07283c4114211670.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
### Issues
没什么可注意的了开心的写blog吧！！！
