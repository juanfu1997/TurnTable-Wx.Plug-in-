const $ = require('./util')

module.exports = {
	/**
	 * 注册用户
	 * dataJson{ "relname", "phone", "password", "photo", "openid", "wxpublic_id"}
	 */
	SaveUserInfo(data) {
		return $.post('/TimeApi/SaveWeiweiUser', { dataJson: JSON.stringify(data) })
	},

	/**
	 * 用户登录
	 * {phone,password}
	 */
	GetAdminOrder(data) {
		return $.get('/TimeApi/WeiweiUserLogin', data)
	},

	/**
	 * 根据用户ID获取用户信息
	 */
	GetWeiweiUserInfo(id) {
		return $.get('/TimeApi/GetWeiweiUserInfo', { id })
	},

	/**
	 * 获取优惠券列表
	 */
	GetCouponList() {
		return $.get('/TimeApi/GetCouponList', {})
	},

	/**
	 * 首页产品列表
	 */
	GetWeiweiProductList() {
		return $.get('/TimeApi/GetWeiweiProductList', {})
	},

	/**
	 * 根据产品ID获取详情
	 */
	GetWeiweiProductInfo(id) {
		return $.get('/TimeApi/GetWeiweiProductInfo', { id })
	},

	/**
	 * 保存订单
	 *dataJson{ "contact_id", "userid", "freight", "mycoupon_id", "leaving_message", "product_price", "coupon_price", "freight_price", "all_price", "wxpublic_id",” relationList” }
	 订单产品关联relationList{“product_id”,”number” }
	 */
	SaveProductOrderCommon(data) {
		return $.post('/TimeApi/SaveProductOrderCommon', { dataJson: JSON.stringify(data) })
	},

	/**
	 * 更新订单状态
	 * {id,status}
	 * Status:-1=已删除，0=待付款，1=待发货，2=已退款，3=待收货，4=已完成,5=取消订单
	 */
	UpdateOrderStatus(data) {
		return $.get('/TimeApi/UpdateOrderStatus', data)
	},

	/**
	 * 获取我的订单列表
	 * Status:-1=已删除，0=待付款，1=待发货，2=已退款，3=待收货，4=已完成,5=取消订单
	 */
	GetProductOrderCommonListByUserID(userid) {
		return $.get('/TimeApi/GetProductOrderCommonListByUserID', { userid })
	},

	/**
	 * 根据ID获取订单信息
	 */
	GetProductOrderCommonInfo(id) {
		return $.get('/TimeApi/GetProductOrderCommonInfo', { id })
	},

	/**
	 * 保存收货地址管理信息
	 * dataJson{"userid", "contact", "phone", "address", "post_code"}
	 */
	SaveDeliveryAddress(data) {
		return $.post('/TimeApi/SaveDeliveryAddress', { dataJson: JSON.stringify(data) })
	},

	/**
	 * 获取收货地址列表
	 */
	GetDeliveryAddressList(userid) {
		return $.get('/TimeApi/GetDeliveryAddressList', { userid })
	},

	/**
	 * 获取收货地址信息
	 */
	GetDeliveryAddressInfo(id) {
		return $.get('/TimeApi/GetDeliveryAddressInfo', { id })
	},

	/**
	 * 删除收货地址
	 */
	DeleteDeliveryAddress(id) {
		return $.get('/TimeApi/DeleteDeliveryAddress', { id })
	},

	/**
	 * 领取优惠券
	 * dataJson{"userid", "coupon_id"}
	 */
	SaveMyCoupon(data) {
		return $.post('/TimeApi/SaveMyCoupon', { dataJson: JSON.stringify(data) })
	},

	/**
	 * 获取我的优惠券
	 */
	GetMyCouponList(userid) {
		return $.get('/TimeApi/GetMyCouponList', { userid })
	},

	/**
	 * 更新点券状态
	 * {id,status}
	 */
	UpdateMyCouponStatus(data) {
		return $.get('/TimeApi/UpdateMyCouponStatus', data)
	},

	/**
	 * 获取产品分类
	 */
	GetWeiweiTypeList() {
		return $.get('/TimeApi/GetWeiweiTypeList', {})
	},

	/**
	 * 根据分类获取产品列表
	 */
	GetProductListByTypeID(typeid) {
		return $.get('/TimeApi/GetProductListByTypeID', { typeid })
	},

	/**
	 * 获取所有产品
	 */
	GetProductListAll() {
		return $.get('/TimeApi/GetProductListAll', {})
	},

	/**
	 * 提醒发货
	 */
	UpdateOrderNotice(id) {
		return $.get('/TimeApi/UpdateOrderNotice', { id })
	},

	/**
	 * 保存充值信息
	 * dataJson{ "openid",  "total_fee", "wxpublic_id"}
	 */
	SaveRechargeInfo(data) {
		return $.post('/TimeApi/SaveRechargeInfo', { dataJson: JSON.stringify(data) })
	},

	/**
	 * 更新用户积分
	 * userid=用户ID&integral=积分
	 */
	UpdateUserIntegral(data) {
		return $.get('/TimeApi/UpdateUserIntegral', data)
	},

	/**
	 * 获取会员权益详情
	 */
	GetVipDescriptionInfo() {
		return $.get('/TimeApi/GetVipDescriptionInfo', { wxpublic_id: $.data.appid })
	},

	/**
	 * 领取积分券
	 * dataJson{"userid", "coupon_id" }
	 */
	SaveMyIntegralCoupon(data) {
		return $.post('/TimeApi/SaveMyIntegralCoupon', { dataJson: JSON.stringify(data) })
	},

	/**
	 * 获取积分产品列表
	 */
	GetCouponProductList(userid) {
		return $.get('/TimeApi/GetCouponProductList', { userid })
	},

	/**
	 * 充值付款-扣除余额和订单状态
	 */
	UpdateBalanceAndOrderStatus(order_id) {
		return $.get('/TimeApi/UpdateBalanceAndOrderStatus', { order_id })
	},

	/**
	 * 查询物流
	 * ShipperCode&LogisticCode
	 */
	GetOrderTracesByJson(data) {
		return $.get('/TimeApi/GetOrderTracesByJson', data)
	},

	// ==============================================================================
	// ==============================================================================
	/**
	 * 轮播图
	 */
	GetSliderCommonList(slider_id) {
		return $.get('/KorjoApi/GetSliderCommonList', { slider_id })
	},

	/**
	 * 根据用户ID获取用户信息
	 */
	GetUserInfo(userid) {
		return $.get('/KorjoApi/GetUserInfo', { userid })
	},

	/**
	 * 获取用户openid
	 */
	GetSessionKey(data) {
		return $.get('/KorjoApi/GetSessionKey', data)
	},

	/**
	 * 保存客服推送消息
	 */
	SaveDataJsonCommon(data) {
		return $.post('/KorjoApi/SaveDataJsonCommon', { dataJson: JSON.stringify(data) })
	},

	/**
	 * 上传图片
	 */
	Upload(filePath) {
		$.loading()
		return new Promise((resolve, reject) => {
			wx.uploadFile({
				url: `${$.data.host}/KorjoApi/AdminUpload`,
				name: 'file',
				formData: { "path": "order", "type": "image" },
				filePath,
				success: res => {
					$.hideLoading()
					resolve(res)
				},
				fail: e => {
					$.log(e)
				}
			})
		})
	},

	/**
	 * FAQ
	 */
	GetFansIntro() {
		return $.get('/KorjoApi/GetFansIntro', { wxpublic_id: $.data.appid })
	},

	/**
	 * 支付
	 */
	PayCommon(order_pay_id) {
		return $.post('/PayApi/PayCommon', { order_pay_id })
	},

	/**
	 * 退款
	 */
	RunCommon(order_pay_id) {
		return $.post('/PayApi/RunCommon', { order_pay_id })
	},

	/**
	 * 更新支付状态
	 */
	UpdateOrderPayStatus(data) {
		return $.post('/GolfApi/UpdateOrderPayStatus', data)
	},
	AddressTransformLatitudeAndLongitude(data){
		console.log(data)
		return $.post('https://apis.map.qq.com/ws/geocoder/v1',data)
	},
	/*获取活动列表*/
	GetActiveList(){
		return $.get('https://www.korjo.cn/KorjoApi/GetActiveList')
	},
	GetActiveInfo(id){
		return $.get('https://www.korjo.cn/KorjoApi/GetActiveInfo',{ id })
	},
	/*保存活动信息*/
	SaveActiveInfo(dataJson){
		return $.post('https://www.korjo.cn/KorjoApi/SaveActive', { dataJson: JSON.stringify(dataJson) } )
	},
	SavePrizeCommon(dataJson){
		return $.post('https://www.korjo.cn/KorjoApi/SavePrizeCommon',{ dataJson: JSON.stringify(dataJson) })
	}

}

