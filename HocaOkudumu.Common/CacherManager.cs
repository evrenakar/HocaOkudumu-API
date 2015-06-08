using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.Caching;

namespace HocaOkudumu.Common
{
    public static class CacheManager 
    {
        private static readonly TimeSpan _defaultCacheTime;
       

        public static T Get<T>(string key)
        {
            return (T)HttpRuntime.Cache[key];
        }

        public static bool Add<T>(string key, T value)
        {
            return Add(key, value, _defaultCacheTime);
        }


        public static bool Add<T>(string key, T value, DateTime expiresAt)
        {

            HttpRuntime.Cache.Insert(key, value, null, expiresAt, Cache.NoSlidingExpiration, CacheItemPriority.High, null);
            return true;
        }

        public static bool Add<T>(string key, T value, TimeSpan expiresIn)
        {
            var dateTime = DateTime.Now.AddSeconds(expiresIn.TotalSeconds);
            return Add(key, value, dateTime);
        }
        public static bool Remove(string key)
        {
            HttpRuntime.Cache.Remove(key);
            return true;
        }

        public static void RemoveAll(IEnumerable<string> keys)
        {
            foreach (var key in keys)
            {
                Remove(key);
            }
        }

        public static void RemoveAll()
        {
            var enumerator = HttpRuntime.Cache.GetEnumerator();

            while (enumerator.MoveNext())
            {
                Remove(enumerator.Key.ToString());

            }
        }

        public static bool Contains(string key)
        {
            var enumerator = HttpRuntime.Cache.GetEnumerator();

            while (enumerator.MoveNext())
            {
                return enumerator.Key == key;
            }
            return false;
        }

        public static void Dispose()
        {
           // GC.SuppressFinalize(this);
        }
    }
}
