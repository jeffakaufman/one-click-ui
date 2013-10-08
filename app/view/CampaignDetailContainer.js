/*
 * File: app/view/CampaignDetailContainer.js
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

Ext.define('OneClick.view.CampaignDetailContainer', {
    extend: 'Ext.Container',
    alias: 'widget.campaigndetailcontainer',

    config: {
        scrollable: true,
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                itemId: 'headerBar',
                items: [
                    {
                        xtype: 'button',
                        itemId: 'btnBack',
                        ui: 'back',
                        text: 'Back'
                    }
                ]
            },
            {
                xtype: 'container',
                height: '10em',
                itemId: 'summaryView',
                margin: '0.5em 0.5em',
                tpl: [
                    '<div>',
                    '    <div style="text-align:center;height:2em;font-size:0.7em;">Campaign: {name}</div>',
                    '    <div style="height:8em;">',
                    '        <div style="width:30%; height:8em; float:left; text-align:center;">',
                    '            <tpl if="image">',
                    '                <img style="border: 3px solid #cccccc;height:8em; max-width:100%;" src="{image}" width="auto" onload="avatarImageLoaded()">                ',
                    '            <tpl else>',
                    '                <img style="border: 3px solid #cccccc;height:8em; max-width:100%;" src="images/nophoto.jpg" width="auto">',
                    '            </tpl>',
                    '        </div>',
                    '        <div style="width:65%; height:8em; float:left;">',
                    '			<tpl if="status==1">',
                    '                <div style="font-size: 0.7em; color:#3E59A7; margin: 0 0.5em;">&nbsp;<b>Active.</b> Launched {str_startdate}</div>',
                    '            <tpl elseif="status==2">',
                    '                <div style="font-size: 0.7em; color:#66bc45; margin: 0 0.5em;">&nbsp;<b>Success.</b> </div>',
                    '            <tpl elseif="status==3">',
                    '                <div style="font-size: 0.7em; color:#EF3222; margin: 0 0.5em;">&nbsp;<b>Unsuccess.</b> </div>',
                    '            <tpl elseif="status==0">',
                    '                <div style="font-size: 0.7em; color:#ab7942; margin: 0 0.5em;">&nbsp;<b>Inactive.</b> </div>',
                    '            </tpl>',
                    '			<div style="margin: 0.5em;font-size:0.7em;">{description}</div>',
                    '            <div style="margin: 0 0.5em; font-size:0.8em;">',
                    '                <img style="height:1em;" src="images/Facebook_like_thumb.png" width="auto"> {fblikes}',
                    '                <img style="height:1em; margin: 0 0 0 3em; " src="images/Facebook_post.png" width="auto"> {fbposts}',
                    '			</div>',
                    '        </div>',
                    '        <div style="clear:both;"></div>',
                    '        ',
                    '    </div>',
                    '</div>'
                ]
            },
            {
                xtype: 'textfield',
                id: 'userengagement',
                margin: '0 0.5em 0.5em',
                label: 'User Engagement',
                labelWidth: '50%',
                name: 'userengagement'
            },
            {
                xtype: 'textfield',
                id: 'pagedata',
                margin: '0 0.5em 0.5em',
                label: 'Page',
                labelWidth: '50%',
                name: 'pagedata'
            },
            {
                xtype: 'datepickerfield',
                id: 'startdate',
                margin: '0 0.5em 0.5em',
                label: 'Start Date',
                labelWidth: '50%',
                name: 'startdate',
                placeHolder: 'mm/dd/yyyy'
            },
            {
                xtype: 'datepickerfield',
                id: 'enddate',
                margin: '0 0.5em 0.5em',
                label: 'End Date',
                labelWidth: '50%',
                name: 'enddate',
                placeHolder: 'mm/dd/yyyy'
            },
            {
                xtype: 'textfield',
                id: 'budget',
                margin: '0 0.5em 0.5em',
                label: 'Budget',
                labelWidth: '50%',
                name: 'budget'
            },
            {
                xtype: 'button',
                itemId: 'btnLaunch',
                margin: '0 0.5em',
                ui: 'action',
                text: 'Launch Campaign'
            }
        ]
    }

});