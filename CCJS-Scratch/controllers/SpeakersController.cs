using System.Collections.Generic;
using System.Web.Http;
using CodeCamper.model;

namespace CodeCamper.controllers
{
    public class SpeakersController : ApiController
    {
        public IEnumerable<object> Get()
        {
            var list = new List<object>
                            {
                                new Speaker()
                                {
                                    Id = 1,
                                    FirstName = "Steven",
                                    LastName = "Sanderson",
                                    ImageSource = "steve_sanderson.jpg"
                                },
                                new Speaker()
                                {
                                    Id = 2,
                                    FirstName = "John",
                                    LastName = "Papa",
                                    ImageSource = "john_papa.jpg"
                                }
                            };

            return list;
        }
    }
}