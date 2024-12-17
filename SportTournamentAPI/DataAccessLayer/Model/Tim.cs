namespace DataAccessLayer.Model
{
    public class Tim
    {
        public int id { get; set; }

        public string naziv { get; set; }

        public string slika { get; set; }

        public virtual ICollection<TimskiTurnir> timskiTurniri { get; set; }
        public virtual ICollection<Ucesnik> ucesnici { get; set; }
    }
}
