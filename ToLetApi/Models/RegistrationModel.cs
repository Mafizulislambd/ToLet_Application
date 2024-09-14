using System.ComponentModel.DataAnnotations;

namespace ToLetApi.Models
{
    public class RegistrationModel
    {
        private int _id;
        private string _name;  
        private string _email;  
        private string _password;   
        private string _phone;
        private string _address;
        private string _city;
        private string _zip;    
        private string _country;
        private string _zipCode;
        private string _cityCode;
        private string _countryCode;
        [Key]
        public int Id
        {
            get { return _id; } 
            set { _id = value; }    

        }
        public string Name
        {
            get { return _name; }
                
            set { _name = value; }

        }
        public string Email
        {
            get { return _email; }
            set
            {
                _email = value;
            }         
        }
        public string Password
        {
                get { return _password; }
            set
            {
                _password = value;
            }   
        }
        public  string Phone
        {
            get { return _phone; }
            set
            {
                _phone = value;
            }   
        }     
        public string Address
        {
            get { return _address; }
            set
            {
                _address = value;
            }
        }
        public string City
        {
            get { return _city; }
            set
            {
                _city = value;
            }
                
        }
        public string Zip
        {
                get { return _zip; }
            set
            {
                _zip = value;
            }   
        }
        public string Country
        {
            get { return _country; }
            set
            {
                _country = value;
            }   
        }
        public string ZipCode
        {
            get { return _zipCode; }
            set
            {
                _zipCode = value;
            }   
        }
        public string CityCode
        {
            get { return _cityCode; }
            set
            {
                _cityCode = value;
            }     
        }
        public string CountryCode
        {
            get { return _countryCode; }    
             set { _countryCode = value; }

        } 
    }

}
