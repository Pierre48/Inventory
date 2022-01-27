namespace Inv.Api.Models
{
    public class Item
    {
        public string Barcode { get; set; }
        public DateTime UseByDate { get; set; }

        public string? ProductBrand { get; set; }
    }
}
