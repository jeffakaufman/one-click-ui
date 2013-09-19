/*
 * File: app/controller/AppController.js
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

Ext.define('OneClick.controller.AppController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.appController',

    config: {
        models: [
            'Campaign'
        ],
        stores: [
            'Campaigns'
        ],

        refs: {
            loginContainer: 'logincontainer',
            mainContainer: 'maincontainer',
            mainTabPanel: 'maintabpanel',
            homeContainer: 'homecontainer',
            activeCampaignList: 'activecampaignlist',
            unsuccessCampaignList: 'unsuccesscampaignlist',
            successCampaignList: 'successcampaignlist',
            inactiveCampaignList: 'inactivecampaignlist',
            campaignDetailContainer: 'campaigndetailcontainer',
            campaignListContainer: 'campaignlistcontainer',
            reportContainer: 'reportcontainer',
            rptPercentChange: 'rptpercentchange',
            reportingContainer: 'reportingcontainer',
            rptPostEngagement: 'rptpostengagement',
            reportHome: 'reporthome'
        },

        control: {
            "logincontainer > #btnLogin": {
                tap: 'loginContainer_btnLogin_Tap'
            },
            "activecampaignlist": {
                itemtap: 'activeCampaignList_ItemTap'
            },
            "campaigndetailcontainer > #headerBar > #btnBack": {
                tap: 'campaignDetailContainer_btnBack_Tap'
            },
            "reportingcontainer > #btnChooseReport": {
                toggle: 'reportingContainer_btnChooseReport_Toggle'
            },
            "reportingcontainer": {
                activate: 'reportingContainer_onActivate'
            },
            "reporthome": {
                activate: 'reportHome_onActivate'
            }
        }
    },

    loginContainer_btnLogin_Tap: function(button, e, eOpts) {
        var me = this,
            mainContainer = this.getMainContainer(),
            mainTabPanel = this.getMainTabPanel(),
            homeContainer = this.getHomeContainer(),
            activeCampaignList = this.getActiveCampaignList(),
            inactiveCampaignList = this.getInactiveCampaignList(),
            successCampaignList = this.getSuccessCampaignList(),
            unsuccessCampaignList = this.getUnsuccessCampaignList(),
            mainWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width,
            recordCount = 0;

        mainContainer.setActiveItem(mainTabPanel);
        inactiveCampaignList.getStore().load({
            callback: function(records, operation, success) {
                recordCount = records.length;
                inactiveCampaignList.setHeight(recordCount * 47);
                inactiveCampaignList.setWidth(mainWidth - 20);        
            }
        });
        activeCampaignList.getStore().load({
            callback: function(records, operation, success) {
                recordCount = records.length;
                activeCampaignList.setHeight(recordCount * 47);
                activeCampaignList.setWidth(mainWidth - 20);        
            }
        });
        unsuccessCampaignList.getStore().load({
            callback: function(records, operation, success) {
                recordCount = records.length;
                unsuccessCampaignList.setHeight(recordCount * 47);
                unsuccessCampaignList.setWidth(mainWidth - 20);        
            }
        })
        successCampaignList.getStore().load({
            callback: function(records, operation, success) {
                recordCount = records.length;
                successCampaignList.setHeight(recordCount * 47);
                successCampaignList.setWidth(mainWidth - 20);        
            }
        })
    },

    activeCampaignList_ItemTap: function(dataview, index, target, record, e, eOpts) {
        var homeContainer = this.getHomeContainer(),
            campaignDetailContainer = this.getCampaignDetailContainer(),
            summaryView = campaignDetailContainer.down('#summaryView'),
            headerBar = campaignDetailContainer.down('#headerBar');
        summaryView.setData(record.data);
        headerBar.setTitle(record.get('fbpage'));
        homeContainer.setActiveItem(campaignDetailContainer);
    },

    campaignDetailContainer_btnBack_Tap: function(button, e, eOpts) {
        var homeContainer = this.getHomeContainer(),
            campaignListContainer = this.getCampaignListContainer();
        homeContainer.setActiveItem(campaignListContainer);
    },

    reportingContainer_btnChooseReport_Toggle: function(segmentedbutton, button, isPressed, eOpts) {
        var reportContainer = this.getReportContainer(),
            rptPercentChange = this.getRptPercentChange(),
            rptPostEngagement = this.getRptPostEngagement();

        if (isPressed) {
            if (button.getText() == '% Change'){
                rptPercentChange.getStore().load({
                    callback: function(records, operation, success) {                
                        this.insert(0, {
                            "id": 0,
                            "timeaxis": "&nbsp;",
                            "mylikes": "My Likes",
                            "mycomments": "My Comments",
                            "cmplikes": "Competitor Likes",
                            "cmpcomments":"Competitor Comments"
                        }
                        );
                        reportContainer.setActiveItem(rptPercentChange);
                    }
                });
            } else if (button.getText() == 'Post Engagment'){
                rptPostEngagement.getStore().load({
                    callback: function(records, operation, success) {
                        recordCount = records.length;
                        this.insert(0, {
                            "id": 0,
                            "timeaxis": "&nbsp;",
                            "mylikes": "My Likes",
                            "mycomments": "My Comments",
                            "cmplikes": "Competitor Likes",
                            "cmpcomments":"Competitor Comments"
                        }
                        );
                        reportContainer.setActiveItem(rptPostEngagement);
                    }
                });
            }
        }
    },

    reportingContainer_onActivate: function(newActiveItem, container, oldActiveItem, eOpts) {
        var reportContainer = this.getReportContainer(),
            rptPercentChange = this.getRptPercentChange();
        rptPercentChange.getStore().load({
            callback: function(records, operation, success) {
                recordCount = records.length;
                this.insert(0, {
                    "id": 0,
                    "timeaxis": "&nbsp;",
                    "mylikes": "My Likes",
                    "mycomments": "My Comments",
                    "cmplikes": "Competitor Likes",
                    "cmpcomments":"Competitor Comments"
                });
            }
        });

    },

    reportHome_onActivate: function(newActiveItem, container, oldActiveItem, eOpts) {
        newActiveItem.removeAll();
        var reportingContainer = this.getReportingContainer()
        var reportContainers = 
        {
            xtype: 'container',
            margin: '0.5em',
            layout     : 
            {
                type : 'accordion',
                toggleOnTitlebar : true,
                mode : 'SINGLE'
            },
            scrollable : 'vertical',
            items      : 
            [
            {
                title : 'Headline 1',
                timestamp: '08/09/13 10PM',
                collapsed: false,
                layout: 'fit',
                height: 800,
                items : [
                {
                    xtype : 'reportingcontainer',                
                    height: 750
                }
                ]
            },
            {
                title : 'Headline 2',
                timestamp: '08/09/13 10PM',
                collapsed: true,
                layout: 'fit',
                height: 800,
                items : [
                {
                    xtype : 'reportingcontainer',                
                    height: 750
                }
                ]
            },
            {
                title : 'Headline 3',
                timestamp: '08/09/13 10PM',
                collapsed: true,
                layout: 'fit',
                height: 800,
                items : [
                {
                    xtype : 'reportingcontainer',                
                    height: 750
                }
                ]
            }
            ]

        };
        newActiveItem.add(reportContainers);
    }

});