/*
备注
baseUrl：用户端userapi域名
jwtKey: userapi的jwt哈希加密key
CarouselData:轮播图片和跳转url
apiList：各接口路径
apiCodef：接口返回code约定
stringList：通用字符串，提示语等等
*/
const baseUrl = "http://userapi.hiweixiu.com/";
export let config = {
    jwtKey:"mipvssjx7sqebrszg2pjprdf9syseecu",
    storageKeys:{
        timeDifference:"kTimeDifference", //JWT客户端与服务器的时间差
        currentDevice:"kCurrentDevice",//当前设备信息（hi维修数据）
        currentUser:"kCurrentUser",//当前登录用户信息（hi维修数据）
        //页面间传值
        selectedAddress:"kSelectedAddress",//当前选择的地址（地址列表页面->下单页面）
        selectedDevice:"kSelectedDevice",//创建订单订单->当前选择机型
        selectedPlan:"kSelectedPlan",//创建订单->当前选择维修方案,
        selectedAddress:"kSelectedAddress",//选中地址
    },
    apiList: {
        faultList: baseUrl + 'fault/mould-fault',   //首页故障列表
        deviceInfo: baseUrl + 'moiblemould/getids', 
        getColors: baseUrl + 'colors/get-colors',
        warrantyOption: baseUrl + 'moiblemould/get-warranty-option-by-mid',
        repairMsg: baseUrl + 'repairprice/get-repair-msg',
        faultComment: baseUrl + 'comment/new-get-y-comments',
        sendCode: baseUrl + 'hiuser/verificate-code',
        doLogin: baseUrl + 'hiuser/login',
        addressList: baseUrl + 'user/look-address',
        addAddress: baseUrl + 'user/add-address',
        cityInfo: baseUrl + 'region/is-open-city',
        createOrder: baseUrl + 'order/new-create-order',
        orderDetail: baseUrl + 'order/detail',
        shrOrderDetail: baseUrl + 'shr/get-shr-order-info-by-id',
        workerLocation: baseUrl + 'order/get-engineer-position',
        brandList: baseUrl + 'moiblemould/get-brand-list',
        mouldList: baseUrl + 'moiblemould/get-mould-list-by-bid',
        orderList: baseUrl + 'order/listnew',
        editName: baseUrl + 'user/edit-name',
        editBirthday: baseUrl + 'user/edit-birthday',
        logout: baseUrl + 'hiuser/logout'
    },
    apiCode:{
        success:200,
        fail:403,
        unauthorized:401,
    },
    strings:{
        requestFail:"请求失败"
    },
    amap:{
        mapKey:"bdf11297e5ab22f3fca852062e0a94f3",//小程序sdkkey
        key:"ad6c2c7a01c2fec89289b2234b841584",
        regeocode:"http://restapi.amap.com/v3/geocode/regeo",

    },
    CarouselData:[
        {
            "img":"//pic.hiweixiu.com/images/uploadImg/banner/201706/20170602174425_669.png?v=201706131249131500",
            "url":"http://mp.weixin.qq.com/s/QTDUcLDOUr41QEHa9xagKg"
        },
        {
            "img":"//pic.hiweixiu.com/images/uploadImg/banner/201705/20170517143028_222.png?v=201706131249131500",
            "url":"javascript:;"
        },
        {
            "img":"//pic.hiweixiu.com/images/uploadImg/banner/201705/20170508171856_106.png?v=201706131249131500",
            "url":"http://huishou.hiweixiu.com/"
        },
        {
            "img":"//pic.hiweixiu.com/images/uploadImg/banner/201705/20170508172002_436.png?v=201706131249131500",
            "url":"javascript:;"
        }
    ],
    navData:[
        {
            "img":"//pic.hiweixiu.com/hiweixiu-mobile/img/smwx.png",
            "url":"/step/index",
            "text":"上门维修"
        },
         {
            "img":"//pic.hiweixiu.com/hiweixiu-mobile/img/smhs.png",
            "url":"//hs.hiweixiu.com/?m_hiweixiu_com=1",
            "text":"上门回收"
        },
         {
            "img":"//pic.hiweixiu.com/hiweixiu-mobile/img/ncsj2.png",
            "url":"/order/special",
            "text":"内存升级"
        },
         {
            "img":"//pic.hiweixiu.com/hiweixiu-mobile/img/qyfw.png",
            "url":"/business/index",
            "text":"企业服务"
        },
        {
            "img":"//pic.hiweixiu.com/hiweixiu-mobile/img/ppsq.png",
            "url":"/index/brand-authorized",
            "text":"品牌授权"
        }
    ]
}