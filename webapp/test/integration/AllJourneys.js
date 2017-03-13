jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
		"sap/ui/test/Opa5",
		"opensapmanageproducts/test/integration/pages/Common",
		"sap/ui/test/opaQunit",
		"opensapmanageproducts/test/integration/pages/Worklist",
		"opensapmanageproducts/test/integration/pages/Object",
		"opensapmanageproducts/test/integration/pages/NotFound",
		"opensapmanageproducts/test/integration/pages/Browser",
		"opensapmanageproducts/test/integration/pages/App"
	], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "opensapmanageproducts.view."
	});

	sap.ui.require([
		"opensapmanageproducts/test/integration/WorklistJourney",
		"opensapmanageproducts/test/integration/ObjectJourney",
		"opensapmanageproducts/test/integration/NavigationJourney",
		"opensapmanageproducts/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});
