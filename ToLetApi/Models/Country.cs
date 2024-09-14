using System.ComponentModel.DataAnnotations;

namespace ToLetApi.Models
{
    public class Country
    {

        private int _countryId;
        private string _name;
        private string _description;
        private string _countryCode;

        [Key]
        public int CountryId
        {
            get { return _countryId; }
            set { _countryId = value; }

        }
        public string Name
        {
            get { return _name; }
            set { _name = value; }

        }
        public string Description
        {
            get { return _description; }
            set { _description = value; }

        }
        public string CountryCode
        {
            get { return _countryCode; }
            set
            {
                _countryCode = value;
            }
        }
    }
}
