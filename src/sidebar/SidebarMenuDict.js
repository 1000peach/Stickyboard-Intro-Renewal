// src/sidebar/SidebarMenuDict.js

import React from 'react';

import Timeline from '@material-ui/icons/Timeline';

const SidebarMenuDict = {
    /******************
    * Intro Menu
    ******************/
    INTRO: [{
        title: 'Intro',
        icon: <Timeline />,
        url: '/intro',
        value: 101,
        need_permission: false
    }],
    /******************
     * Component Menus
     ******************/
    COMPONENTS: [
        {
            title: 'Sample',
            icon: <Timeline />,
            url: '/sample',
            value: 201,
            need_permission: false,
        },
    ],
};

export default SidebarMenuDict;
