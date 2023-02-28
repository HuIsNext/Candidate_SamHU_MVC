using Candidate_SamHU_MVC.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using System.Collections.Generic;
using System.Xml.Linq;

namespace Candidate_SamHU_MVC.Controllers
{
    public class HomeController : Controller
    {
        private static List<PersonalFileModel> files;
        public IActionResult HomeWork()
        {
            files = new List<PersonalFileModel>()
            { new PersonalFileModel{ Name="Sam",Age=18,Bday=Convert.ToDateTime("02/18/2023") },
              new PersonalFileModel{ Name="Sam2",Age=18,Bday=Convert.ToDateTime("02/18/2023") }
            };

            return View(files);
        }
        [HttpPost]
        public IActionResult HomeWorkEdit(PersonalFileModel model)
        {
            files[model.ID].Name = model.Name;
            files[model.ID].Age = model.Age;
            files[model.ID].Bday = model.Bday;
            return View("HomeWork", files);
        }

        public IActionResult HomeWorkDelete(int index)
        {
            files.RemoveAt(index);
            return View("HomeWork", files);
        }

        [HttpPost]
        public IActionResult HomeWorkCreate(PersonalFileModel model)
        {               
            files.Add(model);
            return View("HomeWork", files);
        }
    }
}