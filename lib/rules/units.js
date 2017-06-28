/**
 * @fileoverview Checks styles for unit values
 * @author divyagnan
 */
"use strict";
const endsWith = require("lodash.endswith");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "Checks styles for unit values",
      category: "Best Practices",
      recommended: false
    },
    fixable: null,
    schema: []
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
                  /**
                   * HACK: heuristic
                   * If you are passing a pure numerical (ex 40 or 90) while
                   * inline styling you will generally not use quotation marks.
                   * If you are using quotation marks, you are probably passing
                   * a string or an augmented numerical value (ex 40px or 80em)
                   */
                  !(
                    endsWith(prop.value.raw, "'") ||
                    endsWith(prop.value.raw, '"')
                  )
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
