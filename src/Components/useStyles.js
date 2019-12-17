
import React from "react";
import { makeStyles } from "@material-ui/core/styles";



const drawerWidth = 400;
export const useStyles = makeStyles(theme => ({

        root: {
            display: "flex",
            flexWrap: "wrap"
      },
        appBar: {
            zIndex: theme.zIndex.drawer + 1
        },
        commandButton: {
            marginLeft: theme.spacing(15),
            marginRight: theme.spacing(30)
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0
        },
        drawerPaper: {
            width: drawerWidth
        },
        content: {
            flexGrow: 2,
            padding: theme.spacing(2),
            maxWidth: 1500
        },
        noLabel: {
            marginTop: theme.spacing(3)
        },
        toolbar: theme.mixins.toolbar,
        card: {
            minWidth: 275,
        },


    }));
