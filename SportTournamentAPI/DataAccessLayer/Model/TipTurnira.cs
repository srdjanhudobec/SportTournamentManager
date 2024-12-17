namespace DataAccessLayer.Model
{
    public class TipTurnira
    {
        public int id {  get; set; }

        public string naziv { get; set; }

        public ICollection<TimskiTurnir> timskiTurniri { get; set; }
    }
}
