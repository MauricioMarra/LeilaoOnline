using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LeilaoOnline.Models;

namespace LeilaoOnline.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LeilaosController : ControllerBase
    {
        private readonly LeilaoContext _context;

        public LeilaosController(LeilaoContext context)
        {
            _context = context;
        }

        // GET: api/Leilaos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Leilao>>> GetLeiloes()
        {
            return await _context.Leiloes.ToListAsync();
        }

        // GET: api/Leilaos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Leilao>> GetLeilao(long id)
        {
            var leilao = await _context.Leiloes.FindAsync(id);

            if (leilao == null)
            {
                return NotFound();
            }

            return leilao;
        }

        // PUT: api/Leilaos/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLeilao(long id, Leilao leilao)
        {
            if (id != leilao.Id)
            {
                return BadRequest();
            }

            _context.Entry(leilao).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LeilaoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Leilaos
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Leilao>> PostLeilao(Leilao leilao)
        {
            _context.Leiloes.Add(leilao);
            await _context.SaveChangesAsync();

            //return CreatedAtAction("GetLeilao", new { id = leilao.Id }, leilao);
            return CreatedAtAction(nameof(GetLeilao), new { id = leilao.Id }, leilao);
        }

        // DELETE: api/Leilaos/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Leilao>> DeleteLeilao(long id)
        {
            var leilao = await _context.Leiloes.FindAsync(id);
            if (leilao == null)
            {
                return NotFound();
            }

            _context.Leiloes.Remove(leilao);
            await _context.SaveChangesAsync();

            return leilao;
        }

        private bool LeilaoExists(long id)
        {
            return _context.Leiloes.Any(e => e.Id == id);
        }
    }
}
