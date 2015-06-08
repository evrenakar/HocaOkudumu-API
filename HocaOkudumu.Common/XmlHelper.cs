using System;
using System.Collections.Generic;
using System.Xml;
using HocaOkudumu.Common.Model;
using RestSharp;

namespace HocaOkudumu.Common
{
    public static class XmlHelper
    {
        public static List<SeansModel> GetXmlData(string city, string country)
        {
            var cacheKey = string.Format("{0}-{1}", city, country);
            var cacheResult = CacheManager.Get<List<SeansModel>>(cacheKey);
            if (cacheResult != null)
                return cacheResult;

            var result = new List<SeansModel>();

            var client = new RestClient("http://www.belediyeyazilim.com");
            var request = new RestRequest("/WS/vakithes_namazsonuc_xml.asp");
            request.AddParameter("sehirler", city);
            request.AddParameter("ulk", country);
            var apiResult = client.Execute(request);

            XmlDocument xmlDoc = new XmlDocument();
            xmlDoc.LoadXml(apiResult.Content);
            var element = xmlDoc.ChildNodes[0];
            foreach (XmlNode item in element)
            {
                result.Add(new SeansModel
                {
                    Gun = item.ChildNodes[0].InnerText,
                    Imsak = item.ChildNodes[1].InnerText.Replace(" ", ":"),
                    Gunes = item.ChildNodes[2].InnerText.Replace(" ", ":"),
                    Oglen = item.ChildNodes[3].InnerText.Replace(" ", ":"),
                    Ikindi = item.ChildNodes[4].InnerText.Replace(" ", ":"),
                    Aksam = item.ChildNodes[5].InnerText.Replace(" ", ":"),
                    Yatsi = item.ChildNodes[6].InnerText.Replace(" ", ":"),
                    Kible = item.ChildNodes[7].InnerText.Replace(" ", ":"),
                });
            }

            CacheManager.Add(cacheKey, result, DateTime.Now.AddDays(1));
            return result;
        }
    }
}
