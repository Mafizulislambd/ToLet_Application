using System.ComponentModel.DataAnnotations;

namespace LogInApi.Models
{
    public class Country
    {
        private int _countryId;
        private string _countryName;
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
            get { return _countryName; }
            set { _countryName = value; }

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
