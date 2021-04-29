

安装依赖

```bash
$ yarn
```

启动项目

```bash
$ yarn start
```

项目打包

```bash
$ yarn build
```

项目页面源代码

```
src/pages
    case -> 案例
    ecology -> 生态
    home -> 首页
    news -> 新闻
        data.tsx -> 数据(每个页面都有data.tsx，数据)
        i18n.ts -> 多语言，每个页面都有多语言
    tool -> 工具
    video  -> 视频
```
上面，所有页面都和news页面一样，都有 data.tsx和i18n.ts，这两个页面很好理解



```
public
    case -> 案例图片
    ecology -> 生态图片
    home -> 首页图片
    news -> 新闻图片
    tool -> 工具图片
    video  -> 视频图片
```

如像替换图片，可以去相应的页面图片文件夹，给里面添加图片，或者替换图片，然后去相应的页面代码文件夹下面的 data.tsx 替换代码。

i18n.ts ，里面就是对语言很简单，很好理解，没有代码相关的，
data.tsx，里面全是数据，也没有代码相关的，
