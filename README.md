# HocaOkudumu-API

<strong>API KULLANIM</strong>

Hocaokudumu.com iki adet servis sunmaktadır.

1) İstenilen şehrin istenilen gününe ait olan namaz saatlerini getiren ("/namazsaati")

2) İstenilen şehrin son 30 günlük namaz saatlerini getiren. ("/namazsaatiliste")

"/namazsaati" bu servis sadece tek bir günün namaz saatlerini getirir. Servisin çalışması için gerekli olan parametreler Tarih, Sehir ve Ulke'dir.

Parametreleri verirken dikkat edilmesi gerekenler, Ulke ve Sehir parametreleri büyük harfler ile ve Türkçe (İ,Ş,Ğ,Ü,Ç vb.) karakter olmadan gönderilmelidir.

Örnek JSON formatları

Input : {"Tarih":"String","Sehir":"String","Ulke":"String"}

Output : {"Gun":"String","Imsak":"String","Gunes":"String","Oglen":"String","Ikindi":"String","Aksam":"String","Yatsi":"String","Kible":"String"}

API örneği

Tarih bilgisi ise örnekteki gibi gönderilmelidir. Örn: 31.01.2015 Dönüş parametreleri: Gun, Imsak, Gunes, Oglen, Ikindi, Aksam, Yatsi, Kible

"/namazsaatiliste" Bu servis gelecek 30 günün namaz saatlerini getirir. Servisin çalışması için gerekli olan parametreler: Sehir ve Ulke bilgisi.

Parametreler verirken dikkat edilmesi gerekenler.Ulke ve Sehir parametreleri Buyuk harfler ile ve Tükçe karakter olmadan gönderilmelidir. Dönüş parametreleri liste olarak: Gun, Imsak, Gunes, Oglen, Ikindi, Aksam, Yatsi, Kible
