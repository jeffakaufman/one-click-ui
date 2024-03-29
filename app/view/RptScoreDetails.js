/*
 * File: app/view/RptScoreDetails.js
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

Ext.define('OneClick.view.RptScoreDetails', {
    extend: 'Ext.dataview.DataView',
    alias: 'widget.rptscoredetails',

    config: {
        scrollable: false,
        itemCls: 'report',
        store: 'ScoreStore',
        itemTpl: [
            '<tpl if="id == 0">',
            '        <div >    ',
            '            <div style="float:left; width:25%;font-size: 0.7em;height: 25px;">',
            '                &nbsp;',
            '            </div>',
            '            <div style="float:left; width:15%;font-size: 0.4em;border-left: 2px solid #dedede; text-align:center;height: 25px;">',
            '                Likes',
            '            </div>',
            '            <div style="float:left; width:15%;font-size: 0.4em;border-left: 2px solid #dedede; text-align:center;height: 25px;">',
            '                Comments',
            '            </div>',
            '            <div style="float:left; width:15%;font-size: 0.4em;border-left: 2px solid #dedede; text-align:center;height: 25px;">',
            '                Shares',
            '            </div>',
            '            <div style="float:left; width:15%;font-size: 0.4em;border-left: 2px solid #dedede; text-align:center;height: 25px;">',
            '                Actions',
            '            </div>',
            '            <div style="float:left; width:15%;font-size: 0.4em;border-left: 2px solid #dedede; text-align:center;height: 25px;">',
            '                Score',
            '            </div>',
            '            <div style="clear:both;"></div>',
            '        </div>',
            '    <tpl else>',
            '        <div >    ',
            '            <div style="float:left; width:25%;font-size: 0.5em; line-height:30px;height:30px;">',
            '                {timeaxis}',
            '            </div>',
            '            <div style="float:left; width:15%;font-size: 0.5em;border-left: 2px solid #dedede; text-align:right;line-height:30px;height:30px;">',
            '                {likes}',
            '            </div>',
            '            <div style="float:left; width:15%;font-size: 0.5em;border-left: 2px solid #dedede; text-align:right;line-height:30px;height:30px;">',
            '                {comments}',
            '            </div>',
            '            <div style="float:left; width:15%;font-size: 0.5em;border-left: 2px solid #dedede; text-align:right;line-height:30px;height:30px;">',
            '                {shares}',
            '            </div>',
            '            <div style="float:left; width:15%;font-size: 0.5em;border-left: 2px solid #dedede; text-align:right;line-height:30px;height:30px;">',
            '                {actions}',
            '            </div>',
            '            <div style="float:left; width:15%;font-size: 0.5em;border-left: 2px solid #dedede; text-align:right;line-height:30px;height:30px;">',
            '                {score}',
            '            </div>',
            '            <div style="clear:both;"></div>',
            '        </div>',
            '</tpl>'
        ]
    }

});