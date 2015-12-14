/*
 * File: app/view/enterprise_LandusePropertyChangeMonitor.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 5.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 5.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.enterprise_LandusePropertyChangeMonitor', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.enterprise_LandusePropertyChangeMonitor',

    requires: [
        'Ext.toolbar.Toolbar',
        'Ext.form.field.ComboBox',
        'Ext.form.Panel',
        'Ext.form.field.TextArea',
        'Ext.form.FieldSet',
        'Ext.tab.Panel',
        'Ext.tab.Tab',
        'Ext.grid.Panel',
        'Ext.grid.column.RowNumberer',
        'Ext.grid.column.Number',
        'Ext.grid.View'
    ],

    layout: 'border',
    title: '企业用地性质变更监控',
    defaultListenerScope: true,

    items: [
        {
            xtype: 'panel',
            region: 'center',
            split: true,
            html: '<div id="ent_landuseChange_div" class="MapDiv" ></div>',
            id: 'ent_landusePropertyChangeMapPanel',
            collapsed: false,
            collapsible: false,
            listeners: {
                afterrender: 'onPanelAfterRender1'
            },
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'combobox',
                            id: 'ent_landusePropertyChangeXZQ_Combo',
                            width: 350,
                            fieldLabel: '选择开发区',
                            displayField: 'mapName',
                            store: 'systemMap_QYYD_Store',
                            valueField: 'mapUrl'
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'panel',
            region: 'east',
            split: true,
            autoScroll: true,
            width: 230,
            collapsed: false,
            collapsible: true,
            title: '企业用地变更详情',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'form',
                    id: 'ent_landuseChangeAttr_Form',
                    width: 150,
                    bodyPadding: 10,
                    items: [
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: '审核状态',
                            labelWidth: 80,
                            name: 'shzt'
                        },
                        {
                            xtype: 'textareafield',
                            anchor: '100%',
                            fieldLabel: '审核意见',
                            labelWidth: 80,
                            name: 'shyj'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: '采集人',
                            labelWidth: 80,
                            name: 'cjr'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: '采集时间',
                            labelWidth: 80,
                            name: 'cjsj'
                        },
                        {
                            xtype: 'fieldset',
                            title: '要素字段属性',
                            items: [
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    fieldLabel: '目标识别码',
                                    labelWidth: 90,
                                    name: 'mbbsm'
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    fieldLabel: '要素代码',
                                    labelWidth: 90,
                                    name: 'ysdm'
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    fieldLabel: '开发区代码',
                                    labelWidth: 90,
                                    name: 'kfqdm'
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    fieldLabel: '开发区名称',
                                    labelWidth: 90,
                                    name: 'kfqmc'
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    fieldLabel: '图斑编号',
                                    labelWidth: 90,
                                    name: 'tbbh'
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    fieldLabel: '典型企业代码',
                                    labelWidth: 90,
                                    name: 'dxdm'
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    fieldLabel: '企业名称',
                                    labelWidth: 90,
                                    name: 'qymc'
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    fieldLabel: '企业地址',
                                    labelWidth: 90,
                                    name: 'qydz'
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    fieldLabel: '所属评价范围',
                                    labelWidth: 90,
                                    name: 'sspjfw'
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    fieldLabel: '行业类别',
                                    labelWidth: 90,
                                    name: 'hylb'
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    fieldLabel: '行业代码',
                                    labelWidth: 90,
                                    name: 'hydm'
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    fieldLabel: '行业企业人数',
                                    labelWidth: 90,
                                    name: 'qyrs'
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    fieldLabel: '预计总投资',
                                    labelWidth: 90,
                                    name: 'yjztz'
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    fieldLabel: '实际完成投资',
                                    labelWidth: 90,
                                    name: 'wctz'
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    fieldLabel: '总收入',
                                    labelWidth: 90,
                                    name: 'zsr'
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    fieldLabel: '总产值',
                                    labelWidth: 90,
                                    name: 'zcz'
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    fieldLabel: '税收总额/万元',
                                    labelWidth: 90,
                                    name: 'ssze'
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    fieldLabel: '企业用地面积/公顷',
                                    labelWidth: 90,
                                    name: 'qyydmj'
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    fieldLabel: '厂房及配套面积/公顷',
                                    labelWidth: 90,
                                    name: 'cfpt'
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    fieldLabel: '办公及生活设施面积/公顷',
                                    labelWidth: 90,
                                    name: 'xzbg'
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    fieldLabel: '堆场及操作场地面积/公顷',
                                    labelWidth: 90,
                                    name: 'ltcd'
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    fieldLabel: '预留地面积/公顷',
                                    labelWidth: 90,
                                    name: 'nbyld'
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    fieldLabel: '道路停车场面积/公顷',
                                    labelWidth: 90,
                                    name: 'dltcc'
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    fieldLabel: '绿地面积/公顷',
                                    labelWidth: 90,
                                    name: 'ld'
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    fieldLabel: '其他用地面积/公顷',
                                    labelWidth: 90,
                                    name: 'qt'
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    fieldLabel: '总建筑面积/公顷',
                                    labelWidth: 90,
                                    name: 'zjzmj'
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    fieldLabel: '容积率/%',
                                    labelWidth: 90,
                                    name: 'rjl'
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    fieldLabel: '构筑物基底总面积/公顷',
                                    labelWidth: 90,
                                    name: 'jdzmj'
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    fieldLabel: '建筑系数/%',
                                    labelWidth: 90,
                                    name: 'jzxs'
                                },
                                {
                                    xtype: 'textareafield',
                                    anchor: '100%',
                                    fieldLabel: '备注',
                                    labelWidth: 80,
                                    name: 'bz'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'tabpanel',
            region: 'south',
            split: true,
            height: 250,
            referenceHolder: false,
            collapsible: true,
            overlapHeader: false,
            title: '企业用地性质变更列表',
            titleCollapse: false,
            activeTab: 0,
            items: [
                {
                    xtype: 'panel',
                    layout: 'fit',
                    title: '全部',
                    items: [
                        {
                            xtype: 'gridpanel',
                            height: 150,
                            id: 'ent_landuseChange_all',
                            title: '',
                            store: 'entLanduseChange',
                            columns: [
                                {
                                    xtype: 'rownumberer'
                                },
                                {
                                    xtype: 'numbercolumn',
                                    dataIndex: 'shzt',
                                    text: '审核状态',
                                    format: '0'
                                },
                                {
                                    xtype: 'numbercolumn',
                                    dataIndex: 'mbbsm',
                                    text: '目标识别码'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'ysdm',
                                    text: '要素代码'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'kfqdm',
                                    text: '开发区代码'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'kfqmc',
                                    text: '开发区名称'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'tbbh',
                                    text: '图斑编号'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'cjr',
                                    text: '采集人'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'cjsj',
                                    text: '采集时间'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'dxdm',
                                    text: '典型企业代码'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'qymc',
                                    text: '企业名称'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'sspjfw',
                                    text: '所属评价范围'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'hylb',
                                    text: '行业类别'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'hydm',
                                    text: '行业代码'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    layout: 'fit',
                    title: '待审批'
                },
                {
                    xtype: 'panel',
                    layout: 'fit',
                    title: '已通过'
                },
                {
                    xtype: 'panel',
                    layout: 'fit',
                    title: '已驳回'
                }
            ]
        }
    ],

    onPanelAfterRender1: function(component, eOpts) {
        //加入地图的js文件
        var head = document.getElementsByTagName('head')[0];
        var script= document.createElement("script");
        script.type = "text/javascript";
        script.src="mapjs/ent_landuseChange_map.js";
        head.appendChild(script);
    }

});