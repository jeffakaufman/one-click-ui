/*
 * File: app/store/PostEngagements.js
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

Ext.define('OneClick.store.PostEngagements', {
    extend: 'Ext.data.Store',
    alias: 'store.postengagements',

    requires: [
        'OneClick.model.PercentChange'
    ],

    config: {
        model: 'OneClick.model.PercentChange',
        storeId: 'PostEngagementStore',
        proxy: {
            type: 'ajax',
            url: 'dummy_postengagements.js',
            reader: {
                type: 'json',
                rootProperty: 'postengagements'
            }
        }
    }
});