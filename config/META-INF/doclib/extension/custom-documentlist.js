// Declare namespace...
if (typeof Tutorials == undefined || !Tutorials) { var Tutorials = {}; }
if (!Tutorials.custom) { Tutorials.custom = {}; }
(function()
{
  // Define constructor...
  Tutorials.custom.DocumentList = function CustomDocumentList_constructor(htmlId)
  {
    Tutorials.custom.DocumentList.superclass.constructor.call(this, htmlId);
    return this;
  };

  // Extend default DocumentList...
  YAHOO.extend(Tutorials.custom.DocumentList, Alfresco.DocumentList,
  {
    onFilterChanged: function CustomDL_onFilterChanged(layer, args)
    {
      // Call super class method...
      Tutorials.custom.DocumentList.superclass.onFilterChanged.call(this, layer,args);

      // Pop-up a message...
      Alfresco.util.PopupManager.displayMessage({
        text: "Filter Changed!"
      });
    }
  });
})();
