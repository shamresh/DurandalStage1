using System.Collections;
using System.Collections.Generic;
using System.Web.Http;
using CodeCamper.model;

namespace CodeCamper.controllers
{
    public class SessionController : ApiController
    {

        public IEnumerable<object> Get()
        {
            var list = new List<object>();
            list.Add(new Session()
                            {
                                Id = 1,
                                Title = "SPA",
                                RoomId = 2
                            });
            list.Add(new Session()
                            {
                                Id = 2,
                                Title = "WCF",
                                RoomId = 4
                            });

            return list;
        }
    }
}