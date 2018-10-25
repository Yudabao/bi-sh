(function (win, $) {
    var utils = {
        geoCoordMap: {
            '上海': [121.4648, 31.2891],
            '东莞': [113.8953, 22.901],
            '东营': [118.7073, 37.5513],
            '中山': [113.4229, 22.478],
            '临汾': [111.4783, 36.1615],
            '临沂': [118.3118, 35.2936],
            '丹东': [124.541, 40.4242],
            '丽水': [119.5642, 28.1854],
            '乌鲁木齐': [87.9236, 43.5883],
            '佛山': [112.8955, 23.1097],
            '保定': [115.0488, 39.0948],
            '兰州': [103.5901, 36.3043],
            '包头': [110.3467, 41.4899],
            '北京': [116.4551, 40.2539],
            '北海': [109.314, 21.6211],
            '南京': [118.8062, 31.9208],
            '南宁': [108.479, 23.1152],
            '南昌': [116.0046, 28.6633],
            '南通': [121.1023, 32.1625],
            '厦门': [118.1689, 24.6478],
            '台州': [121.1353, 28.6688],
            '合肥': [117.29, 32.0581],
            '呼和浩特': [111.4124, 40.4901],
            '咸阳': [108.4131, 34.8706],
            '哈尔滨': [127.9688, 45.368],
            '唐山': [118.4766, 39.6826],
            '嘉兴': [120.9155, 30.6354],
            '大同': [113.7854, 39.8035],
            '大连': [122.2229, 39.4409],
            '天津': [117.4219, 39.4189],
            '太原': [112.3352, 37.9413],
            '威海': [121.9482, 37.1393],
            '宁波': [121.5967, 29.6466],
            '宝鸡': [107.1826, 34.3433],
            '宿迁': [118.5535, 33.7775],
            '常州': [119.4543, 31.5582],
            '广州': [113.5107, 23.2196],
            '廊坊': [116.521, 39.0509],
            '延安': [109.1052, 36.4252],
            '张家口': [115.1477, 40.8527],
            '徐州': [117.5208, 34.3268],
            '德州': [116.6858, 37.2107],
            '惠州': [114.6204, 23.1647],
            '成都': [103.9526, 30.7617],
            '扬州': [119.4653, 32.8162],
            '承德': [117.5757, 41.4075],
            '拉萨': [91.1865, 30.1465],
            '无锡': [120.3442, 31.5527],
            '日照': [119.2786, 35.5023],
            '昆明': [102.9199, 25.4663],
            '杭州': [119.5313, 29.8773],
            '枣庄': [117.323, 34.8926],
            '柳州': [109.3799, 24.9774],
            '株洲': [113.5327, 27.0319],
            '武汉': [114.3896, 30.6628],
            '汕头': [117.1692, 23.3405],
            '江门': [112.6318, 22.1484],
            '沈阳': [123.1238, 42.1216],
            '沧州': [116.8286, 38.2104],
            '河源': [114.917, 23.9722],
            '泉州': [118.3228, 25.1147],
            '泰安': [117.0264, 36.0516],
            '泰州': [120.0586, 32.5525],
            '济南': [117.1582, 36.8701],
            '济宁': [116.8286, 35.3375],
            '海口': [110.3893, 19.8516],
            '淄博': [118.0371, 36.6064],
            '淮安': [118.927, 33.4039],
            '深圳': [114.5435, 22.5439],
            '清远': [112.9175, 24.3292],
            '温州': [120.498, 27.8119],
            '渭南': [109.7864, 35.0299],
            '湖州': [119.8608, 30.7782],
            '湘潭': [112.5439, 27.7075],
            '滨州': [117.8174, 37.4963],
            '潍坊': [119.0918, 36.524],
            '烟台': [120.7397, 37.5128],
            '玉溪': [101.9312, 23.8898],
            '珠海': [113.7305, 22.1155],
            '盐城': [120.2234, 33.5577],
            '盘锦': [121.9482, 41.0449],
            '石家庄': [114.4995, 38.1006],
            '福州': [119.4543, 25.9222],
            '秦皇岛': [119.2126, 40.0232],
            '绍兴': [120.564, 29.7565],
            '聊城': [115.9167, 36.4032],
            '肇庆': [112.1265, 23.5822],
            '舟山': [122.2559, 30.2234],
            '苏州': [120.6519, 31.3989],
            '莱芜': [117.6526, 36.2714],
            '菏泽': [115.6201, 35.2057],
            '营口': [122.4316, 40.4297],
            '葫芦岛': [120.1575, 40.578],
            '衡水': [115.8838, 37.7161],
            '衢州': [118.6853, 28.8666],
            '西宁': [101.4038, 36.8207],
            '西安': [109.1162, 34.2004],
            '贵阳': [106.6992, 26.7682],
            '连云港': [119.1248, 34.552],
            '邢台': [114.8071, 37.2821],
            '邯郸': [114.4775, 36.535],
            '郑州': [113.4668, 34.6234],
            '鄂尔多斯': [108.9734, 39.2487],
            '重庆': [107.7539, 30.1904],
            '金华': [120.0037, 29.1028],
            '铜川': [109.0393, 35.1947],
            '银川': [106.3586, 38.1775],
            '镇江': [119.4763, 31.9702],
            '长春': [125.8154, 44.2584],
            '长沙': [113.0823, 28.2568],
            '长治': [112.8625, 36.4746],
            '阳泉': [113.4778, 38.0951],
            '青岛': [120.4651, 36.3373],
            '韶关': [113.7964, 24.7028],
            '遂宁': [105.571331, 30.513311],
            '福建': [119.306239, 26.075302]
        },
        renderPageSize: function () {
            var winW = $(window).width(), // 窗口宽度
                winH = $(window).height(); // 窗口高度
            $('#chart1').css({width: winW * 0.216, height: winH * 0.315});
            $('#chart2').css({width: winW * 0.216, height: winH * 0.315});
            $('#chart3').css({width: winW * 0.216, height: winH * 0.315});
            $('#chartNone').css({width: winW * 0.562, height: winH * 0.1824});
            $('#chart4').css({height: winH * 0.0626});
            $('#chart5').css({width: winW * 0.562, height: winH * 0.755});
            $('#chart6').css({width: winW * 0.222, height: winH * 0.315});
            $('#chart7').css({width: winW * 0.222, height: winH * 0.315});
            $('#chart8').css({width: winW * 0.222, height: winH * 0.315});
            $('.part-wrap').css({'padding-top': winH * 0.045});
            $('#roomChart').css({width: winW * 0.216, height: winH * 0.315, paddingTop: 5});
            $('.room-bg').css({
                width: winW * 0.216 * 0.102,
                height: winH * 0.315 * 0.149,
                left: winW * 0.216 * 0.5,
                top: winH * 0.315 * 0.5,
                marginLeft: -winW * 0.216 * 0.102 * 0.5 + Math.sqrt(10),
                marginTop: -winH * 0.315 * 0.149 * 0.5 + Math.sqrt(64) + 5
            })
            $('#totalBill').css({
                fontSize: winW * 0.01875,
                lineHeight: (winH * 0.052083333) + 'px'
            });
        },
        // LED文字滚动计算
        show_num: function (ele, n) {
            var it = $(ele + " i");
            var len = String(n).length;
            for (var i = 0; i < len; i++) {
                if (it.length <= i) {
                    $(ele).append("<i></i>");
                }
                var num = String(n).charAt(i);
                var y = -parseInt(num) * $(window).height() * 0.0626;
                var obj = $(ele + " i").eq(i);
                if (parseInt(utils.getBgPosY($(obj)).replace('-', '').replace('px', '')) > parseInt(y.toString().replace('-', ''))) {
                    obj.animate({
                            backgroundPosition: '(0 ' + String((-parseInt(num) - 10) * $(window).height() * 0.0626) + 'px)'
                        }, 'slow', 'swing', function () {
                            $(obj).css({backgroundPosition: '(0 ' + String(y) + 'px)'});
                        }
                    );
                } else {
                    obj.animate({
                            backgroundPosition: '(0 ' + String(y) + 'px)'
                        }, 'slow', 'swing', function () {

                        }
                    );
                }
            }
        },
        getTime: function (date) {
            var year = date.getFullYear(),
                month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1,
                day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate(),
                hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours(),
                minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes(),
                second = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
            return time = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
        },
        getValue: function (arr, name) {
            arr.filter(function (item) {
                return item.name === name;
            })
        },
        //数字3位加逗号
        toThousands: function (num) {
            return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
        },
        getBgPosY: function (dom) {
            var bgPosition = dom.css('background-position');//获取position
            if (typeof(bgPosition) == 'undefined') {//IE单独处理获取position
                bgPosition = dom.css('background-positionX') + ' ' + dom.css('background-positionY');
            }
            return bgPosition.replace(/[px%]/g, "").split(" ")[1];
        }
    };
    var roomChart,
        energyChart,
        serviceChart,
        chart,
        onlinePayChart;

    var renderCharts = {
        // 中国地图
        renderMap: function () {
            chart = echarts.init(document.getElementById('chart5'));
            var SHData = [];
            // $.ajax({
            //     url: '/saas20/api/2017063002/Apartment/free/largescreenview/city/list',
            //     type: 'POST',
            //     dataType: "json",
            //     cache: false,
            //     error: function (data) {
            //
            //     },
            //     success: function (data) {
            city.data.forEach(function (item, i) {
                SHData.push([{name: '上海'}, {name: item.cityName.replace('市', ''), value: item.orgCount}]);
            });
            var convertData = function (data) {
                var res = [];
                for (var i = 0; i < data.length; i++) {
                    var dataItem = data[i];
                    var fromCoord = utils.geoCoordMap[dataItem[0].name];
                    var toCoord = utils.geoCoordMap[dataItem[1].name];
                    if (fromCoord && toCoord) {
                        res.push({
                            fromName: dataItem[0].name,
                            toName: dataItem[1].name,
                            coords: [fromCoord, toCoord]
                        });
                    }
                }
                return res;
            };
            var color = ['#ffde00'];
            var series = [];
            [['上海', SHData]].forEach(function (item, i) {
                series.push(
                    {
                        name: item[0] + ' Top10',
                        type: 'lines',
                        zlevel: 2,
                        effect: {
                            show: true,
                            period: 5,
                            trailLength: 0,
                            color: 'red',
                            symbol: 'image://../img/water.svg',
                            symbolSize: [8, 12]
                        },
                        lineStyle: {
                            normal: {
                                color: color[i],
                                width: 0,
                                curveness: 0.2
                            }
                        },
                        data: convertData(item[1])
                    },
                    {
                        name: item[0] + ' Top10',
                        type: 'lines',
                        zlevel: 1,
                        symbol: ['none', 'none'],
                        symbolSize: 10,
                        effect: {
                            show: true,
                            period: 5,
                            trailLength: 0,
                            symbolSize: 0
                        },
                        lineStyle: {
                            normal: {
                                color: color[0],
                                width: 2,
                                opacity: 0.6,
                                curveness: 0.2
                            }
                        },
                        data: convertData(item[1])
                    },
                    {
                        name: item[0] + ' Top10',
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        zlevel: 2,
                        rippleEffect: {
                            brushType: 'stroke'
                        },
                        label: {
                            normal: {
                                show: true,
                                position: 'top',
                                fontSize: 23,
                                formatter: function (d) {
                                    // return d.data.name + '(' + d.data.value[2] + '家)';
                                    return d.data.name;
                                }
                            }
                        },
                        symbolSize: function (val) {
                            return Math.sqrt(val[2]) * 11;
                            // if (val[2] == 1) {
                            //     return 8;
                            // }
                            // if (val[2] > 1 && val[2] < 10) {
                            //     return 8 + val[2];
                            // }
                            // if (val[2] == 16) {
                            //     return 20;
                            // }
                            // if (val[2] == 53) {
                            //     return 22;
                            // }
                        },
                        itemStyle: {
                            normal: {
                                color: color[i],
                                opacity: 0.8
                            }
                        },
                        data: item[1].map(function (dataItem, i) {
                            return {
                                name: dataItem[1].name,
                                value: utils.geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                            };
                        })
                    }
                );
            });
            option = {
                backgroundColor: 'transparent',
                tooltip: {
                    show: false,
                    trigger: 'item'
                },
                geo: {
                    map: 'china',
                    label: {
                        emphasis: {
                            show: false
                        }
                    },
                    roam: false,
                    zoom: 1.2,
                    // left: 50,
                    // top: 20,
                    // right: 30,
                    // bottom: 40,
                    itemStyle: {
                        normal: {
                            areaColor: 'transparent',
                            borderColor: 'transparent',
                            borderWidth: 1
                        },
                        emphasis: {
                            areaColor: 'transparent'
                        }
                    }
                },
                series: series
            };
            chart.setOption(option);
            setInterval(function () {
                option.series.length = 3;
                // $.ajax({
                //     url: '/saas20/api/2017063002/Apartment/free/largescreenview/ajax/getdata',
                //     type: 'POST',
                //     dataType: "json",
                //     data: {
                //         'start': utils.getTime(new Date(Date.parse(new Date()) - 10000)),
                //         'end': utils.getTime(new Date()),
                //         'Sites': '0000000007,0000000013,0000000015',
                //         // 'Sites': '0000000216,0000000227,0000000108,0000000100,0000000117,0000000069'
                //     },
                //     cache: false,
                //     error: function (data) {
                //     },
                //     success: function (data) {
                if (number.data) {
                    var temp = [{}, {}, {}];
                    for (var i = 0; i < number.data.length; i++) {
                        if (number.data[i].type == '1') {
                            temp[0] = number.data[i];
                        }
                        if (number.data[i].type == '2') {
                            temp[1] = number.data[i];
                        }
                        if (number.data[i].type == '3') {
                            temp[2] = number.data[i];
                        }
                    }
                    // utils.show_num('.num1', temp[0].number ? temp[0].number : '0000000');
                    // utils.show_num('.num2', parseInt(temp[1].number) ? parseInt(temp[1].number) + 1000000 : '0000000');
                    if (!$('.num1').attr('value')) {
                        utils.show_num('.num1', number.data[0].number ? number.data[0].number : '000000');
                        utils.show_num('.num2', parseInt(number.data[1].number) ? parseInt(number.data[1].number) + 1000000 : '000000');
                        $('.num1').attr({'value': number.data[0].number ? number.data[0].number : '000000'});
                        $('.num2').attr({'value': parseInt(number.data[1].number) ? parseInt(number.data[1].number) + 1000000 : '000000'});
                    } else {
                        $('.num1').attr({'value': parseInt($('.num1').attr('value')) + Math.round(Math.random() * 10)});
                        $('.num2').attr({'value': parseInt($('.num2').attr('value')) + Math.round(Math.random() * 10)});
                        utils.show_num('.num1', $('.num1').attr('value'));
                        utils.show_num('.num2', $('.num2').attr('value'));
                    }
                    number.data[2].list = [];
                    number.data[2].list.push({name: SHData[Math.round(Math.random() * 19)][1].name});
                    option.series.push({
                        name: '上海' + ' Top10',
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        zlevel: 5,
                        rippleEffect: {
                            brushType: 'stroke'
                        },
                        symbol: 'image://../img/star.svg',
                        symbolSize: function (val) {
                            return 8;
                        },
                        itemStyle: {
                            normal: {
                                color: 'red'
                            }
                        },
                        data: temp[2].list.map(function (dataItem) {
                            return {
                                name: dataItem.name.replace('市', ''),
                                value: utils.geoCoordMap[dataItem.name.replace('市', '')].concat([utils.getValue(SHData, dataItem.name)])
                            };
                        })
                    });
                    chart.setOption(option);
                } else {
                    utils.show_num('.num1', '0000000');
                    utils.show_num('.num2', '0000000');
                }
                //     }
                // });
            }, 10000);
            //     }
            // });
        },
        // 客房数据
        roomNumber: function () {
            roomChart = echarts.init(document.getElementById('roomChart'));
            roomOption = {
                // tooltip: {
                //     trigger: 'item',
                //     textStyle: {
                //         fontSize: 12,
                //         fontFamily: 'Microsoft YaHei'
                //     },
                //     formatter: "{a} <br/>{b}: {c} ({d}%)"
                // },
                // legend: {
                //     orient: 'vertical',
                //     right: '12%',
                //     top: '5%',
                //     itemWidth: 8,
                //     itemHeight: 8,
                //     textStyle: {
                //         color: '#cacacd',
                //         fontSize: 8,
                //         fontFamily: 'Microsoft YaHei'
                //     },
                //     borderRidus: 8,
                //     selectedMode: false,
                //     data: []
                // },
                series: [{
                    name: '客房数量',
                    type: 'pie',
                    startAngle: 90,
                    radius: ['20%', '45.5%'],
                    animation: true,
                    animationType: 'expansion',
                    animationDuration: 3000,
                    label: {
                        normal: {
                            show: false,
                            fontFamily: 'Arial'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false,
                            length: 10,
                            length2: 20,
                            lineStyle: {
                                color: '#959394'
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            borderWidth: 0,
                            borderColor: '#cacacd'
                        },
                        emphasis: {
                            borderWidth: 0,
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
                    selectedOffset: 10,
                    data: []
                }, {
                    name: '客房数量',
                    type: 'pie',
                    startAngle: 90,
                    radius: ['45%', '50%'],
                    animation: true,
                    animationType: 'expansion',
                    animationDuration: 3000,
                    label: {
                        normal: {
                            show: true,
                            formatter: '{c}',
                            color: '#fff',
                            fontSize: 34,
                            fontWeight: 'bold',
                            fontFamily: 'Arial'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: true,
                            length: 15,
                            length2: 40,
                            lineStyle: {
                                color: '#959394'
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            borderWidth: 0,
                            borderColor: '#fff'
                        },
                        emphasis: {
                            borderWidth: 0,
                            shadowBlur: 10,
                            shadowOffsetX: 10,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
                    selectedOffset: 10,
                    data: []
                }]
            };
            roomChart.setOption(roomOption);
            // $.ajax({
            //     // url: '../js/json/roomNumber.json',
            //     url: '/saas20/api/2017063002/Apartment/free/largescreenview/city/roomBreach',
            //     type: 'POST',
            //     dataType: 'json',
            //     success: function (data, textStatus, jqXHR) {
            if (roomNumber.errorCode == 0) {
                var seriesData1 = [{
                    value: roomNumber.data[0].id == '1051002' ? roomNumber.data[0].number : roomNumber.data[1].number,
                    name: '分散式',
                    selected: true,
                    label: {
                        normal: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#c19c00'
                        }
                    }
                }, {
                    value: roomNumber.data[0].id == '1051001' ? roomNumber.data[0].number : roomNumber.data[1].number,
                    name: '集中式',
                    itemStyle: {
                        normal: {
                            color: '#00cf17'
                        }
                    }
                }];
                var seriesData2 = [{
                    value: roomNumber.data[0].id == '1051002' ? roomNumber.data[0].number : roomNumber.data[1].number,
                    name: '分散式',
                    selected: true,
                    itemStyle: {
                        normal: {
                            color: '#5a5252'
                        }
                    }
                }, {
                    value: roomNumber.data[0].id == '1051001' ? roomNumber.data[0].number : roomNumber.data[1].number,
                    name: '集中式',
                    itemStyle: {
                        normal: {
                            color: '#554d44'
                        }
                    }
                }];
                // var legendData = [];
                // legendData.push('分散式', '集中式');

                roomOption.series[0].data = seriesData1;
                roomOption.series[1].data = seriesData2;
                // roomOption.legend.data = legendData;

                roomChart.setOption(roomOption);
                $('#chart2').children('.room-bg').css({
                    display: 'block'
                })

                // 图例开关的行为只会触发 legendselectchanged 事件
                roomChart.on('legendselectchanged', function (params) {
                    var winW = $(window).width(), // 窗口宽度
                        winH = $(window).height(); // 窗口高度
                    if (!params.selected['集中式'] && params.selected['分散式']) {
                        $('#chart2').children('.room-bg').css({
                            marginLeft: -winW * 0.225 * 0.102 * 0.5,
                            marginTop: -winH * 0.315 * 0.149 * 0.5 + Math.sqrt(5),
                            display: 'block'
                        })
                    }
                    if (params.selected['集中式'] && !params.selected['分散式']) {
                        $('#chart2').children('.room-bg').css({
                            marginLeft: -winW * 0.225 * 0.102 * 0.5,
                            marginTop: -winH * 0.315 * 0.149 * 0.5,
                            display: 'block'
                        })
                    }
                    if (params.selected['集中式'] && params.selected['分散式']) {
                        $('#chart2').children('.room-bg').css({
                            marginLeft: -winW * 0.225 * 0.102 * 0.5 + Math.sqrt(5),
                            marginTop: -winH * 0.315 * 0.149 * 0.5 + Math.sqrt(5),
                            display: 'block'
                        })
                    }
                    if (!params.selected['集中式'] && !params.selected['分散式']) {
                        $('#chart2').children('.room-bg').css({
                            display: 'none'
                        })
                    }
                });
            }
            //     },
            //     error: function (xhr, textStatus) {
            //     }
            // })
        },
        // 能耗监控
        energyMonitor: function (data) {
            energyChart = echarts.init(document.getElementById('chart3'));
            energyOption = {
                tooltip: {
                    show: true,
                    trigger: 'axis',
                    axisPointer: {
                        lineStyle: {
                            opacity: 0
                        }
                    },
                    position: function (pos, params, dom, rect, size) {
                        var obj = {top: pos[1], left: pos[0]};
                        if ((obj.left + size.contentSize[0]) > size.viewSize[0]) {
                            obj.left = obj.left - size.contentSize[0];
                        }
                        return obj;
                    },
                    textStyle: {
                        fontSize: 19,
                        fontFamily: 'Arial'
                    },
                    formatter: function (a) {
                        return utils.toThousands(a[0].data)
                    }
                },
                grid: {
                    show: false,
                    top: '18%',
                    left: '8%',
                    right: '4.5%',
                    bottom: '20%',
                    containLabel: true
                },
                xAxis: [{
                    boundaryGap: false,
                    axisLabel: {
                        interval: 0,
                        rotate: -90,
                        color: '#c8cacc',
                        margin: 23,
                        fontSize: 23,
                        fontFamily: 'Arial',
                        formatter: function (a) {
                            return a.substr(2, 5)
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    splitArea: {
                        show: false
                    },
                    type: 'category',
                    data: []
                }],
                yAxis: [{
                    nameGap: 30,
                    nameTextStyle: {
                        fontFamily: 'Microsoft YaHei'
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#8b8d90',
                            type: 'dotted',
                            opacity: 0.2
                        }
                    },
                    splitArea: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        margin: 26,
                        formatter: function (value, index) {
                            return (value / 10000) + ' 万';
                        },
                        fontSize: 22,
                        fontWeight: 'bold',
                        fontFamily: 'Microsoft YaHei',
                        color: '#c8cacc'
                    }
                }, {
                    show: false,
                    axisLabel: {
                        show: false,
                        formatter: function (value, index) {
                            return (value / 10000) + '万';
                        }
                    }
                }],
                series: [{
                    type: 'bar',
                    barWidth: '25%',
                    itemStyle: {
                        normal: {
                            color: '#2d8fbf'
                        }
                    },
                    data: []
                }, {
                    type: 'line',
                    yAxisIndex: 1,
                    symbol: 'circle',
                    symbolSize: 15,
                    itemStyle: {
                        normal: {
                            color: '#2d8fbf'
                        }
                    },
                    data: []
                }]
            }
            var barSeries = [],
                lineSeries = [],
                xData = [];
            for (var i = 0; i < data.data.length; i++) {
                if (data.data[i].type == '3') {
                    barSeries.push(Number(data.data[i].sumNumber));
                    lineSeries.push(Number(data.data[i].sumNumber) + 200000);
                    xData.push(data.data[i].date);
                }
                if (data.data[i].type == '4') {
                    $('#totalBill').text(utils.toThousands(Number(data.data[i].sumNumber)));
                }
            }
            energyOption.series[0].data = barSeries.reverse();
            energyOption.series[1].data = lineSeries.reverse();
            energyOption.xAxis[0].data = xData.reverse();
            energyChart.setOption(energyOption);

            var currentIndex = -1;
            setInterval(function () {
                var dataLen = energyOption.series[0].data.length;
                // 取消之前高亮的图形
                energyChart.dispatchAction({
                    type: 'downplay',
                    seriesIndex: 0,
                    dataIndex: currentIndex
                });
                currentIndex = (currentIndex + 1) % dataLen;
                // 高亮当前图形
                energyChart.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    dataIndex: currentIndex
                });
                // 显示 tooltip
                energyChart.dispatchAction({
                    type: 'showTip',
                    seriesIndex: 0,
                    dataIndex: currentIndex
                });
            }, 1000);
        },
        // 济南服务跟踪
        serviceTracking: function () {
            // serviceChart = echarts.init(document.getElementById('serviceChart'));
            // serviceOption = {
            //     bmap: {
            //         //上海
            //         // center: [121.50864,31.246261],
            //         //济南
            //         center: [117.033802, 36.667045],
            //         zoom: 12,
            //         roam: true,
            //         mapStyle: {
            //             'styleJson': [
            //                 {
            //                     'featureType': 'water',
            //                     'elementType': 'all',
            //                     'stylers': {
            //                         'color': '#5b4714'
            //                     }
            //                 },
            //                 {
            //                     'featureType': 'land',
            //                     'elementType': 'geometry',
            //                     'stylers': {
            //                         'color': '#090d0f'
            //                     }
            //                 },
            //                 {
            //                     'featureType': 'highway',
            //                     'elementType': 'all',
            //                     'stylers': {
            //                         'color': '#042294'
            //                     }
            //                 },
            //                 {
            //                     'featureType': 'arterial',
            //                     'elementType': 'geometry.fill',
            //                     'stylers': {
            //                         'color': '#000000'
            //                     }
            //                 },
            //                 {
            //                     'featureType': 'arterial',
            //                     'elementType': 'geometry.stroke',
            //                     'stylers': {
            //                         'color': '#0b3d51'
            //                     }
            //                 },
            //                 {
            //                     'featureType': 'local',
            //                     'elementType': 'geometry',
            //                     'stylers': {
            //                         'color': '#000000'
            //                     }
            //                 },
            //                 {
            //                     'featureType': 'railway',
            //                     'elementType': 'geometry.fill',
            //                     'stylers': {
            //                         'color': '#000000'
            //                     }
            //                 },
            //                 {
            //                     'featureType': 'railway',
            //                     'elementType': 'geometry.stroke',
            //                     'stylers': {
            //                         'color': '#1d294f'
            //                     }
            //                 },
            //                 {
            //                     'featureType': 'subway',
            //                     'elementType': 'geometry',
            //                     'stylers': {
            //                         'lightness': -70
            //                     }
            //                 },
            //                 {
            //                     'featureType': 'building',
            //                     'elementType': 'geometry.fill',
            //                     'stylers': {
            //                         'color': '#000000'
            //                     }
            //                 },
            //                 {
            //                     'featureType': 'all',
            //                     'elementType': 'labels.text.fill',
            //                     'stylers': {
            //                         'color': '#857f7f'
            //                     }
            //                 },
            //                 {
            //                     'featureType': 'all',
            //                     'elementType': 'labels.text.stroke',
            //                     'stylers': {
            //                         'color': '#000000'
            //                     }
            //                 },
            //                 {
            //                     'featureType': 'building',
            //                     'elementType': 'geometry',
            //                     'stylers': {
            //                         'color': '#022338'
            //                     }
            //                 },
            //                 {
            //                     'featureType': 'green',
            //                     'elementType': 'geometry',
            //                     'stylers': {
            //                         'color': '#412934'
            //                     }
            //                 },
            //                 {
            //                     'featureType': 'boundary',
            //                     'elementType': 'all',
            //                     'stylers': {
            //                         'color': '#465b6c'
            //                     }
            //                 },
            //                 {
            //                     'featureType': 'manmade',
            //                     'elementType': 'all',
            //                     'stylers': {
            //                         'color': '#022338'
            //                     }
            //                 },
            //                 {
            //                     'featureType': 'label',
            //                     'elementType': 'all',
            //                     'stylers': {
            //                         'visibility': 'off'
            //                     }
            //                 }
            //             ]
            //         }
            //     },
            //     series: [{
            //         name: '济南服务跟踪',
            //         type: 'lines',
            //         coordinateSystem: 'bmap',
            //         polyline: true,
            //         data: [],
            //         silent: true,
            //         lineStyle: {
            //             normal: {
            //                 opacity: 0.2,
            //                 width: 1
            //             }
            //         },
            //         progressiveThreshold: 500,
            //         progressive: 200
            //     }, {
            //         type: 'lines',
            //         coordinateSystem: 'bmap',
            //         polyline: true,
            //         data: [],
            //         lineStyle: {
            //             normal: {
            //                 width: 0
            //             }
            //         },
            //         effect: {
            //             constantSpeed: 20,
            //             show: true,
            //             trailLength: 0.1,
            //             symbolSize: 1.5
            //         },
            //         zlevel: 1
            //     }]
            // };
            // $.ajax({
            //     // url: '../js/json/shanghai.json',
            //     // url: '/saas20/api/2017063002/Apartment/free/largescreenview/ajax/getpersoonmap',
            //     url: '/saas20/api/2017090501/1/free/largescreenview/ajax/getpersoonmap',
            //     type: 'POST',
            //     async: true,
            //     data: {
            //         cityid: 137,
            //         start: '2017-09-01',
            //         end: '2017-09-09'
            //     },
            //     dataType: 'json',
            //     success: function (data, textStatus, jqXHR) {
            //         if (data.errorCode == 0) {
            //             var data = data.data;
            //             var map = {},
            //                 dest = [];
            //             for (var i = 0; i < data.length; i++) {
            //                 var ai = data[i];
            //                 var point = []
            //                 if (!map[ai.userId]) {
            //                     point.push([Number(ai.longitude), Number(ai.latitude)])
            //                     dest.push({
            //                         userId: ai.userId,
            //                         points: point
            //                     });
            //                     map[ai.userId] = ai;
            //                 } else {
            //                     for (var j = 0; j < dest.length; j++) {
            //                         var dj = dest[j];
            //                         if (dj.userId == ai.userId) {
            //                             dj.points.push([Number(ai.longitude), Number(ai.latitude)]);
            //                             break;
            //                         }
            //                     }
            //                 }
            //             }
            //             var linePoints = [];
            //             for (var i = 0; i < dest.length; i++) {
            //                 if (dest[i].points.length > 1)
            //                     linePoints.push(dest[i].points);
            //             }
            //             var hStep = 300 / (linePoints.length - 1);
            //             var serviceLines = [].concat.apply([], linePoints.map(function (points, idx) {
            //                 return {
            //                     coords: points,
            //                     lineStyle: {
            //                         normal: {
            //                             color: echarts.color.modifyHSL('#5A94DF', Math.round(hStep * idx))
            //                         }
            //                     }
            //                 };
            //             }));
            //             serviceOption.series[0].data = serviceLines;
            //             serviceOption.series[1].data = serviceLines;
            //
            //             serviceChart.setOption(serviceOption);
            //         }
            //     },
            //     error: function (xhr, textStatus) {
            //     }
            // })
        }
    };
    //客房分布
    var guestDistribution = {
        //获取数据
        getData: function () {
            // $.ajax({
            //     type: 'POST',
            //     dataType: "json",
            //     url: "/saas20/api/2017063002/Apartment/free/largescreenview/city/list",
            //     //url: '../js/json/guest.json',
            //     success: function (data) {
            //         //var data = data.data;
            //         if (data.errorCode == 0) {
            //             guestDistribution.renderData(data.data);
            //         }
            //     }
            // });
            guestDistribution.renderData(city.data);
            //return guestDistribution.testData;
        },
        //渲染数据
        renderData: function (dataSource) {
            var result = '';
            for (var i = 0, len = dataSource.length; i < len; i++) {
                result += '<li class="guest-content-li"><ul class="guest-inner clear"><li style="width:40%;padding-left:20px"class="ell">' + dataSource[i].cityName + '</li>' +
                    '<li style="width:35%" class="ell">' + dataSource[i].orgCount + '</li>' +
                    '<li style="width:25%" class="ell">' + dataSource[i].roomCount + '</li>' +
                    '</ul></li>';
            }
            $('#contentTable').append(result);
            $('.guest-content').myScroll({
                speed: 60,  //滚动速度,值越大速度越慢
                rowHeight: 65 //每行的高度
            });
        }
    };
    //在线缴费
    var onlinePay = {
        //获取数据
        getData: function (data) {
            var dateArr = [],
                onlinePayAmount = [],
                onlinePayTimes = [];
            var data = data.data;
            for (var len = data.length, i = len - 1; i >= 0; i--) {
                if (data[i].type == 1) { //type=1在线缴费次数 tpye=2在线缴费金额
                    dateArr.push(data[i].date.substr(2, 5));
                    onlinePayTimes.push(data[i].sumNumber);
                }
                if (data[i].type == 2) {
                    onlinePayAmount.push(data[i].sumNumber);

                }
            }
            var option = onlinePay.getOption(dateArr, onlinePayAmount, onlinePayTimes);
            onlinePay.renderChart(option);
        },
        //获取配置项
        getOption: function (dateArr, onlinePayAmount, onlinePayTimes) {
            return {
                grid: {
                    top: '18.5%',
                    left: '1%',
                    right: '0',
                    bottom: '20.5%',
                    containLabel: true
                },
                legend: {
                    right: 'right',
                    orient: 'vertical',
                    itemHeight: 5,
                    show: true,
                    selectedMode: false,
                    /*     data: [{
                     name: '在线缴费次数',
                     icon: 'react'
                     }, {
                     icon: 'react',
                     name: '在线缴费金额'
                     }],*/
                    textStyle: {
                        color: '#fff',
                        fontSize: 23,
                        fontFamily: 'Microsoft YaHei'
                    }
                },
                tooltip: {
                    position: function (pos, params, dom, rect, size) {
                        var obj = {top: pos[1], left: pos[0]};
                        if ((obj.left + size.contentSize[0]) > size.viewSize[0]) {
                            obj.left = obj.left - size.contentSize[0];
                        }
                        return obj;
                    },
                    textStyle: {
                        fontSize: 19,
                        fontFamily: 'Arial'
                    },
                    formatter: function (params) {
                        return utils.toThousands(params.data);
                    }
                },
                textStyle: {
                    color: '#fff'
                },
                xAxis: {
                    data: dateArr,
                    /*splitLine: {
                     show: true,
                     lineStyle: {
                     color: '#151624'
                     }
                     },*/
                    axisLabel: {
                        interval: 0,
                        rotate: -90,
                        margin: 12,
                        fontFamily: 'Arial',
                        fontSize: 23,
                        color: '#c9cbcc'
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    splitArea: {
                        show: false
                    },
                    boundaryGap: false
                },
                yAxis: [
                    {
                        type: 'value',
                        axisLabel: {
                            formatter: function (value, index) {
                                return utils.toThousands(value / 10000) + '万';
                            },
                            color: '#f89f9f',
                            fontWeight: 'bold',
                            fontFamily: 'Microsoft YaHei',
                            fontSize: 21,
                            margin: 26
                        },
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        splitLine: {
                            lineStyle: {
                                color: '#8b8d90',
                                type: 'dotted',
                                opacity: 0.2
                            }
                        },
                        scale: true
                    },
                    {
                        type: 'value',
                        axisLabel: {
                            formatter: function (value) {
                                return utils.toThousands(value);
                            },
                            color: '#619dbc',
                            fontFamily: 'Microsoft YaHei',
                            fontSize: 21,
                            margin: 23
                        },
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        splitLine: {
                            show: false
                        }
                    }
                ],
                series: [{
                    name: '在线缴费金额',
                    type: 'line',
                    showSymbol: false,
                    data: onlinePayAmount,
                    itemStyle: {
                        normal: {
                            color: 'rgba(226, 43, 17, 1)'
                        }
                    },
                    lineStyle: {
                        normal: {
                            color: 'rgba(226, 43, 17, 0.2)'
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(226, 43, 17, 1)'
                            }, {
                                offset: 0.5,
                                color: 'rgba(226, 43, 17, 0.5)'
                            }, {
                                offset: 1,
                                color: 'rgba(226, 43, 17, 0)'
                            }])
                        }
                    }
                }, {
                    name: '在线缴费次数',
                    type: 'line',
                    yAxisIndex: 1,
                    itemStyle: {
                        normal: {
                            color: '#1fa7d8'
                        }
                    },
                    symbol: 'circle',
                    symbolSize: 15,
                    data: onlinePayTimes
                }]
            };
        },
        renderChart: function (option) {
            onlinePayChart.setOption(option);
            var currentIndex = -1;
            setInterval(function () {
                const dataLen = option.series[1].data.length;
                onlinePayChart.dispatchAction({
                    type: 'downplay',
                    seriesIndex: 1,
                    dataIndex: currentIndex
                });
                currentIndex = (currentIndex + 1) % dataLen;
                // 显示 tooltip
                onlinePayChart.dispatchAction({
                    type: 'showTip',
                    seriesIndex: 1,
                    dataIndex: currentIndex
                });
                onlinePayChart.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 1,
                    dataIndex: currentIndex
                });
            }, 1000);
        }
    };
    /**
     * 通过接口获取能耗监控和在线缴费的数据
     * @param callBack
     */
    var getEnergyConsumptionData = function (callBack) {
        callBack(energy)
        // $.ajax({
        //     type: 'POST',
        //     dataType: "json",
        //     url: "/saas20/api/2017063002/Apartment/free/largescreenview/energy/consumption",
        //     // url: "../js/json/energy.json",
        //     success: function (data) {
        //         if (data.errorCode == 0) {
        //             callBack && callBack(data);
        //         }
        //     },
        //     error: function (xhr, textStatus) {
        //     }
        // });
    };

    $(function () {
        utils.renderPageSize();
        onlinePayChart = echarts.init(document.getElementById('onlinePay'));
        energyChart = echarts.init(document.getElementById('chart3'));
        $(window).on('resize', function () {
            utils.renderPageSize();
            onlinePayChart.resize();
            roomChart.resize();
            energyChart.resize();
            // serviceChart.resize();
            chart.resize();
        });
        // setInterval(function () {
        //     var option = roomChart.getOption();
        //     roomChart.dispose();
        //     roomChart = echarts.init(document.getElementById('roomChart'));
        //     roomChart.setOption(option);
        // }, 5000);
        renderCharts.renderMap();
        renderCharts.roomNumber();
        renderCharts.serviceTracking();
        getEnergyConsumptionData(function (data) {
            //能耗监控
            renderCharts.energyMonitor(data);
            //在线缴费
            onlinePay.getData(data);
        });
        //客房分布
        guestDistribution.getData();
    });
})(window, jQuery);