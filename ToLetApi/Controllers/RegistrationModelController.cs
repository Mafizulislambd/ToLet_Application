using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ToLetApi.ApplicationContext;
using ToLetApi.Models;

namespace ToLetApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegistrationModelController : ControllerBase
    {
        private readonly ApplicationDBContext _context;

        public RegistrationModelController(ApplicationDBContext context)
        {
            _context = context;
        }

        // GET: api/RegistrationModel
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RegistrationModel>>> GetRegistrationModels()
        {
            return await _context.RegistrationModels.ToListAsync();
        }

        // GET: api/RegistrationModel/5
        [HttpGet("{id}")]
        public async Task<ActionResult<RegistrationModel>> GetRegistrationModel(int id)
        {
            var registrationModel = await _context.RegistrationModels.FindAsync(id);

            if (registrationModel == null)
            {
                return NotFound();
            }

            return registrationModel;
        }

        // PUT: api/RegistrationModel/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRegistrationModel(int id, RegistrationModel registrationModel)
        {
            if (id != registrationModel.Id)
            {
                return BadRequest();
            }

            _context.Entry(registrationModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RegistrationModelExists(id))
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

        // POST: api/RegistrationModel
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<RegistrationModel>> PostRegistrationModel(RegistrationModel registrationModel)
        {
            _context.RegistrationModels.Add(registrationModel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRegistrationModel", new { id = registrationModel.Id }, registrationModel);
        }

        // DELETE: api/RegistrationModel/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRegistrationModel(int id)
        {
            var registrationModel = await _context.RegistrationModels.FindAsync(id);
            if (registrationModel == null)
            {
                return NotFound();
            }

            _context.RegistrationModels.Remove(registrationModel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RegistrationModelExists(int id)
        {
            return _context.RegistrationModels.Any(e => e.Id == id);
        }
    }
}
