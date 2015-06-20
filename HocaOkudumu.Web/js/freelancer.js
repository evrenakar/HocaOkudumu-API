/*!
 * Script Yazarı: Evren AKAR
 * API Yazarı: Fehmi Anaç
 * www.hocaokudumu.com
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

/*RAMAZAN İFTAR VE SAHUR SAYACI*/

    //Değişkenler
    //Default Şehir
    var cityValues = "";
    var cityName = "";

    var gun = "";
    var aksam = "";
    var imsak = "";
    var gunAfter = "";
    var aksamAfter = "";
    var imsakAfter = "";
	
	var ogle = "";
	var ikindi = "";
	var yatsi = "";

    //Şu an
    var now = "";

    function ajaxCall(){
        //Şu an
        now = new Date();

        var dayDate = now.getDate();
        if (dayDate < 10) {
            dayDate = '0' + dayDate;
        }
        var monthDate = now.getMonth() + 1;
        if (monthDate < 10) {
            monthDate = '0' + monthDate;
        }
        var yearDate = now.getFullYear();

        //Yarın
        var tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        var afterDayDate = tomorrow.getDate();
        if (afterDayDate < 10) {
            afterDayDate = '0' + afterDayDate;
        }
        var afterMonthDate = tomorrow.getMonth() + 1;
        if (afterMonthDate < 10) {
            afterMonthDate = '0' + afterMonthDate;
        }
        var afteryearDate = tomorrow.getFullYear();

        //Ajax ile Json'a istek yap tarih datasını çek
        //Bugünün datası için yapılan istek
        $.ajax({
            type: 'GET',
            url: 'http://hocaokudumu.com/namazsaati',
            data: {
                'sehir': cityValues,
                'Ulke': 'TURKIYE',
                'Tarih': dayDate + '.' + monthDate + '.' + yearDate
            },
            dataType: 'json',
            success: function (data) {
                //Json'ı yorumluyoruz
                gun = (data.Gun);
                aksam = (data.Aksam);
                imsak = (data.Imsak);
				ogle = (data.Oglen);
				ikindi = (data.Ikindi);
				yatsi = (data.Yatsi);
                afterDay();
            },
            error: function (e) {
                console.log(e);
            }
        });

        function afterDay(){
            //Yarının datası için yapılan istek
            $.ajax({
                type: 'GET',
                url: 'http://hocaokudumu.com/namazsaati',
                data: {
                    'sehir': cityValues,
                    'Ulke': 'TURKIYE',
                    'Tarih': afterDayDate + '.' + afterMonthDate + '.' + afteryearDate
                },
                dataType: 'json',
                success: function (newData) {
                    //Json'ı yorumluyoruz
                    gunAfter = (newData.Gun);
                    aksamAfter = (newData.Aksam);
                    imsakAfter = (newData.Imsak);
					ogleAfter = (newData.Oglen);
					ikindiAfter = (newData.Ikindi);
					yatsiAfter = (newData.Yatsi);
                    sayac();
                },
                error: function (e) {
                    console.log(e);
                }
            });
        }
    }

    function sayac() {
        // Countdown sıfrla
        $('#countdown_dashboard').stopCountDown();

        //Sayacı çiz
        if (gun.length > 0) {
            //Dataları oluştur
            //Şu an Time formatında
            var time = now.getTime();

            //Gün bilgisi
            var gunData = gun.split(".");
            var gunData1 = gunData[0];
            var gunData2 = gunData[1];
            var gunData3 = gunData[2];

            //Bir sonraki gün bilgisi
            var gunAfterData = gunAfter.split(".");
            var gunAfterData1 = gunAfterData[0];
            var gunAfterData2 = gunAfterData[1];
            var gunAfterData3 = gunAfterData[2];

            //İftar vakti
            var aksamData = aksam.split(":");
            var aksamData1 = aksamData[0];
            var aksamData2 = aksamData[1];

            //Sahur vakti
            var imsakData = imsak.split(":");
            var imsakData1 = imsakData[0];
            var imsakData2 = imsakData[1];
			
			//Öğle vakti
            var ogleData = ogle.split(":");
            var ogleData1 = ogleData[0];
            var ogleData2 = ogleData[1];
			
			//İkindi vakti
            var ikindiData = ikindi.split(":");
            var ikindiData1 = ikindiData[0];
            var ikindiData2 = ikindiData[1];
			
			//Yatsı vakti
            var yatsiData = yatsi.split(":");
            var yatsiData1 = yatsiData[0];
            var yatsiData2 = yatsiData[1];
			
			//Bir sonraki İftar vakti
            var aksamAfterData = aksam.split(":");
            var aksamAfterData1 = aksamAfterData[0];
            var aksamAfterData2 = aksamAfterData[1];

            //Bir sonraki Sahur vakti
            var imsakAfterData = imsak.split(":");
            var imsakAfterData1 = imsakAfterData[0];
            var imsakAfterData2 = imsakAfterData[1];
			
			//Bir sonraki Öğle vakti
            var ogleAfterData = ogle.split(":");
            var ogleAfterData1 = ogleAfterData[0];
            var ogleAfterData2 = ogleAfterData[1];
			
			//Bir sonraki İkindi vakti
            var ikindiAfterData = ikindi.split(":");
            var ikindiAfterData1 = ikindiAfterData[0];
            var ikindiAfterData2 = ikindiAfterData[1];

            //İftarı Time formatına çeviriyoruz
            var iftarDate = new Date();
            iftarDate.setDate(gunData1);
            iftarDate.setMonth(gunData2 - 1);
            iftarDate.setHours(aksamData1);
            iftarDate.setMinutes(aksamData2);
            var iftarTime = iftarDate.getTime();

            //Sahuru Time formatına çeviriyoruz
            var sahurDate = new Date();
            sahurDate.setDate(gunData1);
            sahurDate.setMonth(gunData2 - 1);
            sahurDate.setHours(imsakData1);
            sahurDate.setMinutes(imsakData2);
            var sahurTime = sahurDate.getTime();

            //00:00'dan sonraki sahuru Time formatına çeviriyoruz
            var sahurAfterDate = new Date();
            sahurAfterDate.setDate(gunAfterData1);
            sahurAfterDate.setMonth(gunAfterData2 - 1);
            sahurAfterDate.setHours(imsakAfterData1);
            sahurAfterDate.setMinutes(imsakAfterData2);
            var sahurAfterTime = sahurAfterDate.getTime();
			
			$('#getCurrentDate').text(gunData1 + '.' + gunData2 + '.' + gunData3);			

            //Hesaplamaya Başla
            if (time < sahurTime) {
                //00:00'dan sonra sahura kadar
				console.log("hocaokudumu.com");

                $(".iftarImsak .text").html("sahur vakti:");
                $("#countdownContainer .countdownFirstText").html("SAHURA");
                $(".iftarImsak .clock strong").html("0" + imsakData1 + ":" + imsakData2);
				
				$('.imsakVakti').text('İmsak: ' + imsakData1 + ':' + imsakData2);
				$('.ogleVakti').text('Öğle: ' + ogleData1 + ':' + ogleData2);
				$('.ikindiVakti').text('İkindi: ' + ikindiData1 + ':' + ikindiData2);
				$('.aksamVakti').text('Aksam: ' + aksamData1 + ':' + aksamData2);
				$('.yatsiVakti').text('Yatsı: ' + yatsiData1 + ':' + yatsiData2);

                $('#countdown_dashboard').countDown({
                    targetDate: {
                        'day': gunData1,
                        'month': gunData2,
                        'year': gunData3,
                        'hour': imsakData1,
                        'min': imsakData2,
                        'sec': 59
                    },
                    onComplete: function () {
                        ajaxCall();
                    }
                });
            }
            else if (time === sahurTime) {
                //Sahur zamanı
            }
            else if (time < iftarTime) {
                //Sahurdan sonra iftara kadar

                console.log("iftara kaldı - hocaokudumu.com");

                $(".iftarImsak .text").html("iftar vakti:");
                $("#countdownContainer .countdownFirstText").html("İFTARA");
                $(".iftarImsak .clock strong").html(aksamData1 + ":" + aksamData2);
				
				$('.imsakVakti').text('İmsak: ' + imsakData1 + ':' + imsakData2);
				$('.ogleVakti').text('Öğle: ' + ogleData1 + ':' + ogleData2);
				$('.ikindiVakti').text('İkindi: ' + ikindiData1 + ':' + ikindiData2);
				$('.aksamVakti').text('Aksam: ' + aksamData1 + ':' + aksamData2);
				$('.yatsiVakti').text('Yatsı: ' + yatsiData1 + ':' + yatsiData2);

                $('#countdown_dashboard').countDown({
                    targetDate: {
                        'day': gunData1,
                        'month': gunData2,
                        'year': gunData3,
                        'hour': aksamData1,
                        'min': aksamData2,
                        'sec': 59
                    },
                    onComplete: function () {
                        ajaxCall();
                    }
                });
            }
            else if (time === iftarTime) {
                //İftar zamanı
            }
            else if (time < sahurAfterTime) {
                //İftardan sonra 00:00'a kadar

                console.log("Sonraki Sahur - hocaokudumu.com");

                $(".iftarImsak .text").html("sahur vakti:");
                $("#countdownContainer .countdownFirstText").html("SAHURA");
                $(".iftarImsak .clock strong").html("0" + imsakAfterData1 + ":" + imsakAfterData2);
				
				$('.imsakVakti').text('İmsak: ' + imsakAfterData1 + ':' + imsakAfterData2);
				$('.ogleVakti').text('Öğle: ' + ogleAfterData1 + ':' + ogleAfterData2);
				$('.ikindiVakti').text('İkindi: ' + ikindiAfterData1 + ':' + ikindiAfterData2);
				$('.aksamVakti').text('Aksam: ' + aksamAfterData1 + ':' + aksamAfterData2);
				$('.yatsiVakti').text('Yatsı: ' + yatsiData1 + ':' + yatsiData2);

                $('#countdown_dashboard').countDown({
                    targetDate: {
                        'day': gunAfterData1,
                        'month': gunAfterData2,
                        'year': gunAfterData3,
                        'hour': imsakAfterData1,
                        'min': imsakAfterData2,
                        'sec': 59
                    },
                    onComplete: function () {
                        ajaxCall();
                    }
                });
            }
            else {
                console.log("Garip şeyler oluyor.. - hocaokudumu.com");
            }
        }
    }

    //Cookiesi yoksa
    if ($.cookie('sehir') === undefined) {
        $.cookie('sehir', "ISTANBUL", {expires: 40, path: '/'});
        $.cookie('cityName', "İstanbul", {expires: 40, path: '/'});
        cityValues = $.cookie('sehir');
        cityName = $.cookie('cityName');
        $(".iftarImsak .city").html(cityName);

        //Sayacı çalıştır
        ajaxCall();
    }
    //Cookiesi varsa
    else {
        cityValues = $.cookie('sehir');
        cityName = $.cookie('cityName');
        $(".iftarImsak .city").html(cityName);

        //Sayacı çalıştır
        ajaxCall();
    }

    //Şehir değiştir butonuna tıklandı
    $(".cityChangeButton").click(function () {
    	$("#citySelect").prop('selectedIndex', 0);
        $(".iftarImsakInfo").hide();
        $(".countdownShow").hide();
        $(".selectForm").show();
    });

    //Selectboxta bir değişiklik oldu!
    $("#citySelect").change(function () {
        cityValues = $(this).val();
        cityName = $("#citySelect :selected").text();
        $.cookie('sehir', cityValues, {expires: 40, path: '/'});
        $.cookie('cityName', cityName, {expires: 40, path: '/'});
        $(".iftarImsak .city").html(cityName);

        //Sayacı çalıştır
        ajaxCall();

        //Selecti gizle bilgi ekranını aç
        $(".selectForm").hide();
        $(".iftarImsakInfo").show();
        $(".countdownShow").show();
    });

/*RAMAZAN İFTAR VE SAHUR SAYACI SON*/
