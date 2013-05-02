
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var criterion = {};	// @textField
// @endregion// @endlock

// eventHandlers// @lock

	criterion.keyup = function criterion_keyup (event)// @startlock
	{// @endlock
		sources.person.query('name == :1', $$('criterion').getValue() + '*');
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("criterion", "keyup", criterion.keyup, "WAF");
// @endregion
};// @endlock