// const util = require('./util.js');
// // 获取用户openid
// function GetSessionKey(dataObj) {
// 	return util.get('/KorjoApi/GetSessionKey', dataObj)
// }

// //上传图片
// function upload(filePath) {
// 	// util.loading();
// 	return new Promise((resolve, reject) => {
// 		wx.uploadFile({
// 			url: `${util.data.host}/KorjoApi/AdminUpload`,
// 			name: 'file',
// 			formData: { "path": "golf", "type": "image" },
// 			filePath,
// 			success: (res) => {
// 				util.hideLoading();
// 				resolve(res.data);
// 			},
// 			fail: (error) => {
// 				reject(error);
// 			}
// 		})
// 	});
// }

// //法定节假日和周末
// function GetRestDateList(yearmonth) {
// 	//2018-01
// 	return util.get('/KorjoApi/GetRestDateList', {yearmonth});
// 	//rest_value:2 //2法定休息//1周末休
// }

// function ValidateUserOpenid(unionid) {
//     return util.get('/KorjoApi/ValidateUserOpenid', {unionid, wxpublic_id: util.data.appid});
// }

// //定时消息推送
// function SaveSendMsg(sendtime, param, sendtype, openid, event_id) {
// 	//如果没有event_id就不需要传，event_id是保存事件返回的id
// 	const jsonData = JSON.stringify({
// 		messagejson: JSON.stringify(param),
// 		sendtime,
// 		wxpublic_id: util.data.appid,//korjo后台密钥管理id
// 		sendtype,//发送方式：1为小程序，2为公众号
// 		openid,
// 		event_id
// 	});
// 	console.log("SaveSendMsg: ", jsonData);
// 	return util.post('/KorjoApi/SaveSendMsg', {jsonData});
// }

