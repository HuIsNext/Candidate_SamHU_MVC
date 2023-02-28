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
            { new PersonalFileModel{ Name="Sam",Age=18,Bday=Convert.ToDateTime("02/18/2023")}};

            return View(files);
        }
        public IActionResult HomeWorkEdit(int index)
        {
            return View();
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