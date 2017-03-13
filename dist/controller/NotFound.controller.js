sap.ui.define([
		"opensapmanageproducts/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("opensapmanageproducts.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);