using System;
using System.Xml.Serialization;

namespace HocaOkudumu.Common.Model
{
    [Serializable]
    [XmlRoot("xml", Namespace = "")]
    public class SeansModel
    {
        public string Gun
        {
            get { return MiladiTarihUzunIso8601.ToString("dd.MM.yyyy"); }
        }

        public string Imsak { get; set; }
        public string Gunes { get; set; }

        public string Oglen
        {
            get { return Ogle; }
        }

        public string Ikindi { get; set; }
        public string Aksam { get; set; }
        public string Yatsi { get; set; }

        public string Kible
        {
            get { return KibleSaati; }
        }


        public string Ogle { get; set; }
        public DateTime MiladiTarihUzunIso8601 { get; set; }

        public string KibleSaati { get; set; }
    }
}
