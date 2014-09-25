
// Declare namespace...
if (typeof Tutorials == undefined || !Tutorials) { var Tutorials = {}; }
if (!Tutorials.custom) { Tutorials.custom = {}; }
(function()
{
  //server/runner/target/tomcat/webapps/share/components/search/search.js
  // Define constructor...
  Tutorials.custom.Search = function CustomSearch_constructor(htmlId)
  {
    Tutorials.custom.Search.superclass.constructor.call(this, htmlId);
    return this;
  };

  // Extend default Search...
  YAHOO.extend(Tutorials.custom.Search, Alfresco.Search,
  {
    renderCellDescription: function CustomSearch_renderCellDescription(elCell, oRecord, oColumn, oData){
        // Call super class method...
        // Tutorials.custom.Search.superclass.renderCellDescription.call(this, elCell, oRecord, oColumn, oData);
        // Pop-up a message...
        // Alfresco.util.PopupManager.displayMessage({
        //     text: "Filter Changed!"
        // });
    }
  });
})();
// onFilterChanged: function CustomDL_onFilterChanged(layer, args)
// {
//   // Call super class method...
//   Tutorials.custom.Search.superclass.onFilterChanged.call(this, layer,args);

//   // Pop-up a message...
//   Alfresco.util.PopupManager.displayMessage({
//     text: "Filter Changed!"
//   });
// }
