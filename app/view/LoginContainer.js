/*
 * File: app/view/LoginContainer.js
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

Ext.define('OneClick.view.LoginContainer', {
    extend: 'Ext.Container',
    alias: 'widget.logincontainer',

    config: {
        ui: '',
        layout: {
            align: 'start',
            type: 'vbox'
        },
        items: [
            {
                xtype: 'fieldset',
                docked: 'top',
                title: 'LOG IN',
                items: [
                    {
                        xtype: 'textfield',
                        placeHolder: 'User ID'
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'Password'
                    }
                ]
            },
            {
                xtype: 'button',
                docked: 'top',
                itemId: 'btnLogin',
                margin: '0 0.5em 1.5em',
                ui: 'action',
                text: 'LOG IN'
            }
        ]
    }

});