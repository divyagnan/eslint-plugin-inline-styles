/**
 * @fileoverview Checks styles for unit values
 * @author divyagnan
 */
"use strict";
const _ = require("lodash");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "Checks styles for unit values",
      category: "Fill me in",
      recommended: false
    },
    fixable: null, // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ]
  },

  create: function(context) {
    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      JSXOpeningElement(node) {
        // go through the node attributes
        node.attributes.map(attr => {
          // we are only interested in the style attribute for inline-styles
          if (attr.name.name === "style") {
            // if properties exist on the style attribute, map over them
            if (attr.value.expression.properties) {
              attr.value.expression.properties.map(prop => {
                // check to see if the prop includes the unit
                if (
                  [
                    "HEIGHT",
                    "WIDTH",
                    "PADDING",
                    "MARGIN",
                    "TOP",
                    "RIGHT",
                    "LEFT",
                    "BOTTOM"
                  ].includes(prop.key.name.toUpperCase()) &&
                  !_.endsWith(prop.value.value, "px")
                ) {
                  context.report(node, prop.loc, "Expected an explicit unit");
                }
              });
            }
          }
        });
      }
    };
  }
};
