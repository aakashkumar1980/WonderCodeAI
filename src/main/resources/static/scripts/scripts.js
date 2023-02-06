// [WEB_PAGE] Sub Navigation //
var topOffset = 0, topOffsetCount = 0;
function styleSubNavigation(subNavigation, applicationComponent) {
    if (topOffsetCount == 0) {
        topOffset = topOffset + 100;
        topOffsetCount = topOffsetCount + 1;
    } else {
        topOffset = topOffset + 60;
    }

    $(subNavigation).attr('id', ('subNavigation-' + applicationComponent));
    $(subNavigation).attr('style', "top:" + topOffset + "px; left:20px;");
    $(subNavigation).attr('display', 'block');
    $(subNavigation).html("Define " + applicationComponent);

}
// [WEB_PAGE] Container //
function cloneAndEnableComponent(projectTemplateContainer, appendToElement) {
    projectTemplateContainer = $(projectTemplateContainer).clone(true, true);
    $(projectTemplateContainer).attr("id", $(projectTemplateContainer).attr("id") + "Clone");
    $(projectTemplateContainer).css("display", "block");

    $(projectTemplateContainer).appendTo(appendToElement);
}

/** [TEMPLATE: COMPONENT] OPTION-MENU **/
var entityMappingTypes = [
    "One to One",
    "Many to One",
    "One to Many",
    "Many to Many"
]
function setSelectMenuEntityMappingTypeOptions(selectMenu) {
    $(selectMenu).empty();

    var inputList = [];
    $(entityMappingTypes).each(function () {
        if (this.value) {
            inputList.push(this.value);
        } else {
            if (this) {
                inputList.push(this);
            }
        }
    });

    const inputSet = new Set(inputList);
    const inputSortedSet = [...inputSet].sort();
    $(selectMenu).append(
        "<option value=\"\"></option>"
    );    
    $(inputSortedSet).each(function () {
        if (this.toString()) {
            $(selectMenu).append(
                "<option value=\"" + this.toString() + "\">" + this.toString() + "</option>"
            );
        }
    });

}

var objectTypes = [
    "String",
    "Boolean",
    "Integer", "BigInteger", "Long", "Float",
    "List", "Set", "Map"
];
function setSelectMenuObjectTypeOptions(inputs, selectMenu) {
    var inputList = [];
    if (inputs) {
        $(inputs).each(function () {
            if (this.value) {
                inputList.push(this.value);
            } else {
                if (this) {
                    inputList.push(this);
                }
            }
        });
    }

    inputList = inputList.concat(objectTypes); // club both the arrays
    const inputSet = new Set(inputList);
    const inputSortedSet = [...inputSet].sort();
    $(inputSortedSet).each(function () {
        input = this.toString();
        if (input) {
            exists = false;
            $(selectMenu).find('option').each(function () {
                if (this.value == input) {
                    exists = true;
                    return false;
                }
            });

            if (!exists) {
                $(selectMenu).append(
                    "<option value=\"" + input + "\">" + input + "</option>"
                );

                if (objectTypes.indexOf(input) == -1) {
                    $(selectMenu).append(
                        "<option value=\"List&lt;" + input + "&gt;\">List&lt;" + input + "&gt;</option>"
                    );
                    $(selectMenu).append(
                        "<option value=\"Map&lt;" + input + "&gt;\">Map&lt;" + input + "&gt;</option>"
                    );
                }
            }
        }
    });

}




