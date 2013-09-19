/*
 * File: app/view/CampaignDetailContainer.js
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
                title: '',
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
                    '    <div style="text-align:center;height:2em;">Campaign: {name}</div>',
                    '    <div style="height:8em;">',
                    '        <div style="width:30%; height:8em; float:left; text-align:center;">',
                    '            <tpl if="image">',
                    '                <img style="border: 3px solid #cccccc;height:8em; max-width:100%;" src="{image}" width="auto">                ',
                    '            <tpl else>',
                    '                <img style="border: 3px solid #cccccc;height:8em; max-width:100%;" src="images/nophoto.jpg" width="auto">',
                    '            </tpl>',
                    '        </div>',
                    '        <div style="width:65%; height:8em; float:left;">',
                    '			<tpl if="status==1">',
                    '                <div style="font-size: 0.7em; color:#3E59A7; margin: 0 0.5em;">&nbsp;<b>Active.</b> Launched {startdate}</div>',
                    '            <tpl else>',
                    '                <div style="font-size: 0.7em; color:#AB7942; margin: 0 0.5em;">&nbsp;<b>Inactive.</b> </div>',
                    '            </tpl>',
                    '			<div style="margin: 0.5em;">{description}</div>',
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
                margin: '0 0.5em 0.5em',
                label: 'User Engagement',
                labelWidth: '50%'
            },
            {
                xtype: 'datepickerfield',
                margin: '0 0.5em 0.5em',
                label: 'Field',
                labelWidth: '50%',
                placeHolder: 'mm/dd/yyyy'
            },
            {
                xtype: 'datepickerfield',
                margin: '0 0.5em 0.5em',
                label: 'Field',
                labelWidth: '50%',
                placeHolder: 'mm/dd/yyyy'
            },
            {
                xtype: 'textfield',
                margin: '0 0.5em 0.5em',
                label: 'Budget',
                labelWidth: '50%'
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