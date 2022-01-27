using Inv.Api.Models;
using Microsoft.AspNetCore.Mvc;

namespace Inv.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InventoryController : ControllerBase
    {
        // GET: api/<InventoryController>
        [HttpGet]
        public IEnumerable<Inventory> Get()
        {
            return new List<Inventory>
            {
                new Inventory {Id = 1, Name= "Carton 1"},
                new Inventory {Id = 2, Name= "Carton 2"},
                new Inventory {Id = 3, Name= "Carton 3"},
            };
        }

        // GET api/<InventoryController>/5
        [HttpGet("{id}")]
        public Inventory Get(int id)
        {
            return null;
        }

        // POST api/<InventoryController>
        [HttpPost]
        public void Post([FromBody] Inventory value)
        {
        }

        // PUT api/<InventoryController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Inventory value)
        {
        }

        // DELETE api/<InventoryController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
