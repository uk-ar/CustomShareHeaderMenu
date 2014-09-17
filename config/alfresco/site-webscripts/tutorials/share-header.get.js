//Find the "Sites" menu...
   var sitesMenu = 
     widgetUtils.findObject(model.jsonModel, "id", "HEADER_SITES_MENU");
   if (sitesMenu != null)
   {
     // Change the widget to our custom menu...
     // sitesMenu.name = "tutorials/sites-menu";
   }
//widgetUtils.deleteObjectFromArray(model.jsonModel, "id", "HEADER_MY_FILES");
