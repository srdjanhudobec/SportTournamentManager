using DataAccessLayer.Model;

namespace BusinessLogicLayer.DTOs
{
    public class TimGetResponse
    {

        public string naziv { get; set; }

        public string slika { get; set; }

        public List<string> ucesnici { get; set; }
    }
}
