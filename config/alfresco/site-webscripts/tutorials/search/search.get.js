 // Find the default DocumentList widget and replace it with the custom widget
for (var i=0; i<model.widgets.length; i++)
{
    //from ftl
  if (model.widgets[i].id == "Search")
  {
    model.widgets[i].name = "Tutorials.custom.Search";
  }
}
