using System;
using System.Xml.Serialization;

namespace HocaOkudumu.Common.Model
{
    [Serializable]
    [XmlRoot("xml", Namespace = "")]
    public class SeansModel
    {
        public string Gun { get; set; }
        public string Imsak { get; set; }
        public string Gunes { get; set; }
        public string Oglen { get; set; }
        public string Ikindi { get; set; }
        public string Aksam { get; set; }
        public string Yatsi { get; set; }
        public string Kible { get; set; }

    }
}
