using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Activities.Commands
{
    public class DeleteActivity
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
        }

        public class Handler(DataContext context) : IRequestHandler<Command>
        {
            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = await context.Activities
                    .FindAsync([request.Id], cancellationToken) ?? throw new Exception("Activity not found");

                context.Remove(activity);

                await context.SaveChangesAsync(cancellationToken);
            }
        }
    }
}