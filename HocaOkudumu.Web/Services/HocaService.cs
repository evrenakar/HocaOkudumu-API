using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using HocaOkudumu.Common;
using HocaOkudumu.Common.Model;
using HocaOkudumu.Web.Models;

namespace HocaOkudumu.Web.Services
{
    public class HocaService : ServiceStack.ServiceInterface.Service
    {

        public SeansModel Get(NamazSaatiRequestModel request)
        {
            if(string.IsNullOrWhiteSpace(request.Sehir) || string.IsNullOrWhiteSpace(request.Ulke) || string.IsNullOrWhiteSpace(request.Tarih))
                throw new ArgumentException("Bütün alanları eksiksiz göndermeniz gerekmektedir.");
            var cacheKey = string.Format("{0}-{1}-{2}", request.Sehir, request.Ulke, request.Tarih);
            var cacheResult = CacheManager.Get<SeansModel>(cacheKey);
            if (cacheResult != null)
                return cacheResult;
            var data = XmlHelper.GetXmlData(request.Sehir, request.Ulke);
            var result = data.FirstOrDefault(q => q.Gun == request.Tarih);
            if (result != null)
            {
                CacheManager.Add(cacheKey, result, DateTime.Now.AddDays(1));
                return result;
            }
            return null;
        }

        public List<SeansModel> Get(NamazSaatiListRequestModel request)
        {
            if (string.IsNullOrWhiteSpace(request.Sehir) || string.IsNullOrWhiteSpace(request.Ulke))
                throw new ArgumentException("Bütün alanları eksiksiz göndermeniz gerekmektedir.");
            var cacheKey = string.Format("{0}-{1}", request.Sehir, request.Ulke);
            var cacheResult = CacheManager.Get<List<SeansModel>>(cacheKey);
            if (cacheResult != null)
                return cacheResult;
            var data = XmlHelper.GetXmlData(request.Sehir, request.Ulke);
            if (data != null)
            {
                CacheManager.Add(cacheKey, data, DateTime.Now.AddDays(1));
                return data;
            }
            return null;
        }
    }
}