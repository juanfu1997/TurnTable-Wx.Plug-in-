Component({
  data: {
    img:'https://www.korjo.cn/xcx/luckyImg/',
    awardsList: {},
    animationData: {},
    btnDisabled: '',
    user_style:{bg:'bg2',cover:'bg_cover',pointer:'pointer2',color1:'#c8f8fb',color2:'#e7c5e0'},
    res:'thumbnail.png',
    demo:'demo',
    awards:[
        // {option:"1",name:'12',detail:"1"},
        // {option:"2",name:'',detail:"2"},
        // {option:"3",name:'',detail:"3"},
        // {option:"4",name:'',detail:"4"},
        // {option:"3",name:'',detail:"3"},
        // {option:"4",name:'',detail:"4"},
      ],
    style:[
           {bg:'bg',cover:'bg_cover',pointer:'pointer',color1:'#ffd517',color2:'#79b52f'},
           {bg:'bg2',cover:'bg_cover',pointer:'pointer2',color1:'#c8f8fb',color2:'#e7c5e0'},
           {bg:'bg3',cover:'bg_cover2',pointer:'pointer3',color1:'#fcfa31',color2:'#faca00'}
           ],
    validtyTime:'2018.03.23-2018.03.30',
    adminInfo:{name:'',passWord:''},
    userList:[
              {id:1},
              {id:1},
              {id:1},
              {id:1},
    ],
    scrollId:'index0',
    IsScrollCss:true,
    IsShowPrize:false,
    app:{awardsConfig:{chance:'',awards:''},},

  },
  methods:{
  showMyPrizes(){
    var that = this
    var IsShowPrize = that.data.IsShowPrize
    IsShowPrize = !IsShowPrize
    this.setData({
      IsShowPrize,
    })
  },
  saveAdminInfo(e){
    var that = this
    var value = e.detail.value
    var type = e.currentTarget.dataset.type
    var adminInfo = that.data.adminInfo

    if(type == 'name'){
      adminInfo.name = type
    }
    if(type == 'passWord'){
      adminInfo.passWord = type
    }
    that.setData({
      adminInfo,
    })
    console.log(e)
  },
  postAdminInfo(){
    //
  },
  adminLogin(){
    var that = this
    var demo = that.data.demo
    demo = 'demo_block'
    that.setData({
      demo,
    })

  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '去那小转盘',
      path: '/pages/index/index',
      success: function(res) {
        // 转发成功
      },
      fail: function(res) {
        // 转发失败
      }
    }
  },
  failCanvas(){
    var that = this;
    var fail=setInterval(
        function(){
          wx.canvasToTempFilePath({    
        x: 0,
        y: 0,
        width: 540,         //单位：px
        height: 540,
        destWidth: 540,
        destHeight: 540,
        canvasId: 'lotteryCanvas',
        
        success: function(res) {
          //console.log('okoko',res.tempFilePath)
          clearInterval(fail);
          that.setData({
            res:res.tempFilePath
          })
        } ,
        fail:function(error){
          //console.log(error)
        }
      })
        },500)
  },  
  demo(){
    this.setData({
      demo:'demo'
    })
  },
  try_advanced(){
    wx.reLaunch({
      url: '../advanced/advanced',
    })
  },
  backindex(){
    wx.reLaunch({
      url: '../choice/choice'
    })
  },
  setindex(){
    wx.setStorageSync('user_index','/pages/lucky/lucky')
    // var user_index = wx.getStorageSync('user_index')
    wx.showToast({
  title: '设置首页成功',
  icon: 'success',
  duration: 2000
})
  },
  gotoList: function() {
    wx.switchTab({
      url: '../list/list'
    })
  },
  getLottery: function () {
    var that = this
    var app = that.data.app
    var awardsConfig = app.awardsConfig;
    if(awardsConfig.chance){
    var that = this;
    var num = that.data.num;
    var awardIndex = Math.random() * num >>> 0;//这里随机数字上限随着用户选择而改变
    var awards = that.data.awards;
    that.setData({
      prize:awards[awardIndex].detail
    })
    console.log(that.data.prize)
    // 获取奖品配置
    awardsConfig.chance = false;
      // 初始化 rotate
    var animationInit = wx.createAnimation({
      duration: 1
    })
    this.animationInit = animationInit;
    animationInit.rotate(0).step()
    this.setData({
      animationData: animationInit.export(),
      btnDisabled: 'disabled'
    })

    // 旋转抽奖
    setTimeout(function() {
      var animationRun = wx.createAnimation({
        duration: 4000,
        timingFunction: 'ease'
      })
      that.animationRun = animationRun
      // animationRun.translate(-50%,-50%);
      animationRun.rotate(360 * 8 - awardIndex * (360 / num)-45).step()
      that.setData({
        animationData: animationRun.export()
      })
    }, 100)

    // 中奖提示
    setTimeout(function() {
      that.setData({
        demo:'demo_block'

      })
      awardsConfig.chance = true;

    }, 4100);
    
    }
    


  },
  refresh(){
    var that = this;
    var app = that.data.app;
    app.awardsConfig = {
      chance: true,
      awards: that.data.awards
      // [
      //   {'index': 0, 'name': '一定会去'},
      //   {'index': 1, 'name': '可能会去'},
      //   {'index': 2, 'name': '绝对不去'},
      //   {'index': 5, 'name': '可能不去'}
      // ]

    }
    //console.log('awards',that.data.awards)

    // wx.setStorageSync('awardsConfig', JSON.stringify(awardsConfig))


    // 绘制转盘
    var awardsConfig = app.awardsConfig.awards,
      len = awardsConfig.length,
      rotateDeg = 360 / len / 2 +45,
      html = [],
      turnNum = 1 / len  // 文字旋转 turn 值

      var color1 = that.data.user_style.color1;
      var color2 = that.data.user_style.color2;
    that.setData({
      btnDisabled: app.awardsConfig.chance ? '' : 'disabled'
    })
    var ctx = wx.createCanvasContext('lotteryCanvas',this)
    for (var i = 0; i < len; i++) {
      // 保存当前状态
      ctx.save();
      // 开始一条新路径
      ctx.beginPath();
      // 位移到圆心，下面需要围绕圆心旋转
      ctx.translate(130, 130);   //单位:  px
      // 从(0, 0)坐标开始定义一条新的子路径
      ctx.moveTo(0, 0);
      // 旋转弧度,需将角度转换为弧度,使用 degrees * Math.PI/180 公式进行计算。
      ctx.rotate((360 / len * i - rotateDeg) * Math.PI / 180);
      // 绘制圆弧
      ctx.arc(0, 0, 130, 0, 2 * Math.PI / len, false);

      // 颜色间隔
      if (i % 2 == 0) {
        ctx.setFillStyle(color1);
      } else {
        ctx.setFillStyle(color2);
      }

      // 填充扇形
      ctx.fill();
      // 绘制边框
      ctx.setLineWidth(0.1);
      ctx.setStrokeStyle('#ffffff');
      ctx.stroke();

      // 恢复前一个状态
      ctx.restore();

      // 奖项列表
      html.push({ turn: i * turnNum + 0.125 + 'turn', award: awardsConfig[i].answer });
    }
    that.setData({
      awardsList: html
    });

    // wx.drawCanvas({
    //   canvasId: 'lotteryCanvas',
    //   actions: ctx.getActions()
    // })
    ctx.draw(true,()=>{
      console.log('huizhi')
      wx.canvasToTempFilePath({
      x: 0,
      y: 0,
      width: 180,
      height: 180,
      destWidth: 540,
      destHeight: 540,
      canvasId: 'lotteryCanvas',

      success: function (res) {
        that.setData({
          res: res.tempFilePath
        })
        //     wx.saveImageToPhotosAlbum({
        //       filePath:res.tempFilePath,
        //     success(res) {
        //     },
        //     fail(res){
        //       console.log(error)
        //     }
        // })
        console.log('okoko', res.tempFilePath)
      },
      fail: function (error) {
        console.log(error)

      }
    },this)
    })
       //.log('awardsConfig',that.data.awardsList)  
  },
  autoScroll(length){
    var that = this
    var scroll = 0
    var scrollId = that.data.scrollId
    var scrollHeight = 3
    var IsScrollCss = that.data.IsScrollCss
    // var scrollHeight = that.data.scrollHeight
    clearInterval(that.tt)
    that.tt = setInterval(function(){
      var IsShowPrize = that.data.IsShowPrize
    //   if(!IsShowPrize){
    //   clearInterval(that.tt)
    // }
        if(scroll <= scrollHeight){
            scrollId = scroll;
            IsScrollCss = true
            if(scroll == scrollHeight){
              IsScrollCss = false
            }
        }else{
            scrollId = scroll = 0
        }
        scroll += 2;
        that.setData({
          scrollId:'index' + scrollId,
          IsScrollCss,
        })
    },1000);
  },
},
  attached:function(options){
      var that = this;
    //   var num = options.value;
    // if(!num){
    //   num = wx.getStorageSync('num')
    // }
    // num = 4
    // that.setData({
    //   num:num
    // })
    that.autoScroll()
    wx.request({
        url: 'https://www.korjo.cn/KorjoApi/GetTurnTableInfo?answer_num='+4, //仅为示例，并非真实的接口地址
        data: {
          // answer_num:6,
        },
        header: {
            'content-type': 'application/x-www-form-urlencoded' // 默认值
        },
        method:"POST",
        success: function(res) {
          //console.log(res.data)
          wx.setStorageSync('num',num);
          var awards = that.data.awards;
          var answer = res.data.answerList;
           awards = answer;

          
          
          
          that.setData({
            awards:awards
          })
          console.log('awards1',awards)
          that.refresh();
          // that.
        },fail(w){
          console.log(w)
        }
      })
    


    
    // getAwardsConfig /image/thumbnail_'+id'.png

      
    
  },
  onReady: function () {
    // this.refresh();
    
    
  },
  onHide(){
    wx.hideLoading();
  }

})
