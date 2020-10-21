define({ "api": [
  {
    "type": "get",
    "url": "/one/article_detail",
    "title": "",
    "description": "<p>获取【一个】文章详情</p>",
    "group": "【一个】",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>文章ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/one.ts",
    "groupTitle": "【一个】",
    "name": "GetOneArticle_detail"
  },
  {
    "type": "get",
    "url": "/one/home",
    "title": "",
    "description": "<p>获取【一个】首页推荐</p>",
    "group": "【一个】",
    "version": "0.0.0",
    "filename": "routes/one.ts",
    "groupTitle": "【一个】",
    "name": "GetOneHome"
  },
  {
    "type": "get",
    "url": "/garbage/resou",
    "title": "",
    "description": "<p>垃圾分类热搜词</p>",
    "group": "【垃圾分类】",
    "version": "0.0.0",
    "filename": "routes/garbage.ts",
    "groupTitle": "【垃圾分类】",
    "name": "GetGarbageResou"
  },
  {
    "type": "get",
    "url": "/garbage/search",
    "title": "",
    "description": "<p>垃圾分类搜索</p>",
    "group": "【垃圾分类】",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "key",
            "description": "<p>关键字</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/garbage.ts",
    "groupTitle": "【垃圾分类】",
    "name": "GetGarbageSearch"
  },
  {
    "type": "get",
    "url": "/yilin/article_detail",
    "title": "",
    "description": "<p>获取意林杂志文章详情</p>",
    "group": "【意林】",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>文章ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/yilin.ts",
    "groupTitle": "【意林】",
    "name": "GetYilinArticle_detail"
  },
  {
    "type": "get",
    "url": "/yilin/article_list",
    "title": "",
    "description": "<p>获取意林杂志文章目录</p>",
    "group": "【意林】",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>杂志ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/yilin.ts",
    "groupTitle": "【意林】",
    "name": "GetYilinArticle_list"
  },
  {
    "type": "get",
    "url": "/yilin/home",
    "title": "",
    "description": "<p>获取意林杂志列表</p>",
    "group": "【意林】",
    "version": "0.0.0",
    "filename": "routes/yilin.ts",
    "groupTitle": "【意林】",
    "name": "GetYilinHome"
  },
  {
    "type": "get",
    "url": "/migu/search/all",
    "title": "",
    "description": "<p>搜索全部</p>",
    "group": "咪咕音乐|_搜索",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "text",
            "description": "<p>关键字</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>搜索类型 song（歌曲名）| album（专辑名）| singer（歌手名）| playlist（歌单名）</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "page",
            "description": "<p>页码</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/migu/search.ts",
    "groupTitle": "咪咕音乐|_搜索",
    "name": "GetMiguSearchAll"
  },
  {
    "type": "get",
    "url": "/migu/search/song_url",
    "title": "",
    "description": "<p>获取歌曲播放链接</p>",
    "group": "咪咕音乐|_搜索",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>歌曲ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>歌曲名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "singer",
            "description": "<p>歌手名  (多个歌手名用/连接)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/migu/search.ts",
    "groupTitle": "咪咕音乐|_搜索",
    "name": "GetMiguSearchSong_url"
  },
  {
    "type": "get",
    "url": "/migu/top/top_detail",
    "title": "",
    "description": "<p>排行榜详情</p>",
    "group": "咪咕音乐|_榜单",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>榜单类型</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/migu/top.ts",
    "groupTitle": "咪咕音乐|_榜单",
    "name": "GetMiguTopTop_detail"
  },
  {
    "type": "get",
    "url": "/migu/top/top_types",
    "title": "",
    "description": "<p>榜单种类列表</p>",
    "group": "咪咕音乐|_榜单",
    "version": "0.0.0",
    "filename": "routes/migu/top.ts",
    "groupTitle": "咪咕音乐|_榜单",
    "name": "GetMiguTopTop_types"
  },
  {
    "type": "get",
    "url": "/migu/playlist/detail",
    "title": "",
    "description": "<p>歌单详情</p>",
    "group": "咪咕音乐|_歌单",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>歌单ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/migu/playlist.ts",
    "groupTitle": "咪咕音乐|_歌单",
    "name": "GetMiguPlaylistDetail"
  },
  {
    "type": "get",
    "url": "/migu/playlist/list",
    "title": "",
    "description": "<p>歌单列表</p>",
    "group": "咪咕音乐|_歌单",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sort",
            "description": "<p>歌单列表类型 latest最新|recommend推荐 （根据歌单标签搜索不填该参数）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tagId",
            "description": "<p>根据歌单标签搜索</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "page",
            "description": "<p>页码</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/migu/playlist.ts",
    "groupTitle": "咪咕音乐|_歌单",
    "name": "GetMiguPlaylistList"
  },
  {
    "type": "get",
    "url": "/migu/singer/all_song",
    "title": "",
    "description": "<p>获取歌手全部歌曲</p>",
    "group": "咪咕音乐|_歌手",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>歌手ID</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "page",
            "description": "<p>页码</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/migu/singer.ts",
    "groupTitle": "咪咕音乐|_歌手",
    "name": "GetMiguSingerAll_song"
  },
  {
    "type": "get",
    "url": "/migu/singer/singer_detail",
    "title": "",
    "description": "<p>歌手详情信息</p>",
    "group": "咪咕音乐|_歌手",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>歌手ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/migu/singer.ts",
    "groupTitle": "咪咕音乐|_歌手",
    "name": "GetMiguSingerSinger_detail"
  },
  {
    "type": "get",
    "url": "/migu/home/banner",
    "title": "",
    "description": "<p>首页专辑banner轮播图</p>",
    "group": "咪咕音乐|_首页",
    "version": "0.0.0",
    "filename": "routes/migu/home.ts",
    "groupTitle": "咪咕音乐|_首页",
    "name": "GetMiguHomeBanner"
  },
  {
    "type": "get",
    "url": "/migu/album/album_detail",
    "title": "",
    "description": "<p>专辑详情</p>",
    "group": "咪咕音乐|专辑",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>专辑ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/migu/album.ts",
    "groupTitle": "咪咕音乐|专辑",
    "name": "GetMiguAlbumAlbum_detail"
  },
  {
    "type": "get",
    "url": "/migu/album/album_list",
    "title": "",
    "description": "<p>专辑列表</p>",
    "group": "咪咕音乐|专辑",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "page",
            "description": "<p>页码</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/migu/album.ts",
    "groupTitle": "咪咕音乐|专辑",
    "name": "GetMiguAlbumAlbum_list"
  }
] });