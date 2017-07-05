/**
 * @fileoverview Checks inline styles for units
 * @author divyagnan
 */
"use strict";
const endsWith = require("lodash.endswith");
const get = require("lodash.get");
const some = require("lodash.some");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "Checks inline styles for units",
      category: "Best Practices",
      recommended: false
    },
    fixable: null,
    schema: []
  },

  create: function(context) {
    // variables should be defined here
    // props that might not have units associated with them
    const unitlessProps = ["zIndex", "flex"];

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
          const attrName = get(attr, "name.name");
          if (attrName === "style") {
            // if properties exist on the style attribute, map over them
            if (attr.value.expression.properties) {
              attr.value.expression.properties.map(prop => {
                // check to see if the prop includes the unit
                // check if the raw value of the prop exists (it doesn't exist when spreading ex ...styles)
                const rawVal = get(prop, "value.raw");
                // get the name of the prop since some props do not have units
                const propName = get(prop, "key.name");
                // get the type of the value, we want to allow variables to be passed in
                const propType = get(prop, "value.type");
                if (
                  propType === "Literal" &&
                  /**
                   * HACK: heuristic
                   * If you are passing a pure numerical (ex 40 or 90) while
                   * inline styling you will generally not use quotation marks.
                   * If you are using quotation marks, you are probably passing
                   * a string or an augmented numerical value (ex 40px or 80em)
                   */
                  !(endsWith(rawVal, "'") || endsWith(rawVal, '"')) &&
                  // spread is okay and spread will not have a propName
                  propName !== undefined &&
                  // check to see if the the prop is a unitless prop
                  !some(unitlessProps, item => item === propName)
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
