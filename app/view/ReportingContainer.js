/*
 * File: app/view/ReportingContainer.js
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

Ext.define('OneClick.view.ReportingContainer', {
    extend: 'Ext.Container',
    alias: 'widget.reportingcontainer',

    requires: [
        'OneClick.view.ReportContainer'
    ],

    config: {
        layout: {
            type: 'vbox'
        },
        scrollable: false,
        items: [
            {
                xtype: 'segmentedbutton',
                itemId: 'btnChooseReport',
                margin: '0.5em 0',
                width: '100%',
                layout: {
                    align: 'start',
                    pack: 'center',
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'button',
                        pressed: true,
                        ui: 'small',
                        text: '% Change'
                    },
                    {
                        xtype: 'button',
                        ui: 'small',
                        text: 'Score'
                    },
                    {
                        xtype: 'button',
                        ui: 'small',
                        text: 'Post Engagment'
                    }
                ]
            },
            {
                xtype: 'reportcontainer',
                flex: 1
            }
        ]
    }

});