// //实时消息推送
// function WxMessageSend(param) {
// 	return util.post('/KorjoApi/WxMessageSend', {id: util.data.appid, param: JSON.stringify(param)});
// }

// function DeleteSendMsg(event_id) {
// 	return util.get('/KorjoApi/DeleteSendMsg', {event_id, wxpublic_id: util.data.appid});
// }


// //粉我吧科技介绍页
// function GetFansIntro(wxpublic_id) {
// 	return util.get('/KorjoApi/GetFansIntro', {wxpublic_id});
// }

// function GetSuitableCrowdCommonList() {
// 	return util.get('/KorjoApi/GetSuitableCrowdCommonList', {projectid: 1})
// }

// function GetTypeNameRecommend(suitable_crowd_id) {
//     return util.get('/KorjoApi/GetTypeNameRecommend', {suitable_crowd_id, projectid: 1});
// }

// function GetTypeCommonListByParentID() {
//     return util.get('/KorjoApi/GetTypeCommonListByParentID', {parentid: 0, projectid: 1})
// }

// //311公共节日312现代节日323情人节324传统
// function GetCalendarGongGuanList(yearmonth,typeid) {
// 	console.log(typeid)
//     return util.get('https://www.korjo.cn/KorjoApi/GetCalendarGongGuanList', {yearmonth,typeid})
// }
// //节日，不一定有休息日，如双十一
// function GetSingleCommonList(date) {
//     return util.get('/GspaceApi/GetSingleCommonList', {date})
// }

// function GetCalendarUserEvent(openid,calendar_date,isdate) {
//     return util.get('/KorjoApi/GetCalendarUserEvent', {openid, calendar_date, isdate})
// }

// function SaveUserEvent(jsonData) {
//     return util.get('/KorjoApi/SaveUserEvent', {jsonData: JSON.stringify(jsonData)});
// }

// function  GetTodayEventListByDate(day) {
//     return util.get('/KorjoApi/GetTodayEventListByDate', {day})
// }

// function GetTodayEventInfoByID(id) {
//     return util.get('/KorjoApi/GetTodayEventInfoByID', {id})
// }

// //黄历
// function GetIndexBgImageInfo(date) {
// 	//2018-03-12
// 	return util.get('/KorjoApi/GetIndexBgImageInfo', {date});
// }


// module.exports = {
//     GetSessionKey,
// 	upload,
// 	GetRestDateList,
// 	ValidateUserOpenid,
// 	SaveSendMsg,
// 	GetFansIntro,
// 	WxMessageSend,
// 	DeleteSendMsg,
// 	GetSuitableCrowdCommonList,
// 	GetTypeNameRecommend,
// 	GetTypeCommonListByParentID,
// 	GetSingleCommonList,
// 	GetCalendarGongGuanList,
// 	GetCalendarUserEvent,
// 	SaveUserEvent,
// 	GetTodayEventListByDate,
// 	GetTodayEventInfoByID,
// 	GetIndexBgImageInfo
// }
