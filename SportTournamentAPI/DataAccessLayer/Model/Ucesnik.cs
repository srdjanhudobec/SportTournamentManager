using Microsoft.AspNetCore.Identity;
using System.Text.Json.Serialization;

namespace DataAccessLayer.Model
{
    public class Ucesnik: IdentityUser
    {
        public string ime {  get; set; }

        public string prezime { get; set; }
        [JsonIgnore]
        public ICollection<Tim> timovi { get; set; }

    }
}
