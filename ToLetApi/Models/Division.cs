using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ToLetApi.Models
{
    public class Division
    {
        private int _divisionId;
        private string _name;
        private string _description;
        private string _divisionCode;

        private int _countryId;
        [Key]
        public int DivisionId
        {
            get { return _divisionId; }
            set { _divisionId = value; }

        }
        public string Name
        {
            get { return _name; }
            set { _name = value; }

        }
        public string Description
        {
            get { return _description; }
            set
            {
                _description = value;
            }
        }
        public string DivisionCode
        {
            get { return _divisionCode; }
            set
            {
                _divisionCode = value;
            }
        }
        //[Display(Name = "Country")]
        public int CountryId
        {
            get { return _countryId; }
            set { _countryId = value; }
        }
        //[ForeignKey("CountryId")]
        //public virtual Country Country
        //{
        //    get;
        //    set;
        //}
    }
}
