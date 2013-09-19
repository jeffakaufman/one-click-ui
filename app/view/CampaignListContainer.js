/*
 * File: app/view/CampaignListContainer.js
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

Ext.define('OneClick.view.CampaignListContainer', {
    extend: 'Ext.Container',
    alias: 'widget.campaignlistcontainer',

    requires: [
        'OneClick.view.ActiveCampaignList',
        'OneClick.view.SuccessCampaignList',
        'OneClick.view.UnsuccessCampaignList',
        'OneClick.view.InactiveCampaignList'
    ],

    config: {
        layout: {
            align: 'start',
            type: 'vbox'
        },
        scrollable: true,
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Home'
            },
            {
                xtype: 'label',
                html: 'Recent Campaigns',
                margin: 10
            },
            {
                xtype: 'activecampaignlist',
                margin: '5 10'
            },
            {
                xtype: 'successcampaignlist',
                margin: '5 10'
            },
            {
                xtype: 'unsuccesscampaignlist',
                margin: '5 10'
            },
            {
                xtype: 'inactivecampaignlist',
                margin: '5 10'
            }
        ]
    }

});