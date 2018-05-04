// const $$ = require('../../api/request')
const {$,$$} = require('../../index.js')
Component({
  properties:{
    awards:{
      type:Array,
    },
  },
  data: {
    img:'https://www.korjo.cn/xcx/luckyImg/',
    tips: 'none',
    open: 2,
    awardsList: {},
    res: 'https://www.korjo.cn/xcx/luckyImg/thumbnail.png',
    length: '4',
    id: '0',
    i: 'i',
    pro_id: '3',
    yz: true,
    choice_type: [
      { choice: 'choiced' },
      { choice: 'choice' },
      { choice: 'choice' },
    ],
    custom_type: [
      { custom: 'custom_choiced' },
      { custom: 'custom_choice' },
      { custom: 'custom_choice' },
      { custom: 'custom_choice' },
    ],
    animationData: {},
    btnDisabled: '',
    // awards: [
    //   { name: '', ratio:'0.2',bigprize:1,activeid:'89',image:'',rotate:'',leve:'',detail: "1"},
    //   { name: '', ratio:'0.6',bigprize:0,activeid:'89',image:'',rotate:'',leve:'',detail: "1"},
    //   { name: '', ratio:'0.2',bigprize:0,activeid:'89',image:'',rotate:'',leve:'',detail: "1"},
    //   { name: '', ratio:'0.2',bigprize:0,activeid:'89',image:'',rotate:'',leve:'',detail: "1"},
    // ],
    awards_list: [{
      award: [
        { answer: '鱼香肉丝' },
        { answer: '红烧排骨' },
        { answer: '宫保鸡丁' },
        { answer: '咸鱼突刺' },
      ]
    }, {
      award: [
        { answer: '小清新' },
        { answer: '运动装' },
        { answer: '连衣裙' },
        { answer: '薄羽绒' },
      ]
    }, {
      award: [
        { answer: '我' },
        { answer: '弟弟' },
        { answer: '姐姐' },
        { answer: '妹妹' },
      ]
    }, {
      award: [
        { answer: '' },
        { answer: '' },
        { answer: '' },
        { answer: '' },
      ]
    }],
    style: [
      { bg: 'bg', cover: 'bg_cover', pointer: 'pointer', color1: '#ffd517', color2: '#79b52f' },
      { bg: 'bg2', cover: 'bg_cover', pointer: 'pointer2', color1: '#c8f8fb', color2: '#e7c5e0' },
      { bg: 'bg3', cover: 'bg_cover2', pointer: 'pointer3', color1: '#fcfa31', color2: '#faca00' }
    ],
    thumbnail: [
      { src: 'https://www.korjo.cn/xcx/luckyImg/style.png' },
      { src: 'https://www.korjo.cn/xcx/luckyImg/style2.png' },
      { src: 'https://www.korjo.cn/xcx/luckyImg/style3.png' }
    ],
    custom: [
      { problem: '今天吃什么？' },
      { problem: '今天穿什么？' },
      { problem: '谁去拿快递？' },
    ],
    activeRule:[
      {detail:''}
    ],
    validtyTime: { date: '2099-12-1', time: '23：59' },
    nowDate: { date: '', time: '' },
    startTime: { date: '', time: '' },
    app:{awardsConfig:{chance:'',awards:''},},


  },
  //自定义时间
  methods:{
    addActiveRule(e){
      var index = e.currentTarget.dataset.index
      var activeRule = this.data.activeRule
      activeRule.push({detail:''})
      this.setData({
        activeRule
      })

    },
  choiceValidtyTime(e) {
    console.log(e)
    var that = this
    var type = e.target.dataset.type
    var value = e.detail.value
    var validtyTime = that.data.validtyTime
    if (type == 1) {
      validtyTime.date = value
    }
    if (type == 2) {
      validtyTime.time = value
    }
    console.log(type)
    that.setData({
      validtyTime,
    })
  },
  tips() {
    var that = this;
    var tips = that.data.tips;
    if (tips == 'none') {
      tips = 'black';
    } else {
      tips = 'none';
    }
    that.setData({
      tips: tips
    })
  },
  addTxt(e) {
    var that = this;
    var value = e.detail.value;
    that.setData({
      addCustom: value
    })
    var custom = that.data.custom;
    var add = { problem: value };
    if (!value) {
      wx.showModal({
        title: '提示',
        content: '问题不允许为空',
        success: function (res) {

          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    } else {
      custom.splice(3, 1, add);
      that.setData({
        custom: custom,
        addCustom: '',
      })
      const id = 3;
      const custom_type = that.data.custom_type;
      //console.log(custom_type)
      for (let item of custom_type) {
        item.custom = "custom_choice";
      }
      custom_type[id].custom = "custom_choiced";
      that.setData({
        custom_type: custom_type,
        pro_id: id
      })
      console.log(custom)
      console.log(value)

    }
  },

  answerProbability(e) {
    var that = this
    var value = e.detail.value
    var index = e.currentTarget.dataset.index
    var answerProbability = that.data.answerProbability
    var awards = that.data.awards
    var addPro = 0
    awards[index].answerProbability = value
    that.setData({
      awards,
    })
    $.each(awards, (i, v) => {
      v.answerProbability =
        addPro += Number(v.answerProbability)
      console.log(typeof addPro, addPro, typeof v.answerProbability)
    })
    if (addPro > 1) {
      console.log('概率大于1', addPro)
    }
  },
  answerNum(e) {
    var that = this
    var index = e.currentTarget.dataset.index
    var num = e.detail.value
    var awards = that.data.awards

    console.log(e)
  },
  textLength(value,cb){
    if (value !== '') {
      console.log(8888)
      cb&&cb()
    } else {
      $.alert('输入不能为空')
    }
  },
  //获取改变的行数，改变值  控制转盘内文字更改
  daiti: function (e) {
    var that = this;
    console.log('199' + this.length);
    console.log('1', e);
    var index = e.currentTarget.dataset.index;
    var awards = this.data.awards;
    console.log("000" + index);
    var value = (e.detail.value).replace(/\s/g, "");
          console.log(11+value)

      this.textLength(value,function(){
        switch(e.currentTarget.dataset.type)
          {
          case '0':
              awards[index].name = value;
              
            break;
          case '1':
            break;
          case '2':
              awards[index].ratio = value
            break;
          default:
          }
      })

    console.log('9999999', awards[index].name)
    
    that.setlist();
    console.log('awards', awards)
  },
  //获取awards个数，重新绘制转盘,控制行数和转盘刷新
  setlist: function () {
    var that = this;
    var T = that.data.awards;
    var awards_length = T.length;
    var app =that.data.app;
    //that.daiti();
    console.log(this.name)
    // getAwardsConfig
    app.awardsConfig = {
      chance: true,
      awards: that.data.awards,





    }
    that.refresh();
    console.log("1 " + that.data.awardsList.awards)



  },
  last() {
    var that = this;
    that.setData({
      open: that.data.open-1
    })
  },
  //保存用户填写预设问题答案
  save() {
    var that = this;
    var id = that.data.id;                                                   //轮盘样式id
    var awards = that.data.awards;
    var length = that.data.length;
    // var pro_id = that.data.pro_id;
    // var question = that.data.custom[pro_id].problem;     //获取问题文本
    



    
    // for (var i = 0; i < length; i++) {
    //   //console.log('11',awards[i].name)
      
    //   }

    

    if (that.data.yz) {
      wx.setStorageSync('awards', awards);
      wx.setStorageSync('length', length);

      $.each(awards,(i,v) => {
        const prizeCommon = {
          name:v.name,
          ratio:v.ratio,
          bigprize:v.bigprize,
          activeid:92,
          image:v.image,
          rotate:360/awards.length,
          // leve:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1109917053,4211270766&fm=27&gp=0.jpg',
          // detail:1,
        }
        $$.SavePrizeCommon(prizeCommon)
      })

    

      //console.log('txt',awards)

      // var answers = JSON.stringify(awards);
      // wx.setStorageSync('awards', awards);              //本地保存用户填写答案
      // wx.setStorageSync('question', question);                             //本地保存用户填写答案
      // console.log('answers', answers)
      // var openid = wx.getStorageSync('user_openid');   //用户openid
      // var user_id = wx.getStorageSync('user_id');      //根据id判断保存还是更新
      // console.log('id', user_id)
      // console.log('openidtext', openid)
      // var jsonData = { answer_num: 0, css_style: id, question: question, answerjson: answers, openid: openid, id: user_id };
      // wx.request({
      //   url: 'https://www.korjo.cn/KorjoApi/SaveTurnTable', //仅为示例，并非真实的接口地址
      //   data: {
      //     jsonData: JSON.stringify(jsonData)
      //   },
      //   header: {
      //     'content-type': 'application/x-www-form-urlencoded' // 默认值
      //   },
      //   method: "POST",
      //   success: function (res) {
      //     console.log(res.data, jsonData)
      //     wx.hideToast();                             //取消提示
      //   }, fail(res) {
      //     console.log('保存失败,error：', res)
      //   }
      // })


    } else {
      wx.showModal({
        title: '提示',
        content: '答案不允许为空',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
    // const activeInfo = {
    //   actname:'11',
    //   enddate:'2018-04-01',
    //   stardate:'2018-02-01',
    //   activeset:'fasdf',
    //   count:2,
    //   rouletteimg:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1109917053,4211270766&fm=27&gp=0.jpg',
    //   pointerimg:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1109917053,4211270766&fm=27&gp=0.jpg',
    //   wxpublic_id:1,
    //   drawtype:5,
    // }
    // $$.SaveActiveInfo(activeInfo)

  },


  // 点击下一步，把选到的问题和答案代替进去默认的答案
  next(e) {
    var that = this;
    var awards = that.data.awards;
    var pro_id = that.data.pro_id;
    // var pro_length = that.data.awards.length;
    var length = that.data.length;
    var awardsList = that.data.awardsList;
    var awards_list = that.data.awards_list[pro_id].award;
    var open = that.data.open;
    $.each(awards,(i,v) => {
    console.log('awards'+v.name)
    if (!v.name) {
        that.setData({
          yz: false
        })
      } else {
        that.setData({
          yz: true
        })
      }
    })
    if(that.data.open==1&&that.data.yz){
      that.setData({
        open:open+1,
        awards: awards,
        awardsList: awardsList
      })
    }else{
      console.log('open'+ that.data.open)
    }
    console.log(typeof that.data.open)
    

  },
  slider(e) {
    var that = this;
    var length = e.detail.value;
    console.log(length);
    var awards = that.data.awards;
    var length_awards = awards.length;
    if (length_awards < length) {
      var add = length - length_awards;
      for (var i = 1; i <= add; i++) {
        awards.push({ option: String(i + length_awards), name: '', detail: String(i + length_awards) }, )
      }

    } else {
      var sub = length_awards - length;
      for (var i = 1; i <= sub; i++) {
        awards.pop()
      }

    }


    console.log(awards)
    that.setData({
      awards: awards,
      length: length
    })
    that.refresh();
  },
  choice(e) {//选择样式
    // console.log(e);
    var that = this;
    var id = e.target.dataset.id;
    const choice_type = that.data.choice_type;
    console.log(id)
    for (let item of choice_type) {
      item.choice = "choice";
    }
    choice_type[id].choice = "choiced";
    that.setData({
      choice_type: choice_type,
      id: id
    })
    that.refresh();
  },
  custom(e) {//选择问题
    // console.log(e);
    var that = this;

    const id = e.target.dataset.id;
    const custom_type = that.data.custom_type;
    //console.log(custom_type)
    for (let item of custom_type) {
      item.custom = "custom_choice";
    }
    custom_type[id].custom = "custom_choiced";
    that.setData({
      custom_type: custom_type,
      pro_id: id
    })
  },

  // style(e){
  //   var that = this;
  //   console.log(e);
  //   var id = e.target.dataset.id;
  //   var style = this.data.style;
  //   var change = this.data.style[id];
  //   style[0] = change;
  //   console.log(change)
  //   that.setData({
  //     style:style
  //   })
  // },
  failCanvas() {
    var that = this;
    var fail = setInterval(
      function () {
        wx.canvasToTempFilePath({
          x: 0,
          y: 0,
          width: 540,
          height: 540,
          destWidth: 540,
          destHeight: 540,
          canvasId: 'lotteryCanvas',

          success: function (res) {
            console.log('okoko', res.tempFilePath)
            clearInterval(fail);
            that.setData({
              res: res.tempFilePath
            })
          },
          fail: function (error) {
            console.log(error)
          }
        })
      }, 500)
  },
  refresh() {
    var that = this;
    var app =that.data.app;
    app.awardsConfig = {
      chance: true,
      awards: that.data.awards
    }
    console.log(app.awardsConfig.awards)
    //console.log('180',app.awardsConfig.awards)
    // 绘制转盘
    var id = that.data.id;
    var color1 = that.data.style[id].color1;
    var color2 = that.data.style[id].color2;
    var awardsConfig = app.awardsConfig.awards,
      len = awardsConfig.length,
      rotateDeg = 360 / len / 2 + 45,
      html = [],
      turnNum = 1 / len  // 文字旋转 turn 值
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
      ctx.translate(90, 90);
      // 从(0, 0)坐标开始定义一条新的子路径
      ctx.moveTo(0, 0);
      // 旋转弧度,需将角度转换为弧度,使用 degrees * Math.PI/180 公式进行计算。
      ctx.rotate((360 / len * i - rotateDeg) * Math.PI / 180);
      // 绘制圆弧
      ctx.arc(0, 0, 90, 0, 2 * Math.PI / len, false);

      // 颜色间隔\
      // if(len % 2 ==0){
      //   console.log("111111")
      if (i % 2 == 0) {
        ctx.setFillStyle(color1);
      } else {
        ctx.setFillStyle(color2);
      }

      // }
      // else{
      //   console.log("22222")
      //   if (i % 3 == 0) {
      //       ctx.setFillStyle('#7ce1e7');
      //   }else if (i % 3 == 1) {
      //       ctx.setFillStyle('#ffd517');
      //   }
      //   else{
      //       ctx.setFillStyle('#91c892');
      //   }
      // }

      // 填充扇形
      ctx.fill();
      // 绘制边框
      ctx.setLineWidth(0.1);
      ctx.setStrokeStyle('#ffffff');
      ctx.stroke();


      // 恢复前一个状态
      ctx.restore();

      // 奖项列表
      html.push({ turn: i * turnNum + 0.125 + 'turn', award: awardsConfig[i].name });
    }
    that.setData({
      awardsList: html
    });

    ctx.draw(true,()=>{
      console.log('huizhi')
      wx.canvasToTempFilePath({
      x: 0,
      y: 0,
      width: 540,
      height: 540,
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
    


    // console.log('draw')

    // console.log('save')



  },

  /**
   * 生命周期函数--监听页面加载
   */
  gotoList: function () {
    wx.switchTab({
      url: '../list/list'
    })
  },
  getLottery: function () {
    var that = this
    var awardIndex = Math.random() * 6 >>> 0;

    // 获取奖品配置
    var awardsConfig = app.awardsConfig
    if (awardIndex < 2) awardsConfig.chance = false
    console.log(awardIndex)

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
    setTimeout(function () {
      var animationRun = wx.createAnimation({
        duration: 4000,
        timingFunction: 'ease'
      })
      that.animationRun = animationRun
      animationRun.rotate(360 * 8 - awardIndex * (360 / 6)).step()
      that.setData({
        animationData: animationRun.export()
      })
    }, 100)

    // 中奖提示
    setTimeout(function () {
      that.setData({
        result_box: 'result_box_block'
      })

      // wx.showModal({
      //   title: '恭喜',
      //   content: '获得' + (awardsConfig.awards[awardIndex].name),
      //   showCancel: false
      // })
      // if (awardsConfig.chance) {
      //   that.setData({
      //     btnDisabled: ''
      //   })  
      // }
    }, 4100);


    /*wx.request({
      url: '../../data/getLottery.json',
      data: {},
      header: {
          'Content-Type': 'application/json'
      },
      success: function(data) {
        console.log(data)
      },
      fail: function(error) {
        console.log(error)
        wx.showModal({
          title: '抱歉',
          content: '网络异常，请重试',
          showCancel: false
        })
      }
    })*/
  },
  creat() {
    var that = this;

    // getAwardsConfig
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

    // wx.setStorageSync('awardsConfig', JSON.stringify(awardsConfig))
    // 绘制转盘
    var awardsConfig = app.awardsConfig.awards,
      len = awardsConfig.length,
      rotateDeg = 360 / len / 2 + 45,
      html = [],
      turnNum = 1 / len  // 文字旋转 turn 值
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
      ctx.translate(90, 90);
      // 从(0, 0)坐标开始定义一条新的子路径
      ctx.moveTo(0, 0);
      // 旋转弧度,需将角度转换为弧度,使用 degrees * Math.PI/180 公式进行计算。
      ctx.rotate((360 / len * i - rotateDeg) * Math.PI / 180);
      // 绘制圆弧
      ctx.arc(0, 0, 90, 0, 2 * Math.PI / len, false);

      // 颜色间隔
      if (i % 2 == 0) {
        ctx.setFillStyle('#ffd517');
      } else {
        ctx.setFillStyle('#79b52f');
      }

      // 填充扇形
      ctx.fill();
      // 绘制边框
      ctx.setLineWidth(0.1);
      ctx.setStrokeStyle('#ffffff');
      ctx.stroke();
      // ctx.drawImage('http://www.korjo.cn/xcx/luckyImg/pointer.png', 40, 35, 50, 60);  



      // 恢复前一个状态
      ctx.restore();


      // 奖项列表
      html.push({ turn: i * turnNum + 0.125 + 'turn', award: awardsConfig[i].name });
    }
    that.setData({
      awardsList: html
    });

    ctx.draw()
    wx.canvasToTempFilePath({
      x: 0,
      y: 0,
      width: 540,
      height: 540,
      destWidth: 540,
      destHeight: 540,
      canvasId: 'lotteryCanvas',

      success: function (res) {
        that.setData({
          res: res.tempFilePath
        })
        console.log('res11111111111111111111111111111', res.tempFilePath)

      },
      fail: function (error) {
        console.log(error)
      }
    })
  },
},
  onLoad: function (e) {
    // setTimeout(function(){
    //   console.log('10s')
    // },10000);
    var that = this;
    var nowDate = that.data.nowDate
    var startTime = that.data.startTime
    var getDate = new Date()
    nowDate.date = getDate.toLocaleDateString()
    nowDate.time = getDate.getHours() + ':' + getDate.getMinutes()

    startTime = nowDate
    that.setData({
      nowDate,
      startTime,
    })

    // setTimeout(function(){that.refresh(); console.log(that.data.awards)},100)  //不知道哪里参数问题，导致截图时画布是空的；添加100s毫秒

    // that.refresh();
    // console.log('0s',that.data.awards)



    // that.slider({detail: {value: 2}});


    // setTimeout(function(){
    //   that.setData({
    //   awards:[
    //     {option:"1",name:'',detail:"1"},
    //     {option:"2",name:'',detail:"2"},
    //     {option:"1",name:'',detail:"1"},
    //     {option:"2",name:'',detail:"2"}

    //   ]
    // })

    //   that.refresh();  console.log('3s',that.data.awards)},3000)

    // var that= this;
    // var length = that.data.length;
    // console.log(length);
    // var awards = that.data.awards;
    // var length_awards = awards.length;
    // if(length_awards < length){
    //   var add = length - length_awards;
    //   for(var i=1;i<=add;i++){
    //   awards.push({option:String(i+length_awards),name:'',detail:String(i+length_awards)},)
    // }

    // }else{
    //   var sub = length_awards - length;
    //   for(var i=1;i<=sub;i++){
    //   awards.pop()
    // }

    // }


    // console.log(awards)
    // that.setData({
    //   awards:awards,
    //   length:length
    // })
    // that.creat();



  },
    onReady() {
    var that = this;
    that.refresh();
    that.failCanvas();
    var b = new Date()
    var a = (new Date()).valueOf()
    console.log('时间', a, b, b.getHours(), b.getMinutes())

  },
  //自定义生命周期
  attached(){
    var that = this;
    that.refresh();
    
    console.log(121)
    // that.failCanvas();
  }

})