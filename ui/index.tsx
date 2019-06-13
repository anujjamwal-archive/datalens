import * as React from "react";
import * as ReactDom from "react-dom";
import { IDashboard } from "./lib/core/report";
import Dashboard from "./page/dashboard";

const dashboard: IDashboard = {
  id: "1",
  header: {
    id: "1/1",
    heading: "My Dashboard"
  },
  pages: [
    {
      id: "1/2",
      component: {
        id: "1/2/1",
        type: "LinearLayout",
        direction: "column",
        paddingTop: 0,
        paddingLeft: 0,
        paddingBottom: 0,
        paddingRight: 0,
        marginTop: 0,
        marginLeft: 0,
        marginBottom: 0,
        marginRight: 0,
        childComponents: [
          {
            id: "1/2/1",
            type: "LinearLayout",
            direction: "row",
            paddingTop: 10,
            paddingLeft: 10,
            paddingBottom: 10,
            paddingRight: 10,
            marginTop: 0,
            marginLeft: 0,
            marginBottom: 0,
            marginRight: 0,
            childComponents: [
              {
                id: "11111",
                type: "Panel",
                display: {
                  height: 100,
                  width: 300,
                  marginTop: 10,
                  marginBottom: 10,
                  marginLeft: 10,
                  marginRight: 10
                },
                childComponents: [
                  {
                    id: "1231",
                    type: "KPI",
                    display: {
                      height: 100,
                      width: 300,
                      paddingBottom: 10,
                      paddingTop: 10,
                      paddingLeft: 10,
                      paddingRight: 10
                    },
                    data: {
                      source: "5ceae5ab330000e0397c3902",
                      metric: {
                        aggregationFn: "",
                        field: "",
                        alias: "sales"
                      }
                    },
                    properties: {}
                  }
                ]
              },
              {
                id: "11112",
                type: "Panel",
                display: {
                  height: 100,
                  width: 300,
                  marginTop: 10,
                  marginBottom: 10,
                  marginLeft: 10,
                  marginRight: 10
                },
                childComponents: [
                  {
                    id: "2332",
                    type: "KPI",
                    display: {
                      height: 100,
                      width: 300,
                      paddingBottom: 10,
                      paddingTop: 10,
                      paddingLeft: 10,
                      paddingRight: 10
                    },
                    data: {
                      source: "5ceae5ab330000e0397c3902",
                      metric: {
                        aggregationFn: "",
                        field: "",
                        alias: "sales"
                      }
                    },
                    properties: {}
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  ]
};

ReactDom.render(<Dashboard spec={dashboard} />, document.getElementById(
  "root"
) as HTMLElement);
