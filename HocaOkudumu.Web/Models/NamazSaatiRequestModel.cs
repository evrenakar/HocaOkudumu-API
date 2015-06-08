using ServiceStack.ServiceHost;

namespace HocaOkudumu.Web.Models
{
    [Route("/namazsaati", "GET")]
    public class NamazSaatiRequestModel
    {
        [ApiMember(Name = "Tarih", Description = "Namaz saatini istediğiniz tarihi g.a.y formatında gönderiniz.", ParameterType = "query", IsRequired = false)]
        public string Tarih { get; set; }

        [ApiMember(Name = "Sehir", Description = "Namaz saatini istediğiniz şehir bilgisini büyük harf ve Türkçe karakter olmadan gönderin.", ParameterType = "query", IsRequired = false)]
        public string Sehir { get; set; }

        [ApiMember(Name = "Ulke", Description = "Namaz saatini istediğiniz ülke bilgisini büyük harf ve Türkçe karakter olmadan gönderin.", ParameterType = "query", IsRequired = false)]
        public string Ulke { get; set; }
    }

    [Route("/namazsaatiliste", "GET")]
    public class NamazSaatiListRequestModel
    {
        [ApiMember(Name = "Sehir", Description = "Namaz saatini istediğiniz şehir bilgisini büyük harf ve Türkçe karakter olmadan gönderin.", ParameterType = "query", IsRequired = false)]
        public string Sehir { get; set; }

        [ApiMember(Name = "Ulke", Description = "Namaz saatini istediğiniz ülke bilgisini büyük harf ve Türkçe karakter olmadan gönderin.", ParameterType = "query", IsRequired = false)]
        public string Ulke { get; set; }
    }
}