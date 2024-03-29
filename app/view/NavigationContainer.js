/*
 * File: app/view/NavigationContainer.js
 *
 * This file was generated by Sencha Architect version 2.2.3.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('OneClick.view.NavigationContainer', {
    extend: 'Ext.Container',
    alias: 'widget.navigationcontainer',

    config: {
        hidden: true,
        scrollable: true,
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: 'Navigation',
                layout: {
                    pack: 'end',
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'button',
                        itemId: 'btnNavigation',
                        iconAlign: 'right',
                        iconCls: 'bookmarks'
                    }
                ]
            },
            {
                xtype: 'button',
                itemId: 'btnHome',
                margin: '0.5em',
                text: 'Home'
            },
            {
                xtype: 'button',
                itemId: 'btnProfile',
                margin: '0.5em',
                text: 'Profile'
            },
            {
                xtype: 'button',
                itemId: 'btnCampaign',
                margin: '0.5em',
                text: 'Campaign'
            },
            {
                xtype: 'button',
                itemId: 'btnLogout',
                margin: '3em 0.5em',
                text: 'LOG OUT'
            }
        ]
    }

});