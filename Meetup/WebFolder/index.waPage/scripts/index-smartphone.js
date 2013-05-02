
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button1 = {};	// @button
	var criterion = {};	// @textField
	var goTo1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		sources.person.save();
		$$('navigationView1').goToPreviousView();
	};// @lock

	criterion.keyup = function criterion_keyup (event)// @startlock
	{// @endlock
		sources.person.query('name == :1', $$('criterion').getValue() + '*');
	};// @lock

	goTo1.click = function goTo1_click (event)// @startlock
	{// @endlock
		$$('navigationView1').goToNextView();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("criterion", "keyup", criterion.keyup, "WAF");
	WAF.addListener("goTo1", "click", goTo1.click, "WAF");
// @endregion
};// @endlock
