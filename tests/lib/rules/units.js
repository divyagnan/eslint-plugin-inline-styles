/**
 * @fileoverview Checks styles for unit values
 * @author divyagnan
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/units");
const RuleTester = require("eslint").RuleTester;

require("babel-eslint");

const parserOptions = {
  ecmaVersion: 8,
  sourceType: "module",
  ecmaFeatures: {
    jsx: true
  }
};

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester({ parserOptions });
ruleTester.run("units", rule, {
  valid: [
    {
      code: `
        class Component extends React.Component {
          render() {
            <div>
              <span style={{ height: '40px' }} color="red">stuff</span>
            </div>;
          }
        }
      `
    },
    {
      code: `
        class Component extends React.Component {
          render() {
            <div>
              <span style={{ height: "40px" }} color="red">stuff</span>
            </div>;
          }
        }
      `
    },
    {
      code: `
        class Component extends React.Component {
          render() {
            <div>
              <App props={{ someProp: 40 }} color="red">stuff</App>
            </div>;
          }
        }
      `
    },
    {
      code: `
        class Component extends React.Component {
          render() {
            <div>
              <span style={{ color: 'red' }} color="red">stuff</span>
            </div>;
          }
        }
      `
    },
    {
      code: `
        class Component extends React.Component {
          render() {
            <div>
              <span style={{ color: "red" }} color="red">stuff</span>
            </div>;
          }
        }
      `
    },
    {
      code: `
        class Component extends React.Component {
          render() {
            <div>
              <span style={{ height: "40%" }} color="red">stuff</span>
            </div>;
          }
        }
      `
    },
    {
      code: `
        class Component extends React.Component {
          render() {
            <div>
              <span style={{ height: "40pt" }} color="red">stuff</span>
            </div>;
          }
        }
      `
    },
    {
      code: `
        class Component extends React.Component {
          render() {
            <div>
              <span style={{ height: "40vh" }} color="red">stuff</span>
            </div>;
          }
        }
      `
    },
    {
      code: `
        class Component extends React.Component {
          render() {
            <div>
              <span style={{ height: "40vw" }} color="red">stuff</span>
            </div>;
          }
        }
      `
    },
    {
      code: `
        class Component extends React.Component {
          render() {
            <div>
              <span style={{ height: "40pt" }} color="red">stuff</span>
            </div>;
          }
        }
      `
    },
    {
      code: `
        class Component extends React.Component {
          render() {
            <div>
              <span style={{ height: "40pc" }} color="red">stuff</span>
            </div>;
          }
        }
      `
    },
    {
      code: `
        class Component extends React.Component {
          render() {
            <div>
              <span style={{ height: "40vmin" }} color="red">stuff</span>
            </div>;
          }
        }
      `
    },
    {
      code: `
        class Component extends React.Component {
          render() {
            <div>
              <span style={{ height: "40vmax" }} color="red">stuff</span>
            </div>;
          }
        }
      `
    },
    {
      code: `
        class Component extends React.Component {
          render() {
            <div>
              <span style={{ height: "40ch" }} color="red">stuff</span>
            </div>;
          }
        }
      `
    },
    {
      code: `
        class Component extends React.Component {
          render() {
            <div>
              <span style={{ height: "40cm" }} color="red">stuff</span>
            </div>;
          }
        }
      `
    },
    {
      code: `
        class Component extends React.Component {
          render() {
            <div>
              <span style={{ height: "40mm" }} color="red">stuff</span>
            </div>;
          }
        }
      `
    },
    {
      code: `
        class Component extends React.Component {
          render() {
            <div>
              <span style={{ height: "40ex" }} color="red">stuff</span>
            </div>;
          }
        }
      `
    },
    {
      code: `
        class Component extends React.Component {
          render() {
            <div>
              <span style={{ height: "40in" }} color="red">stuff</span>
            </div>;
          }
        }
      `
    }
  ],

  invalid: [
    {
      code: `
        class Component extends React.Component {
          render() {
            <div>
              <span style={{ height: 40 }} color="red">stuff</span>
            </div>;
          }
        }
      `,
      errors: [
        {
          message: "Expected an explicit unit",
          type: "JSXOpeningElement"
        }
      ]
    },
    {
      code: `
        class Component extends React.Component {
          render() {
            <div>
              <span style={{ margin: 40 }} color="red">stuff</span>
            </div>;
          }
        }
      `,
      errors: [
        {
          message: "Expected an explicit unit",
          type: "JSXOpeningElement"
        }
      ]
    },
    {
      code: `
        class Component extends React.Component {
          render() {
            <div>
              <span style={{ padding: 40 }} color="red">stuff</span>
            </div>;
          }
        }
      `,
      errors: [
        {
          message: "Expected an explicit unit",
          type: "JSXOpeningElement"
        }
      ]
    },
    {
      code: `
        class Component extends React.Component {
          render() {
            <div>
              <span style={{ marginRight: 40 }} color="red">stuff</span>
            </div>;
          }
        }
      `,
      errors: [
        {
          message: "Expected an explicit unit",
          type: "JSXOpeningElement"
        }
      ]
    },
    {
      code: `
        class Component extends React.Component {
          render() {
            <div>
              <span style={{ paddingLeft: 40 }} color="red">stuff</span>
            </div>;
          }
        }
      `,
      errors: [
        {
          message: "Expected an explicit unit",
          type: "JSXOpeningElement"
        }
      ]
    },
    {
      code: `
        class Component extends React.Component {
          render() {
            <div>
              <span style={{ left: 40 }} color="red">stuff</span>
            </div>;
          }
        }
      `,
      errors: [
        {
          message: "Expected an explicit unit",
          type: "JSXOpeningElement"
        }
      ]
    },
    {
      code: `
        class Component extends React.Component {
          render() {
            <div>
              <span style={{ right: 40 }} color="red">stuff</span>
            </div>;
          }
        }
      `,
      errors: [
        {
          message: "Expected an explicit unit",
          type: "JSXOpeningElement"
        }
      ]
    }
  ]
});
