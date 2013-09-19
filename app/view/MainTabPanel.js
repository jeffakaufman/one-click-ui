/*
 * File: app/view/MainTabPanel.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
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

Ext.define('OneClick.view.MainTabPanel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.maintabpanel',

    requires: [
        'OneClick.view.HomeContainer',
        'OneClick.view.ReportHome',
        'OneClick.view.ProfileContainer'
    ],

    config: {
        ui: 'light',
        items: [
            {
                xtype: 'homecontainer',
                title: 'Home',
                iconCls: 'home'
            },
            {
                xtype: 'reporthome',
                title: 'Report',
                iconCls: 'compose'
            },
            {
                xtype: 'profilecontainer',
                title: 'Profile Settings',
                iconCls: 'user'
            },
            {
                xtype: 'container',
                title: 'Search',
                iconCls: 'search'
            }
        ],
        tabBar: {
            docked: 'bottom'
        }
    }

});