using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BaseApiController : ControllerBase
    {
        private IMediator? _mediator ;

        protected IMediator Mediator => _mediator ??= HttpContext.RequestServices.GetRequiredService<IMediator>()
        ?? throw new InvalidOperationException("IMediator service is not available");
    }
}