using System;
using System.Collections.Generic;
using System.Linq;
using System.Xml;
using HocaOkudumu.Common.Model;
using RestSharp;

namespace HocaOkudumu.Common
{
    public static class XmlHelper
    {
        public static List<SeansModel> GetXmlData(string city, string country)
        {
            if (city == "ISTANBUL")
                city = "İSTANBUL";
            var cacheKey = string.Format("{0}-{1}", city, country);
            var cacheResult = CacheManager.Get<List<SeansModel>>(cacheKey);
            if (cacheResult != null)
                return cacheResult;

            var client = new RestClient("https://ezanvakti.herokuapp.com");
            var request = new RestRequest("/sehirler?ulke=2");
            var cityList = client.Get<List<Cities>>(request);
            var cityModel = cityList.Data.FirstOrDefault(q => q.SehirAdi == city);

            var req = new RestRequest("/ilceler?sehir=" + cityModel.SehirID);
            var ilceList = client.Get<List<DistrictModel>>(req);
            var ilceModel = ilceList.Data.FirstOrDefault().IlceID;

            var reqs = new RestRequest("/vakitler?ilce=" + ilceModel);
            var result = client.Get<List<SeansModel>>(reqs).Data;
            CacheManager.Add(cacheKey, result, DateTime.Now.AddDays(1));
            return result;
        }
    }
}
