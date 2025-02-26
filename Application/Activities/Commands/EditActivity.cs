        using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities.Commands
{
    public class EditActivity
    {
        public class Command : IRequest
        {
            public required Activity Activity { get; set; }
        }

        public class Handler(DataContext context, IMapper mapper) : IRequestHandler<Command>
        {
            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = await context.Activities
                    .FindAsync([request.Activity.Id], cancellationToken) ?? throw new Exception("Activity not found");
                
                mapper.Map(request.Activity, activity);

                //activity.Title = request.Activity.Title ?? activity.Title;
                // activity.Description = request.Activity.Description ?? activity.Description;
                // activity.Category = request.Activity.Category ?? activity.Category;
                // activity.Date = request.Activity.Date;
                // activity.City = request.Activity.City ?? activity.City;
                // activity.Venue = request.Activity.Venue ?? activity.Venue;

                await context.SaveChangesAsync(cancellationToken);
            }
        }
    }
}