/*
 * File: app/view/RptPostEngagement.js
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

Ext.define('OneClick.view.RptPostEngagement', {
    extend: 'Ext.dataview.DataView',
    alias: 'widget.rptpostengagement',

    config: {
        scrollable: false,
        itemCls: 'report',
        store: 'PostEngagementStore',
        itemTpl: [
            '<tpl if="id == 0">',
            '    <div >    ',
            '            <div style="float:left; width:28%;font-size: 0.7em;height: 25px;">',
            '                &nbsp;',
            '            </div>',
            '            <div style="font-size:0.7em!important;float:left; width:36%;font-size: 0.9em;border-left: 2px solid #dedede;border-bottom: 2px solid #dedede; text-align:center;height: 25px;">',
            '                Campaign',
            '            </div>            ',
            '            <div style="font-size:0.7em!important;float:left; width:36%;font-size: 0.9em;border-left: 2px solid #dedede;border-bottom: 2px solid #dedede; text-align:center;height: 25px;">',
            '                Competitor',
            '            </div>',
            '            <div style="clear:both;"></div>',
            '        </div>',
            '        <div >    ',
            '            <div style="float:left; width:28%;font-size: 0.7em;height: 25px;">',
            '                &nbsp;',
            '            </div>',
            '            <div style="float:left; width:18%;font-size: 0.5em;border-left: 2px solid #dedede; text-align:center;height: 25px;">',
            '                Likes',
            '            </div>',
            '            <div style="float:left; width:18%;font-size: 0.5em;border-left: 2px solid #dedede; text-align:center;height: 25px;">',
            '                Comments',
            '            </div>',
            '            <div style="float:left; width:18%;font-size: 0.5em;border-left: 2px solid #dedede; text-align:center;height: 25px;">',
            '                Likes',
            '            </div>',
            '            <div style="float:left; width:18%;font-size: 0.5em;border-left: 2px solid #dedede; text-align:center;height: 25px;">',
            '                Comments',
            '            </div>',
            '            <div style="clear:both;"></div>',
            '        </div>',
            '    <tpl else>',
            '        <div >    ',
            '            <div style="float:left; width:28%;font-size: 0.5em; line-height:30px;height:30px;">',
            '                {timeaxis}',
            '            </div>',
            '            <div style="float:left; width:18%;font-size: 0.5em;border-left: 2px solid #dedede; text-align:right;line-height:30px;height:30px;">',
            '                {mylikes}',
            '            </div>',
            '            <div style="float:left; width:18%;font-size: 0.5em;border-left: 2px solid #dedede; text-align:right;line-height:30px;height:30px;">',
            '                {mycomments}',
            '            </div>',
            '            <div style="float:left; width:18%;font-size: 0.5em;border-left: 2px solid #dedede; text-align:right;line-height:30px;height:30px;">',
            '                {cmplikes}',
            '            </div>',
            '            <div style="float:left; width:18%;font-size: 0.5em;border-left: 2px solid #dedede; text-align:right;line-height:30px;height:30px;">',
            '                {cmpcomments}',
            '            </div>',
            '            <div style="clear:both;"></div>',
            '        </div>',
            '</tpl>'
        ]
    }

});