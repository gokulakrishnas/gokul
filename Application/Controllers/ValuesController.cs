using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Application.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
    List<Application.Controllers.user> users = new List<user>();
    [HttpGet]
    public string GetAction(string username, string password)
    {
      List<user> users = new List<user>();

      var credential = getuser().Where(m => m.username == username && m.password == password).FirstOrDefault();
      status op = new status();


      if (credential != null)
      {

        op.login = "login success";
        return op.login.ToString();
      }

      op.require = "Incorrect Username or Password";
      return op.require;


    }









    public List<user> getuser()
    {

      users.Add(new user
      {
        username = "admin",
        password = "123"
      });
      users.Add(new user
      {
        username = "admin1",
        password = "123"
      });
      users.Add(new user
      {
        username = "admin2",
        password = "123"
      });
      users.Add(new user
      {
        username = "admin3",
        password = "123"
      });
      users.Add(new user
      {
        username = "admin4",
        password = "123"
      });



      return users;

    }



  }
}
