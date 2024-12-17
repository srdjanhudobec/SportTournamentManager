using System.Text.Json.Serialization;

namespace DataAccessLayer.Model
{
    public class TimskiTurnir
    {
        public int id { get; set; }

        public DateTime pocetak { get; set; }

        public DateTime kraj { get; set; }

        public string mestoOdrzavanja { get; set; }

        public int tipTurniraId { get; set; }

        public TipTurnira tipTurnira { get; set; }

        public int? prvoMestoId { get; set; }

        public Tim prvoMesto { get; set; }

        public int? drugoMestoId { get; set; }

        public Tim drugoMesto { get; set; }

        public int? treceMestoId { get; set; }

        public Tim treceMesto { get; set; }

        [JsonIgnore]

        public ICollection<Tim> timovi { get; set; }
    }
}
