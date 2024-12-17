using Microsoft.AspNetCore.Identity;

namespace DataAccessLayer.Model
{
    public class Ucesnik: IdentityUser
    {
        public string ime {  get; set; }

        public string prezime { get; set; }

        public ICollection<Tim> timovi { get; set; }

    }
}
