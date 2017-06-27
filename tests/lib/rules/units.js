/**
 * @fileoverview Checks styles for unit values
 * @author divyagnan
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/units"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("units", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "<div style={{height: 40}}>hi</div>",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
