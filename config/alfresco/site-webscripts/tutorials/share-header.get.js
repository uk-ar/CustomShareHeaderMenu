//Find the "Sites" menu...
var sitesMenu =
        widgetUtils.findObject(model.jsonModel, "id", "HEADER_SITES_MENU");
if (sitesMenu != null)
{
    // Change the widget to our custom menu...
    // sitesMenu.name = "tutorials/sites-menu";
}
//widgetUtils.deleteObjectFromArray(model.jsonModel, "id", "HEADER_MY_FILES");
//https://forums.alfresco.com/forum/installation-upgrades-configuration-integration/configuration/modifying-share-header-08252014
var widget, widgetsToRemove = [ "HEADER_SHARED_FILES", "HEADER_MY_FILES", "HEADER_PEOPLE", "HEADER_TASKS" ], idx, max;

if (user.istest1);

for (idx = 0, max = widgetsToRemove.length; idx < max; idx++)
{ findAndRemoveIn(model.jsonModel.widgets, null, null, widgetsToRemove[idx]); }

function findAndRemoveIn(obj, arrContext, arrIdx, id)
{
    var idx, max, key;
    if (obj !== undefined && obj !== null)
    {
        if (Object.prototype.toString.apply(obj) === "[object Object]")
        {
            if (obj.hasOwnProperty("id") && obj.id === id)
            {
                if (arrContext !== null && arrIdx !== null)
                { arrContext.splice(arrIdx, 1); }
                else
                { logger.debug("Unexpected match outside of array structure: " + jsonUtils.toJSONString(obj)); }
            }
            else
            {
                for (key in obj)
                {
                    if (obj.hasOwnProperty(key))
                    { findAndRemoveIn(obj[key], null, null, id); }
                }
            }
        }
        else if (Object.prototype.toString.apply(obj) === "[object Array]")
        {
            for (idx = 0, max = obj.length; idx < max; idx++)
            { findAndRemoveIn(obj[idx], obj, idx, id); }
        }
    }
}
