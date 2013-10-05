/*
 * File: app/view/SuccessCampaignList.js
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

Ext.define('OneClick.view.SuccessCampaignList', {
    extend: 'Ext.dataview.DataView',
    alias: 'widget.successcampaignlist',

    config: {
        scrollable: false,
        itemCls: 'campaign',
        store: 'SuccessCampaignStore',
        itemTpl: [
            '<div class="campaignDiv" >    ',
            '    <div class="campaignDiv-right">',
            '        <div style="float:right; width:20px">',
            '            >',
            '        </div>',
            '        <div style="width:80px; text-align:right;">',
            '            ({score}) &nbsp;&nbsp;',
            '        </div>',
            '        <div style="clear:both;"></div>',
            '    </div>',
            '    <div class="campaignDiv-success-left">&nbsp;&nbsp;{name}</div>',
            '    ',
            '    <div style="clear:both;"></div>',
            '</div>'
        ]
    }

});